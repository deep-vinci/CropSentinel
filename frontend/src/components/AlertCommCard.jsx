import React from 'react';
import { useCropSentinel } from '../state/DemoContext';
import { ShieldCheck, Smartphone, Volume2, MessageSquareWarning } from 'lucide-react';

export default function AlertCommCard() {
  const { state } = useCropSentinel();

  const isResolved = state.systemMode === 'crisis_resolved';

  if (!isResolved) {
    return (
      <div className="bg-[#1C1C1F] border border-zinc-800/60 rounded-lg p-4 flex items-center justify-center h-full min-h-[120px]">
        <div className="flex items-center gap-2 text-slate-500 animate-pulse">
          <div className="w-2 h-2 rounded-full bg-slate-500"></div>
          <span className="text-sm font-medium tracking-wide">Communication Channels: Listening...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-lg p-5 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex items-center gap-2 text-emerald-400 mb-4 border-b border-emerald-900/50 pb-2">
        <ShieldCheck className="w-5 h-5" />
        <h3 className="text-xs font-bold tracking-widest uppercase">Emergency Dispatch Successful</h3>
      </div>
      
      <div className="space-y-4">
        {/* Channel Gateway */}
        <div className="flex items-center gap-2">
          <div className="bg-zinc-900 p-1.5 rounded border border-zinc-800">
            <MessageSquareWarning className="w-4 h-4 text-emerald-500" />
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Gateway</p>
            <p className="text-sm text-zinc-200">Twilio WhatsApp API Core</p>
          </div>
        </div>

        {/* Target Handset */}
        <div className="flex items-center gap-2">
          <div className="bg-zinc-900 p-1.5 rounded border border-zinc-800">
            <Smartphone className="w-4 h-4 text-zinc-400" />
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Target Handset</p>
            <p className="text-sm text-zinc-200">Recipient: +91 ******4320 <span className="text-zinc-500 text-xs">(Vidarbha Region)</span></p>
          </div>
        </div>

        {/* Payload Message String */}
        <div className="mt-2 relative">
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold mb-1">Payload Message</p>
          <div className="bg-[#161618] border border-zinc-800 rounded p-3 text-sm text-zinc-300 leading-relaxed font-mono">
            "Alert: High moisture deficit detected in your 2-Acre Cotton block. Estimated ₹18,000 crop value at risk. Apply 25mm emergency irrigation immediately to lock in current peak Mandi prices."
          </div>
        </div>

        {/* Audio Pipeline Badge */}
        <div className="flex items-center gap-2 bg-emerald-900/20 border border-emerald-800/40 rounded p-2 mt-2">
          <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-300">
            <strong>Google TTS Audio Stream:</strong> Generated & Broadcast Queued (Hindi-V2)
          </span>
        </div>
      </div>
    </div>
  );
}
