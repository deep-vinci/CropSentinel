import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

/**
 * Initial static state object matching the exact structure requested.
 * Acts as the blueprint for the Global State Engine.
 */
const initialCropSentinelState = {
  isCrisisActive: false,
  systemMode: 'nominal', // 'nominal' | 'processing' | 'crisis_resolved'
  currentCycleTimestamp: "2026-06-08T12:00:00Z",
  farmMetrics: { 
    ndvi: 0.55, 
    soilMoisture: 35, 
    weatherForecast: "Light Overcast, 0.5mm rain expected in 5 days" 
  },
  marketMetrics: { 
    mandiPriceTrend: "Stable Market Average", 
    distressSaleRisk: "LOW" 
  },
  interventionPrescription: { 
    actionRequired: "", 
    estimatedCost: 0, 
    yieldLossRiskRupees: 0 
  },
  agentTelemetry: {
    satelliteVision: { status: 'idle' },
    weatherIntelligence: { status: 'idle' },
    soilSensor: { status: 'idle' },
    marketIntelligence: { status: 'idle' },
    interventionPlanning: { status: 'idle' },
    alertComm: { status: 'idle' }
  },
  consoleLogs: []
};

/**
 * Context to hold our Global State Engine
 */
const DemoContext = createContext(null);

/**
 * DemoProvider Component
 * 
 * Serves as the central state provider for the CropSentinel dashboard,
 * managing all immutable updates and simulation coordination.
 */
export const DemoProvider = ({ children }) => {
  const [state, setState] = useState(initialCropSentinelState);
  
  // Ref lock to prevent overlapping simulation sequences
  const isSimulationRunning = useRef(false);

  /**
   * THE "SHOWSTOPPER SEQUENCE" TIMING ENGINE
   * 
   * Simulates an asynchronous, multi-agent AI execution pipeline.
   * Utilizes functional state updates (`prev => ...`) to guarantee
   * perfectly precise deep object immutability and re-render reliability.
   */
  const triggerCrisisSimulation = useCallback(() => {
    // Prevent duplicate overlapping triggers
    if (isSimulationRunning.current) return;
    isSimulationRunning.current = true;

    // Helper for applying deep immutable state partials cleanly
    const mutateState = (updater) => {
      setState((prev) => {
        const partial = typeof updater === 'function' ? updater(prev) : updater;
        return { ...prev, ...partial };
      });
    };

    // Step 1: 0ms
    mutateState((prev) => ({
      isCrisisActive: true,
      systemMode: 'processing',
      consoleLogs: [
        ...prev.consoleLogs,
        "Coordinator: Scheduled 6-hour pipeline cycle manually forced. Ingesting parallel telemetry streams..."
      ],
      agentTelemetry: {
        ...prev.agentTelemetry,
        satelliteVision: { status: 'running' },
        weatherIntelligence: { status: 'running' },
        soilSensor: { status: 'running' },
        marketIntelligence: { status: 'running' },
      }
    }));

    // Step 2: 1500ms
    setTimeout(() => {
      mutateState((prev) => ({
        farmMetrics: {
          ...prev.farmMetrics,
          ndvi: 0.21,
          soilMoisture: 18,
        },
        consoleLogs: [
          ...prev.consoleLogs,
          "Satellite Vision Agent: Severe spectral anomaly detected. NDVI dropped to 0.21. Soil Sensor: Moisture levels dropped below critical threshold to 18%."
        ],
        agentTelemetry: {
          ...prev.agentTelemetry,
          satelliteVision: { status: 'success' },
          soilSensor: { status: 'success' },
        }
      }));
    }, 1500);

    // Step 3: 3000ms
    setTimeout(() => {
      mutateState((prev) => ({
        farmMetrics: {
          ...prev.farmMetrics,
          weatherForecast: "0mm Rainfall for next 12 days",
        },
        marketMetrics: {
          ...prev.marketMetrics,
          mandiPriceTrend: "Seasonal Peak Window",
        },
        consoleLogs: [
          ...prev.consoleLogs,
          "Weather Intel: Evapotranspiration high. No rain predicted. Market Intel: Mandi wholesale prices hitting seasonal peak."
        ],
        agentTelemetry: {
          ...prev.agentTelemetry,
          weatherIntelligence: { status: 'success' },
          marketIntelligence: { status: 'success' },
        }
      }));
    }, 3000);

    // Step 4: 4500ms
    setTimeout(() => {
      mutateState((prev) => ({
        consoleLogs: [
          ...prev.consoleLogs,
          "Coordinator: Signals aligned. High NDVI stress paired with dry soil and high market value confirms localized drought threat. Routing context data to core reasoning layer..."
        ],
        agentTelemetry: {
          ...prev.agentTelemetry,
          interventionPlanning: { status: 'running' },
        }
      }));
    }, 4500);

    // Step 5: 6000ms
    setTimeout(() => {
      mutateState((prev) => ({
        interventionPrescription: {
          ...prev.interventionPrescription,
          actionRequired: "Apply 25mm irrigation within 48 hours to preserve quality",
          estimatedCost: 340,
          yieldLossRiskRupees: 18000,
        },
        consoleLogs: [
          ...prev.consoleLogs,
          "Intervention Planning Agent: Quantified prescription compiled. Financial loss risk calculated at ₹18,000 if timeline is breached."
        ],
        agentTelemetry: {
          ...prev.agentTelemetry,
          interventionPlanning: { status: 'success' },
          alertComm: { status: 'running' },
        }
      }));
    }, 6000);

    // Step 6: 7500ms
    setTimeout(() => {
      mutateState((prev) => ({
        systemMode: 'crisis_resolved',
        consoleLogs: [
          ...prev.consoleLogs,
          "Alert Agent: Multilingual emergency dispatch successful. WhatsApp alert delivered to registered user handset via Twilio API. Audio broadcast queued via Google TTS Engine."
        ],
        agentTelemetry: {
          ...prev.agentTelemetry,
          alertComm: { status: 'success' },
        }
      }));
      
      // Optionally reset the lock if you want the simulation to be replayable
      isSimulationRunning.current = false;
    }, 7500);

  }, []); // Functional updates remove the need for dependency array bindings

  return (
    <DemoContext.Provider value={{ state, triggerCrisisSimulation }}>
      {children}
    </DemoContext.Provider>
  );
};

/**
 * EXPORTABLE CUSTOM HOOK
 * 
 * Safely consumes the CropSentinel Global State Engine.
 * Must be used inside a deeply nested component wrapped by <DemoProvider>.
 */
export const useCropSentinel = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("Developer Error: `useCropSentinel` must be used within a `<DemoProvider>` component tree.");
  }
  return context;
};
