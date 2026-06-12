import React, { createContext, useContext, useState } from 'react';

/**
 * @typedef {'nominal' | 'processing' | 'crisis_resolved'} SystemMode
 */

/**
 * @typedef {'idle' | 'running' | 'success'} AgentStatus
 */

/**
 * @typedef {Object} AgentTelemetryItem
 * @property {AgentStatus} status
 */

/**
 * @typedef {Object} AgentTelemetry
 * @property {AgentTelemetryItem} satelliteVision
 * @property {AgentTelemetryItem} weatherIntelligence
 * @property {AgentTelemetryItem} soilSensor
 * @property {AgentTelemetryItem} marketIntelligence
 * @property {AgentTelemetryItem} interventionPlanning
 * @property {AgentTelemetryItem} alertComm
 */

/**
 * @typedef {Object} FarmMetrics
 * @property {number} ndvi
 * @property {number} soilMoisture
 * @property {string} weatherForecast
 */

/**
 * @typedef {Object} MarketMetrics
 * @property {string} mandiPriceTrend
 * @property {string} distressSaleRisk
 */

/**
 * @typedef {Object} InterventionPrescription
 * @property {string} actionRequired
 * @property {number} estimatedCost
 * @property {number} yieldLossRiskRupees
 */

/**
 * @typedef {Object} GlobalState
 * @property {boolean} isCrisisActive
 * @property {SystemMode} systemMode
 * @property {string} currentCycleTimestamp
 * @property {string[]} consoleLogs
 * @property {FarmMetrics} farmMetrics
 * @property {MarketMetrics} marketMetrics
 * @property {InterventionPrescription} interventionPrescription
 * @property {AgentTelemetry} agentTelemetry
 */

/** 
 * Initial state object matching the exact Global State Hierarchy.
 * @type {GlobalState} 
 */
export const initialGlobalState = {
  isCrisisActive: false,
  systemMode: 'nominal',
  currentCycleTimestamp: '2026-06-08T12:07:26.000Z', // 2026 ISO Timestamp
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
 * @type {React.Context<{state: GlobalState, setState: React.Dispatch<React.SetStateAction<GlobalState>>} | null>}
 */
const GlobalStateContext = createContext(null);

/**
 * Provider component that serves as the single source of truth for the agricultural simulation system.
 */
export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState(initialGlobalState);

  // Focus entirely on the initialization of this data shape.
  // No extra functionality or behavioral logic included yet.
  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

/**
 * Hook to access the simulation system's global state.
 */
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
