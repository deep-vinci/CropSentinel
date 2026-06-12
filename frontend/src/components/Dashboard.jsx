import React from 'react';
import { useCropSentinel } from '../state/DemoContext';
import { 
  ShieldCheck, MapPin, Cloud, Droplet, TrendingUp, Bot, Siren, 
  LayoutGrid, BarChart2, Bell, AlertTriangle, PhoneCall 
} from 'lucide-react';
import TrendChart from './TrendChart';
import MarketChart from './MarketChart';
import AlertCommCard from './AlertCommCard';

export default function Dashboard() {
  const { state, triggerCrisisSimulation } = useCropSentinel();

  return (
    <div className="flex flex-col h-full bg-[#161618] text-zinc-300 pb-20 overflow-y-auto overflow-x-hidden font-sans">
      
      {/* HEADER */}
      <header className="flex items-center justify-between p-4 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <h1 className="text-lg font-semibold text-zinc-100 tracking-tight">CropSentinel</h1>
        </div>
        <div className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-800 text-zinc-400 tracking-widest border border-zinc-700">
          AGENT ROOM : LIVE
        </div>
      </header>

      <main className="flex-1 p-4 space-y-6">
        
        {/* SIMULATION TRIGGER BUTTON */}
        <button 
          onClick={triggerCrisisSimulation}
          disabled={state.isCrisisActive}
          className={`w-full py-3 rounded-md font-semibold text-sm tracking-wide transition-all shadow-lg
            ${state.isCrisisActive 
              ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700/50' 
              : 'bg-rose-400/90 hover:bg-rose-400 text-zinc-950 shadow-rose-900/20 active:scale-[0.98]'}`}
        >
          {state.isCrisisActive ? 'SIMULATION IN PROGRESS' : 'Trigger Crisis Simulation'}
        </button>

        {/* FARM CONTEXT */}
        <section>
          <h2 className="text-[10px] font-bold tracking-widest text-zinc-500 mb-3">FARM CONTEXT</h2>
          <div className="bg-[#1C1C1F] rounded-lg border border-zinc-800/60 p-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-500">Crop Type</span>
              <span className="text-zinc-200">Cotton</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Sown</span>
              <span className="text-zinc-200">45 Days Ago</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Soil Profile</span>
              <span className="text-zinc-200">ERIC Clay-Loam</span>
            </div>
          </div>
        </section>

        {/* ACTIVE MESH AGENTS */}
        <section>
          <h2 className="text-[10px] font-bold tracking-widest text-zinc-500 mb-3">ACTIVE MESH AGENTS</h2>
          <div className="bg-[#1C1C1F] rounded-lg border border-zinc-800/60 p-4 space-y-3 text-sm">
            <AgentRow icon={MapPin} name="Satellite Ops" status={state.agentTelemetry.satelliteVision.status} />
            <AgentRow icon={Cloud} name="Weather Mesh" status={state.agentTelemetry.weatherIntelligence.status} />
            <AgentRow icon={Droplet} name="Soil Probe" status={state.agentTelemetry.soilSensor.status} />
            <AgentRow icon={TrendingUp} name="Market Flow" status={state.agentTelemetry.marketIntelligence.status} />
            <AgentRow icon={Bot} name="Intervention AI" status={state.agentTelemetry.interventionPlanning.status} />
            <AgentRow icon={Siren} name="Alert Dispatch" status={state.agentTelemetry.alertComm.status} />
          </div>
        </section>

        {/* COORDINATOR LOG (TERMINAL) */}
        <section>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-[10px] font-bold tracking-widest text-zinc-500">COORDINATOR LOG</h2>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
            </div>
          </div>
          <div className="bg-zinc-950 rounded-lg border border-zinc-800 p-3 h-48 overflow-y-auto font-mono text-[11px] leading-relaxed shadow-inner">
            {state.consoleLogs.map((log, i) => (
              <div key={i} className="mb-2 text-zinc-400 break-words">
                <span className="text-emerald-500/70 mr-2">{'>'}</span>
                {highlightLog(log)}
              </div>
            ))}
            {state.systemMode === 'processing' && (
              <div className="animate-pulse text-zinc-600">_</div>
            )}
          </div>
        </section>

        {/* MAP / SATELLITE VIEW PLACEHOLDER (using dark styled block) */}
        <section>
          <div className="h-32 bg-zinc-900 rounded-lg border border-zinc-800 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900 via-zinc-900 to-zinc-900"></div>
            
            <div className="relative z-10 flex flex-col gap-2 w-full px-4">
               <div className="flex items-center gap-2 bg-black/60 w-max px-2 py-1 rounded border border-zinc-800/50 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] font-mono text-zinc-300">Sector A: Optimal</span>
               </div>
               <div className="flex items-center gap-2 bg-black/60 w-max px-2 py-1 rounded border border-red-900/30 backdrop-blur-sm">
                  <div className={`w-1.5 h-1.5 rounded-full ${state.farmMetrics.ndvi < 0.3 ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`}></div>
                  <span className="text-[10px] font-mono text-zinc-300">Sector B: {state.farmMetrics.ndvi < 0.3 ? 'Stress Alpha' : 'Optimal'}</span>
               </div>
            </div>
            <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-0.5 rounded text-[9px] font-mono border border-zinc-800/50">
              20.82° N, 77.75° E
            </div>
          </div>
        </section>

        {/* YIELD-LOSS RISK CARD */}
        {state.interventionPrescription.yieldLossRiskRupees > 0 && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-rose-950/20 border border-rose-900/50 rounded-lg p-5">
              <div className="flex items-center gap-2 text-rose-400 mb-1">
                <AlertTriangle className="w-4 h-4" />
                <h3 className="text-[10px] font-bold tracking-widest">IMMEDIATE ACTION REQUIRED</h3>
              </div>
              <h2 className="text-zinc-100 text-sm font-medium mt-2">YIELD-LOSS RISK:</h2>
              <p className="text-3xl font-bold text-rose-300 tracking-tight">
                ₹{state.interventionPrescription.yieldLossRiskRupees.toLocaleString()}
              </p>
              
              <div className="mt-4 text-xs text-zinc-400 leading-relaxed space-y-3">
                <p>Agent mesh suggests critical evapotranspiration levels. Delayed response will result in irreversible boll shedding within 72 hours.</p>
                <div className="bg-black/20 p-2 rounded border border-rose-900/30 font-mono text-[10px]">
                  {state.interventionPrescription.actionRequired}
                  <br />
                  Est Cost: ₹{state.interventionPrescription.estimatedCost}
                </div>
              </div>

              <button className="mt-5 w-full bg-rose-400/80 hover:bg-rose-400 text-zinc-950 py-2.5 rounded text-sm font-semibold flex justify-between items-center px-4 transition-colors">
                <span>Deploy Automatic Irrigation</span>
                <span>→</span>
              </button>
            </div>
          </section>
        )}

        {/* NDVI INDEX CHART */}
        <section>
          <div className="flex justify-between items-end mb-3">
            <h2 className="text-[10px] font-bold tracking-widest text-zinc-500">NDVI INDEX</h2>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-zinc-200">{state.farmMetrics.ndvi.toFixed(2)}</span>
              {state.farmMetrics.ndvi < 0.3 && <span className="text-[10px] font-bold text-rose-400 bg-rose-400/10 px-1.5 py-0.5 rounded">-0.34</span>}
            </div>
          </div>
          <div className="bg-[#1C1C1F] rounded-lg border border-zinc-800/60 p-4 h-40">
             <TrendChart />
          </div>
        </section>

        {/* MARKET TRENDS CHART */}
        <section>
          <h2 className="text-[10px] font-bold tracking-widest text-zinc-500 mb-3">MARKET TRENDS</h2>
          <div className="bg-[#1C1C1F] rounded-lg border border-zinc-800/60 pt-4 pr-4 h-48">
             <MarketChart />
          </div>
        </section>

        {/* ALERT DISPATCH */}
        <section>
          <h2 className="text-[10px] font-bold tracking-widest text-zinc-500 mb-3">ALERT DISPATCH</h2>
          <AlertCommCard />
        </section>
      </main>

      {/* BOTTOM NAV */}
      <nav className="fixed bottom-0 w-full max-w-[420px] bg-[#161618]/90 backdrop-blur border-t border-zinc-800 flex justify-between px-6 py-3 pb-safe">
        <NavItem icon={LayoutGrid} label="Home" active />
        <NavItem icon={BarChart2} label="Analysis" />
        <NavItem icon={TrendingUp} label="Market" />
        <NavItem icon={Bell} label="Alerts" badge={state.systemMode === 'crisis_resolved'} />
      </nav>
    </div>
  );
}

// Subcomponents

function AgentRow({ icon: Icon, name, status }) {
  const statusColors = {
    idle: 'bg-zinc-700',
    running: 'bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.5)]',
    success: name.includes('Soil') || name.includes('Vision') ? 'bg-rose-400' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]'
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Icon className="w-4 h-4 text-zinc-500" />
        <span className="text-zinc-300">{name}</span>
      </div>
      <div className={`w-2 h-2 rounded-full ${statusColors[status]}`}></div>
    </div>
  );
}

function NavItem({ icon: Icon, label, active, badge }) {
  return (
    <div className={`flex flex-col items-center gap-1 relative ${active ? 'text-zinc-100' : 'text-zinc-500'}`}>
      <Icon className="w-5 h-5" />
      <span className="text-[9px] font-medium tracking-wide">{label}</span>
      {badge && <div className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border border-[#161618]"></div>}
    </div>
  );
}

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
