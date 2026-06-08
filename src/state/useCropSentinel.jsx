import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

/**
 * @typedef {'nominal' | 'processing' | 'crisis_resolved'} SystemMode
 * @typedef {'idle' | 'running' | 'success'} AgentStatus
 * 
 * @typedef {Object} AgentTelemetryItem
 * @property {AgentStatus} status
 * 
 * @typedef {Object} AgentTelemetry
 * @property {AgentTelemetryItem} satelliteVision
 * @property {AgentTelemetryItem} weatherIntelligence
 * @property {AgentTelemetryItem} soilSensor
 * @property {AgentTelemetryItem} marketIntelligence
 * @property {AgentTelemetryItem} interventionPlanning
 * @property {AgentTelemetryItem} alertComm
 * 
 * @typedef {Object} FarmMetrics
 * @property {number} ndvi
 * @property {number} soilMoisture
 * @property {string} weatherForecast
 * 
 * @typedef {Object} MarketMetrics
 * @property {string} mandiPriceTrend
 * @property {string} distressSaleRisk
 * 
 * @typedef {Object} InterventionPrescription
 * @property {string} actionRequired
 * @property {number} estimatedCost
 * @property {number} yieldLossRiskRupees
 * 
 * @typedef {Object} CropSentinelState
 * @property {boolean} isCrisisActive
 * @property {SystemMode} systemMode
 * @property {string} currentCycleTimestamp
 * @property {string[]} consoleLogs
 * @property {FarmMetrics} farmMetrics
 * @property {MarketMetrics} marketMetrics
 * @property {InterventionPrescription} interventionPrescription
 * @property {AgentTelemetry} agentTelemetry
 */

/** @type {CropSentinelState} */
const initialState = {
  isCrisisActive: false,
  systemMode: 'nominal',
  currentCycleTimestamp: new Date().toISOString(),
  consoleLogs: ["System initialized successfully in 'nominal' mode."],
  farmMetrics: {
    ndvi: 0.55,
    soilMoisture: 35,
    weatherForecast: "Light Overcast, 0.5mm rain expected in 5 days",
  },
  marketMetrics: {
    mandiPriceTrend: "Stable Market Average",
    distressSaleRisk: "LOW",
  },
  interventionPrescription: {
    actionRequired: "None",
    estimatedCost: 0,
    yieldLossRiskRupees: 0,
  },
  agentTelemetry: {
    satelliteVision: { status: 'idle' },
    weatherIntelligence: { status: 'idle' },
    soilSensor: { status: 'idle' },
    marketIntelligence: { status: 'idle' },
    interventionPlanning: { status: 'idle' },
    alertComm: { status: 'idle' },
  }
};

/**
 * @type {React.Context<{state: CropSentinelState, triggerCrisisSimulation: () => void} | null>}
 */
const CropSentinelContext = createContext(null);

/**
 * Provider component for the CropSentinel State Engine.
 * Wraps the application to provide global data and simulation actions.
 */
export const CropSentinelProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  
  // Ref to prevent overlapping simulation triggers
  const isSimulationRunning = useRef(false);

  /**
   * Triggers the Showstopper Sequence Simulation.
   * Executes a timed sequence simulating an asynchronous multi-agent coordination loop.
   */
  const triggerCrisisSimulation = useCallback(() => {
    if (isSimulationRunning.current) return;
    isSimulationRunning.current = true;

    // Helper for immutable nested state updates
    const updateState = (updater) => {
      setState((prev) => {
        const updates = typeof updater === 'function' ? updater(prev) : updater;
        return { ...prev, ...updates };
      });
    };

    // Step 1: 0ms - Initiate Pipeline
    updateState((prev) => ({
      isCrisisActive: true,
      systemMode: 'processing',
      consoleLogs: [
        ...prev.consoleLogs, 
        "Coordinator: Scheduled 6-hour pipeline cycle manually forced. Ingesting parallel streams..."
      ],
      agentTelemetry: {
        ...prev.agentTelemetry,
        satelliteVision: { status: 'running' },
        weatherIntelligence: { status: 'running' },
        soilSensor: { status: 'running' },
        marketIntelligence: { status: 'running' },
      }
    }));

    // Step 2: 1500ms - Satellite & Soil Anomaly
    setTimeout(() => {
      updateState((prev) => ({
        farmMetrics: {
          ...prev.farmMetrics,
          ndvi: 0.21,
          soilMoisture: 18,
        },
        consoleLogs: [
          ...prev.consoleLogs, 
          "Satellite Vision Agent: Severe spectral anomaly detected. NDVI dropped to 0.21. Soil Agent: Moisture levels dropped below critical threshold to 18%."
        ],
        agentTelemetry: {
          ...prev.agentTelemetry,
          satelliteVision: { status: 'success' },
          soilSensor: { status: 'success' },
        }
      }));
    }, 1500);

    // Step 3: 3000ms - Weather & Market Intel
    setTimeout(() => {
      updateState((prev) => ({
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

    // Step 4: 4500ms - Cross-Agent Conflict & Core Reasoning
    setTimeout(() => {
      updateState((prev) => ({
        consoleLogs: [
          ...prev.consoleLogs, 
          "Coordinator: Cross-agent conflict detected. High NDVI stress paired with dry soil and high market value signals localized drought threat. Routing context data to core reasoning layer..."
        ],
        agentTelemetry: {
          ...prev.agentTelemetry,
          interventionPlanning: { status: 'running' },
        }
      }));
    }, 4500);

    // Step 5: 6000ms - Intervention Planning Output
    setTimeout(() => {
      updateState((prev) => ({
        interventionPrescription: {
          actionRequired: "Apply 25mm irrigation within 48 hours to preserve quality",
          estimatedCost: 340,
          yieldLossRiskRupees: 18000,
        },
        consoleLogs: [
          ...prev.consoleLogs, 
          "Intervention Planning Agent: Quantified prescription compiled. Risk calculated at ₹18,000 if timeline is breached."
        ],
        agentTelemetry: {
          ...prev.agentTelemetry,
          interventionPlanning: { status: 'success' },
          alertComm: { status: 'running' },
        }
      }));
    }, 6000);

    // Step 6: 7500ms - Alert Dispatch & Resolution
    setTimeout(() => {
      updateState((prev) => ({
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
      // Optional: reset simulation lock if you want it to be replayable without reload
      // isSimulationRunning.current = false; 
    }, 7500);

  }, []); // Empty dependency array thanks to functional state updates

  return (
    <CropSentinelContext.Provider value={{ state, triggerCrisisSimulation }}>
      {children}
    </CropSentinelContext.Provider>
  );
};

/**
 * Custom React Hook for accessing the CropSentinel State Engine.
 * Provides the global `state` object and `triggerCrisisSimulation` action.
 * @returns {{ state: CropSentinelState, triggerCrisisSimulation: () => void }}
 */
export const useCropSentinel = () => {
  const context = useContext(CropSentinelContext);
  if (!context) {
    throw new Error("useCropSentinel must be used within a CropSentinelProvider");
  }
  return context;
};
