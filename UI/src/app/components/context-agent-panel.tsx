import { useState } from 'react';
import { AgentCard } from './agent-card';
import { Activity } from 'lucide-react';

interface ContextAgentPanelProps {
  isPatientFileOpen: boolean;
}

export function ContextAgentPanel({ isPatientFileOpen }: ContextAgentPanelProps) {
  const [alerts, setAlerts] = useState([
    {
      id: '1',
      type: 'alert' as const,
      title: 'Contraindication Detected',
      body: 'Timolol is not recommended. Patient history indicates Asthma. Risk of bronchospasm.',
      actionLabel: 'Substitute with Betaxolol'
    },
    {
      id: '2',
      type: 'suggestion' as const,
      title: 'Protocol Suggestion',
      body: 'Suspected Glaucoma profile detected. Standard of Care recommends adding OCT - RNFL Analysis.',
      actionLabel: '+ Add Order'
    },
    {
      id: '3',
      type: 'insight' as const,
      title: 'Positive Trend',
      body: 'Visual Acuity in Left Eye has improved (6/18 → 6/9) since last injection.',
      actionLabel: undefined
    }
  ]);

  const handleDismiss = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const handleAction = (id: string) => {
    console.log('Action triggered for alert:', id);
    // In a real app, this would trigger the actual action
  };

  return (
    <aside
      className="h-full border-l flex flex-col"
      style={{
        width: '350px',
        background: '#F8F9FA',
        borderColor: '#E9ECEF'
      }}
    >
      <div className="p-4 border-b" style={{ borderColor: '#E9ECEF' }}>
        <div className="flex items-center gap-2 mb-1">
          <Activity size={16} style={{ color: '#0056B3' }} />
          <h3 style={{ color: '#6C757D', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Clinical Context Assistant
          </h3>
        </div>
        <p style={{ color: '#6C757D', fontSize: '12px' }}>
          AI-powered clinical decision support
        </p>
      </div>

      <div className="flex-1 overflow-auto p-4">
        {!isPatientFileOpen ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="mb-4 opacity-30">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="24" stroke="#6C757D" strokeWidth="2" strokeDasharray="4 4"/>
                <path d="M32 24V32L36 36" stroke="#6C757D" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <p style={{ color: '#6C757D', fontSize: '14px' }}>
              Monitoring clinical context...
            </p>
            <p style={{ color: '#ADB5BD', fontSize: '12px', marginTop: '8px' }}>
              Open a patient file to receive AI-powered insights
            </p>
          </div>
        ) : (
          <div>
            {alerts.length === 0 ? (
              <div className="text-center py-8">
                <p style={{ color: '#6C757D', fontSize: '14px' }}>
                  No active alerts
                </p>
                <p style={{ color: '#ADB5BD', fontSize: '12px', marginTop: '4px' }}>
                  The AI is monitoring for clinical insights
                </p>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <p style={{ color: '#6C757D', fontSize: '12px' }}>
                    {alerts.length} {alerts.length === 1 ? 'alert' : 'alerts'} detected
                  </p>
                </div>
                {alerts.map((alert) => (
                  <AgentCard
                    key={alert.id}
                    type={alert.type}
                    title={alert.title}
                    body={alert.body}
                    actionLabel={alert.actionLabel}
                    onAction={alert.actionLabel ? () => handleAction(alert.id) : undefined}
                    onDismiss={() => handleDismiss(alert.id)}
                  />
                ))}
              </>
            )}
          </div>
        )}
      </div>

      {/* Footer with status */}
      <div className="p-3 border-t" style={{ borderColor: '#E9ECEF', background: '#FFFFFF' }}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#28A745' }}></div>
          <span style={{ color: '#6C757D', fontSize: '12px' }}>
            AI Agent Active
          </span>
        </div>
      </div>
    </aside>
  );
}
