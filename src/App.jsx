import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-gray-100 flex justify-center font-sans">
      {/* Container simulating a mobile/sidebar viewport centered on desktop */}
      <div className="w-full max-w-[420px] bg-zinc-900 min-h-screen shadow-2xl relative flex flex-col overflow-x-hidden">
        <Dashboard />
      </div>
    </div>
  )
}

export default App
