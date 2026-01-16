"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Tabs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { defaultValue?: string }
>(({ className, defaultValue, children, ...props }, ref) => {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div
      ref={ref}
      data-value={value}
      className={cn("w-full", className)}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value, setValue } as any);
        }
        return child;
      })}
    </div>
  );
});
Tabs.displayName = "Tabs";

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: string, setValue?: (v: string) => void }
>(({ className, value, setValue, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  >
    {React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { selectedValue: value, onClick: (v: string) => setValue && setValue(v) } as any);
        }
        return child;
    })}
  </div>
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string, selectedValue?: string, onClick?: (v: string) => void }
>(({ className, value, selectedValue, onClick, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      selectedValue === value
        ? "bg-background text-foreground shadow-sm"
        : "hover:bg-background/50 hover:text-foreground",
      className
    )}
    onClick={() => onClick && onClick(value)}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string, valueProp?: string } // valueProp passed from parent
>(({ className, value, ...props }, ref) => {
    // Getting value from parent context is tricky without Context API, 
    // but here we rely on the Tabs component cloning children.
    // However, TabsContent is usually NOT a direct child of Tabs (often sibling of TabsList).
    // The previous implementation of cloning children in Tabs only works for direct children.
    
    // BETTER APPROACH: Use Context.
  return null;
});

// RE-IMPLEMENTATION WITH CONTEXT
const TabsContext = React.createContext<{ value?: string; setValue: (v: string) => void } | null>(null);

const TabsRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { defaultValue?: string }
>(({ className, defaultValue, children, ...props }, ref) => {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
        <div ref={ref} className={cn("w-full", className)} {...props}>
            {children}
        </div>
    </TabsContext.Provider>
  );
});
TabsRoot.displayName = "Tabs";

const TabsListRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsListRoot.displayName = "TabsList";

const TabsTriggerRoot = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }
>(({ className, value, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (!context) throw new Error("TabsTrigger must be used within Tabs");
    
    const isSelected = context.value === value;

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isSelected
          ? "bg-background text-foreground shadow-sm"
          : "hover:bg-background/50 hover:text-foreground",
        className
      )}
      onClick={() => context.setValue(value)}
      {...props}
    />
  );
});
TabsTriggerRoot.displayName = "TabsTrigger";

const TabsContentRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (!context) throw new Error("TabsContent must be used within Tabs");

    if (context.value !== value) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  );
});
TabsContentRoot.displayName = "TabsContent";

export { TabsRoot as Tabs, TabsListRoot as TabsList, TabsTriggerRoot as TabsTrigger, TabsContentRoot as TabsContent };
