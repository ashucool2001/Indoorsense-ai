import { IndoorScene } from '@/engine/scene/IndoorScene'
import './Dashboard.css'

const systemMetrics = [
  { label: 'Tracking State', value: 'Simulation Live' },
  { label: 'Active Floor', value: 'HQ / Level 03' },
  { label: 'Engine Latency', value: '18 ms' },
]

const telemetry = [
  { label: 'Scene Engine', value: 'R3F Ready', code: 'SE' },
  { label: 'Office Model', value: 'Sprint 2 Floor', code: 'OM' },
  { label: 'Position Feed', value: 'Standing By', code: 'PF' },
  { label: 'Access Control', value: 'Secure View', code: 'AC' },
]

export function Dashboard() {
  return (
    <main className="app-shell">
      <section className="command-panel" aria-label="IndoorSense AI operations summary">
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true">
            IS
          </div>
          <div>
            <p className="eyebrow">IndoorSense AI</p>
            <h1>3D Positioning Operations Center</h1>
          </div>
        </div>

        <div className="metric-stack" aria-label="System metrics">
          {systemMetrics.map((metric) => (
            <div className="metric-row" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="scene-shell" aria-label="3D office digital twin viewport">
        <IndoorScene />
      </section>

      <aside className="telemetry-panel" aria-label="Digital twin telemetry">
        <div>
          <p className="eyebrow">Sprint 2</p>
          <h2>Engine Foundation</h2>
        </div>

        <div className="telemetry-list">
          {telemetry.map((item) => (
            <div className="telemetry-item" key={item.label}>
              <span className="telemetry-code" aria-hidden="true">
                {item.code}
              </span>
              <div>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </main>
  )
}
