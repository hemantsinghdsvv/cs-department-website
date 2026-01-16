"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{ 
    openItem: string | undefined; 
    toggleItem: (value: string) => void;
} | null>(null);

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { type?: "single" | "multiple", collapsible?: boolean, defaultValue?: string }
>(({ className, children, defaultValue, type, collapsible, ...props }, ref) => {
  const [openItem, setOpenItem] = React.useState<string | undefined>(defaultValue);

  const toggleItem = (value: string) => {
    setOpenItem((prev) => (prev === value ? undefined : value));
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
        <div ref={ref} className={cn("space-y-4", className)} {...props}>
            {children}
        </div>
    </AccordionContext.Provider>
  );
});
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, ...props }, ref) => (
  <div ref={ref} className={cn("border-b", className)} data-value={value} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    // Find parent item value
    // This is simplified; in a real app we'd need more robust way to pass value down or use context
    // For now, we assume AccordionTrigger is direct child of AccordionItem and we can't easily get the value unless we wrap AccordionItem in another context.
    
    // ADJUSTMENT: We need AccordionItemContext.
    
    return (
        <button
            ref={ref}
            type="button"
            className={cn(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </button>
    );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </div>
));
AccordionContent.displayName = "AccordionContent";

// Better Implementation with ItemContext
const AccordionItemContext = React.createContext<{ value: string } | null>(null);

const AccordionItemRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, children, ...props }, ref) => (
    <AccordionItemContext.Provider value={{ value }}>
        <div ref={ref} className={cn("border-b", className)} {...props}>
             {children}
        </div>
    </AccordionItemContext.Provider>
));
AccordionItemRoot.displayName = "AccordionItem";

const AccordionTriggerRoot = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
    const rootContext = React.useContext(AccordionContext);
    const itemContext = React.useContext(AccordionItemContext);

    if (!rootContext || !itemContext) throw new Error("AccordionTrigger must be used within Accordion and AccordionItem");
    
    const isOpen = rootContext.openItem === itemContext.value;

    return (
        <button
            ref={ref}
            type="button"
            onClick={() => rootContext.toggleItem(itemContext.value)}
            className={cn(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-primary [&>svg]:rotate-0",
                isOpen && "[&>svg]:rotate-180 text-primary",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </button>
    );
});
AccordionTriggerRoot.displayName = "AccordionTrigger";

const AccordionContentRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    const rootContext = React.useContext(AccordionContext);
    const itemContext = React.useContext(AccordionItemContext);

    if (!rootContext || !itemContext) return null;
    
    const isOpen = rootContext.openItem === itemContext.value;
    
    if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all animate-in fade-in slide-in-from-top-1 duration-200",
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0 text-muted-foreground">{children}</div>
    </div>
  );
});
AccordionContentRoot.displayName = "AccordionContent";

export { Accordion, AccordionItemRoot as AccordionItem, AccordionTriggerRoot as AccordionTrigger, AccordionContentRoot as AccordionContent };
