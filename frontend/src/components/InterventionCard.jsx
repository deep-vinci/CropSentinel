import React from 'react';
import { useCropSentinel } from '../state/DemoContext';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

export default function InterventionCard() {
  const { state } = useCropSentinel();

  if (!state.isCrisisActive || state.interventionPrescription.yieldLossRiskRupees === 0) {
    return (
      <div className="bg-[#1C1C1F] border border-emerald-900/30 rounded-lg p-5 flex items-center gap-3">
        <ShieldCheck className="w-6 h-6 text-emerald-500/80" />
        <div>
          <h3 className="text-sm font-bold text-zinc-300">System Status: Nominal</h3>
          <p className="text-[11px] text-zinc-500">Crop telemetry stable.</p>
        </div>
      </div>
    );
  }

  // Active Crisis Mode (renders once data populates at Step 5)
  return (
    <div className="bg-rose-950/20 border border-rose-900/50 rounded-lg p-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 text-rose-400 mb-1">
        <AlertTriangle className="w-4 h-4" />
        <h3 className="text-[10px] font-bold tracking-widest uppercase">Immediate Action Required</h3>
      </div>
      
      <h2 className="text-zinc-100 text-sm font-medium mt-2 uppercase tracking-wide">Yield-Loss Risk:</h2>
      <p className="text-4xl font-bold text-[#C97A7A] tracking-tight mt-1 mb-4">
        ₹{state.interventionPrescription.yieldLossRiskRupees.toLocaleString()}
      </p>
      
      <div className="space-y-4 text-xs">
        <div className="bg-black/30 p-3 rounded border border-rose-900/30">
          <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-1">Directives</p>
          <p className="text-zinc-300 font-mono text-[11px] leading-relaxed">
            {state.interventionPrescription.actionRequired}
          </p>
        </div>
        
        <div className="flex justify-between items-center bg-[#161618] px-3 py-2 rounded border border-zinc-800">
          <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Estimated Cost</span>
          <span className="text-zinc-200 font-mono">₹{state.interventionPrescription.estimatedCost.toLocaleString()}</span>
        </div>
      </div>

      <button className="mt-5 w-full bg-rose-400/90 hover:bg-rose-400 text-zinc-950 py-3 rounded text-sm font-bold flex justify-between items-center px-4 transition-colors shadow-lg shadow-rose-900/20">
        <span>Deploy Automatic Irrigation</span>
        <span>→</span>
      </button>
    </div>
  );
}
