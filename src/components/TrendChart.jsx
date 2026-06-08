import React from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis, Tooltip, ReferenceLine } from 'recharts';
import { useCropSentinel } from '../state/DemoContext';

const datasetA = [
  { day: 'T-5', ndvi: 0.54 },
  { day: 'T-4', ndvi: 0.56 },
  { day: 'T-3', ndvi: 0.55 },
  { day: 'T-2', ndvi: 0.53 },
  { day: 'T-1', ndvi: 0.54 },
  { day: 'Now', ndvi: 0.55 },
];

const datasetB = [
  { day: 'T-5', ndvi: 0.54 },
  { day: 'T-4', ndvi: 0.56 },
  { day: 'T-3', ndvi: 0.55 },
  { day: 'T-2', ndvi: 0.42 },
  { day: 'T-1', ndvi: 0.31 },
  { day: 'Now', ndvi: 0.21 },
];

export default function TrendChart() {
  const { state } = useCropSentinel();
  
  // Plunge data during active crisis
  const activeData = state.isCrisisActive ? datasetB : datasetA;

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={activeData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <YAxis domain={[0, 0.7]} hide />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1C1C1F', borderColor: '#3f3f46', borderRadius: '8px' }}
            itemStyle={{ color: '#e5e5e5' }}
          />
          <ReferenceLine y={0.3} stroke="#3f3f46" strokeDasharray="3 3" />
          <Line 
            type="monotone" 
            dataKey="ndvi" 
            stroke={state.isCrisisActive ? "#fb7185" : "#81A08D"} 
            strokeWidth={3} 
            dot={{ r: 3, fill: '#1C1C1F', strokeWidth: 2 }}
            activeDot={{ r: 5 }}
            isAnimationActive={true}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
