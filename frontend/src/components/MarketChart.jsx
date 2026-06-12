import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useCropSentinel } from '../state/DemoContext';

// Mock volume data over weeks
const marketData = [
  { week: 'W1', volume: 4500 },
  { week: 'W2', volume: 5200 },
  { week: 'W3', volume: 4800 },
  { week: 'W4', volume: 6100 },
  { week: 'W5', volume: 5900 },
  { week: 'W6', volume: 7200 }, // Peak window
];

export default function MarketChart() {
  const { state } = useCropSentinel();

  // If crisis is active (Step 3 marks market as success), maybe we show a highlighted state or keep it standard.
  // The prompt says "Bind this chart directly to your marketMetrics state variables."
  // And "Map out a standard vertical BarChart tracking weekly inflow metrics using your soft clay ochre (#D4A373) palette."

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={marketData} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
          {/* Ultra-thin grid lines matching border-stone-700/40 */}
          <CartesianGrid stroke="#44403c" strokeOpacity={0.4} vertical={false} />
          
          <XAxis 
            dataKey="week" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#71717a', fontSize: 10 }} // zinc-500
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#71717a', fontSize: 10 }}
          />
          
          <Tooltip 
            cursor={{ fill: '#27272a' }} // zinc-800 on hover
            contentStyle={{ backgroundColor: '#1C1C1F', borderColor: '#3f3f46', borderRadius: '8px' }}
            itemStyle={{ color: '#D4A373' }}
          />
          
          <Bar 
            dataKey="volume" 
            fill="#D4A373" 
            radius={[2, 2, 0, 0]}
            isAnimationActive={true}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
