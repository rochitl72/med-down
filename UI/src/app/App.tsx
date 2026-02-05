import { useState } from 'react';
import { GlobalHeader } from './components/global-header';
import { LeftSidebar } from './components/left-sidebar';
import { PatientQueue } from './components/patient-queue';
import { PatientFile } from './components/patient-file';
import { ContextAgentPanel } from './components/context-agent-panel';

export default function App() {
  const [activeView, setActiveView] = useState('queue');
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);

  const handleOpenPatient = (patientId: string) => {
    setSelectedPatientId(patientId);
  };

  const handleClosePatient = () => {
    setSelectedPatientId(null);
  };

  return (
    <div className="w-full h-screen flex flex-col" style={{ background: '#F4F7FA' }}>
      {/* Global Header */}
      <GlobalHeader />

      {/* Main Layout - 3 Column */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Navigation */}
        <LeftSidebar activeView={activeView} onNavigate={setActiveView} />

        {/* Center Stage - Main Workspace */}
        <main className="flex-1 overflow-auto">
          {selectedPatientId ? (
            <PatientFile 
              patientId={selectedPatientId} 
              onClose={handleClosePatient}
            />
          ) : (
            <>
              {activeView === 'queue' && (
                <PatientQueue onOpenPatient={handleOpenPatient} />
              )}
              {activeView === 'dashboard' && (
                <div className="p-6">
                  <h1 style={{ color: '#212529', fontSize: '24px', marginBottom: '16px' }}>Dashboard</h1>
                  <div className="grid grid-cols-3 gap-4">
                    {/* Dashboard Stats Cards */}
                    <div 
                      className="rounded-lg p-6"
                      style={{
                        background: '#FFFFFF',
                        boxShadow: '0px 2px 4px rgba(0,0,0,0.05)'
                      }}
                    >
                      <p style={{ color: '#6C757D', fontSize: '13px', marginBottom: '8px' }}>Today's Patients</p>
                      <p style={{ color: '#212529', fontSize: '32px' }}>24</p>
                    </div>
                    <div 
                      className="rounded-lg p-6"
                      style={{
                        background: '#FFFFFF',
                        boxShadow: '0px 2px 4px rgba(0,0,0,0.05)'
                      }}
                    >
                      <p style={{ color: '#6C757D', fontSize: '13px', marginBottom: '8px' }}>In Queue</p>
                      <p style={{ color: '#212529', fontSize: '32px' }}>5</p>
                    </div>
                    <div 
                      className="rounded-lg p-6"
                      style={{
                        background: '#FFFFFF',
                        boxShadow: '0px 2px 4px rgba(0,0,0,0.05)'
                      }}
                    >
                      <p style={{ color: '#6C757D', fontSize: '13px', marginBottom: '8px' }}>Avg Wait Time</p>
                      <p style={{ color: '#212529', fontSize: '32px' }}>14m</p>
                    </div>
                  </div>
                </div>
              )}
              {activeView === 'appointments' && (
                <div className="p-6">
                  <h1 style={{ color: '#212529', fontSize: '24px' }}>Appointments</h1>
                  <p style={{ color: '#6C757D', fontSize: '14px', marginTop: '8px' }}>
                    Appointment scheduling interface will be displayed here.
                  </p>
                </div>
              )}
              {activeView === 'reports' && (
                <div className="p-6">
                  <h1 style={{ color: '#212529', fontSize: '24px' }}>Reports</h1>
                  <p style={{ color: '#6C757D', fontSize: '14px', marginTop: '8px' }}>
                    Clinical reports and analytics will be displayed here.
                  </p>
                </div>
              )}
              {activeView === 'settings' && (
                <div className="p-6">
                  <h1 style={{ color: '#212529', fontSize: '24px' }}>Settings</h1>
                  <p style={{ color: '#6C757D', fontSize: '14px', marginTop: '8px' }}>
                    System settings and preferences will be displayed here.
                  </p>
                </div>
              )}
            </>
          )}
        </main>

        {/* Right Panel - Context Agent */}
        <ContextAgentPanel isPatientFileOpen={selectedPatientId !== null} />
      </div>
    </div>
  );
}
