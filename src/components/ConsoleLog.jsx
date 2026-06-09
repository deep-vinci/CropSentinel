import React, { useEffect, useRef } from 'react';
import { useCropSentinel } from '../state/DemoContext';

export default function ConsoleLog() {
  const { state } = useCropSentinel();
  const bottomRef = useRef(null);

  // Auto-scroll to bottom whenever a new log is appended
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [state.consoleLogs.length]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-[10px] font-bold tracking-widest text-zinc-500">COORDINATOR LOG</h2>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
        </div>
      </div>
      <div className="flex-1 bg-zinc-950 rounded-lg border border-zinc-800 p-4 overflow-y-auto font-mono text-[11px] leading-relaxed shadow-inner">
        {state.consoleLogs.map((log, i) => (
          <div key={i} className="mb-3 text-zinc-400 break-words">
            <span className="text-emerald-500/70 mr-2">{'>'}</span>
            {highlightLog(log)}
          </div>
        ))}
        {state.systemMode === 'processing' && (
          <div className="animate-pulse text-zinc-600">_</div>
        )}
        {/* Invisible anchor for auto-scrolling */}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

// Regex highlighter for terminal output
function highlightLog(logStr) {
  const parts = logStr.split(/(\[.*?\]|Coordinator:|Satellite Vision Agent:|Soil Sensor:|Weather Intel:|Market Intel:|Intervention Planning Agent:|Alert Agent:)/);
  
  return parts.map((part, i) => {
    if (part.includes('Coordinator:')) return <span key={i} className="text-amber-500/90 font-semibold">{part}</span>;
    if (part.includes('Alert Agent:')) return <span key={i} className="text-emerald-400 font-semibold">{part}</span>;
    if (part.includes('Intervention')) return <span key={i} className="text-rose-400 font-semibold">{part}</span>;
    if (part.includes('Agent:') || part.includes('Intel:') || part.includes('Sensor:')) return <span key={i} className="text-indigo-400 font-semibold">{part}</span>;
    return <span key={i}>{part}</span>;
  });
}
