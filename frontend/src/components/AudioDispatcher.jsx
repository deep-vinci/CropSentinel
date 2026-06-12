import React from 'react';
import { useCropSentinel } from '../state/DemoContext';
import { Volume2, Play, Activity } from 'lucide-react';

export default function AudioDispatcher() {
  const { state } = useCropSentinel();
  const isResolved = state.systemMode === 'crisis_resolved';

  if (!isResolved) {
    return (
      <div className="bg-[#1C1C1F] border border-zinc-800/60 rounded-lg p-4 flex items-center gap-3 min-h-[80px]">
        <Volume2 className="w-5 h-5 text-zinc-600" />
        <span className="text-sm font-medium text-zinc-500">Audio Broadcast: Standby</span>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border border-zinc-700/50 rounded-lg p-4 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex items-center justify-between mb-3 border-b border-zinc-800 pb-2">
        <h3 className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Automated Voice Dispatch</h3>
        <span className="text-[9px] text-zinc-500 font-mono bg-zinc-800 px-1.5 py-0.5 rounded">Engine: Google TTS API</span>
      </div>
      
      <div className="flex items-center gap-4 bg-black/40 rounded p-3 border border-emerald-900/30">
        <button className="bg-emerald-500/20 hover:bg-emerald-500/30 p-2.5 rounded-full border border-emerald-500/50 transition-colors cursor-default">
          <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
        </button>
        
        <div className="flex-1">
          <div className="flex justify-between items-end mb-1">
            <span className="text-[11px] font-mono text-zinc-300 font-semibold">HINDI_V2_ALERT.mp3</span>
            <span className="text-[9px] text-emerald-500 animate-pulse flex items-center gap-1">
              <Activity className="w-3 h-3" /> Broadcast Active
            </span>
          </div>
          
          {/* Simulated audio waveform */}
          <div className="flex items-end gap-0.5 h-6">
            {[...Array(30)].map((_, i) => {
              const h = Math.random() * 100;
              return (
                <div 
                  key={i} 
                  className="w-full bg-emerald-500/60 rounded-t-sm" 
                  style={{ height: `${h}%`, opacity: h > 50 ? 1 : 0.4 }}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
