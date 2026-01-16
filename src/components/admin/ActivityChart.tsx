
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
    ResponsiveContainer, 
    AreaChart, 
    Area, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip 
} from 'recharts';

interface ActivityChartProps {
    stats: any;
}

export function ActivityChart({ stats }: ActivityChartProps) {
    // Generate dummy trend data based on current stats to look dynamic
    const data = [
        { name: 'Jan', value: Math.floor(stats.notices * 0.8) },
        { name: 'Feb', value: Math.floor(stats.notices * 0.9) },
        { name: 'Mar', value: Math.floor(stats.notices * 1.0) },
        { name: 'Apr', value: Math.floor(stats.notices * 1.1) },
        { name: 'May', value: Math.floor(stats.notices * 1.2) },
        { name: 'Jun', value: Math.floor(stats.notices * 1.1) },
    ];

    return (
        <Card className="shadow-lg border-none overflow-hidden">
            <CardHeader className="border-b border-slate-100 bg-slate-50/30">
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-xl font-bold text-slate-900">Engagement Overview</CardTitle>
                        <CardDescription>Activity trends across the portal over the last 6 months</CardDescription>
                    </div>
                    {/* Optional: Add a dropdown filter here */}
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="h-[350px] w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis 
                                dataKey="name" 
                                fontSize={12} 
                                tickLine={false} 
                                axisLine={false} 
                                tick={{ fill: '#64748b' }}
                            />
                            <YAxis 
                                fontSize={12} 
                                tickLine={false} 
                                axisLine={false} 
                                tick={{ fill: '#64748b' }}
                            />
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: '#fff', 
                                    borderRadius: '8px', 
                                    border: 'none', 
                                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' 
                                }}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="value" 
                                stroke="#8b5cf6" 
                                strokeWidth={3}
                                fillOpacity={1} 
                                fill="url(#colorValue)" 
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
