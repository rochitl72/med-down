import { useState } from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';

interface PatientFileProps {
  patientId: string;
  onClose: () => void;
}

export function PatientFile({ patientId, onClose }: PatientFileProps) {
  const [activeTab, setActiveTab] = useState('prescription');

  // Mock patient data - in production this would come from props or API
  const patient = {
    name: 'Rajesh Kumar',
    age: 65,
    sex: 'M',
    mrn: '100234',
    lastVisit: '12 Jan 2026',
    conditions: ['Diabetic', 'Hypertension'],
    allergies: ['Sulfa']
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'visual-acuity', label: 'Visual Acuity' },
    { id: 'examination', label: 'Examination' },
    { id: 'prescription', label: 'Prescription' },
    { id: 'investigation', label: 'Investigation' },
  ];

  const [prescriptions, setPrescriptions] = useState([
    {
      id: '1',
      drug: 'Timolol 0.5% Eye Drops',
      dosage: '1 Drop',
      frequency: '2 times/day',
      eye: 'Both Eyes',
      duration: '30 days'
    }
  ]);

  const [drugSearch, setDrugSearch] = useState('');
  const [notes, setNotes] = useState('Patient reports improved vision. Continue current treatment protocol.');

  const availableDrugs = [
    'Timolol 0.5% Eye Drops',
    'Betaxolol 0.5% Eye Drops',
    'Latanoprost 0.005% Eye Drops',
    'Brimonidine 0.2% Eye Drops',
    'Prednisolone Acetate 1% Eye Drops'
  ];

  return (
    <div className="p-6 h-full overflow-auto">
      {/* Back Button */}
      <button
        onClick={onClose}
        className="flex items-center gap-2 mb-4 transition-colors"
        style={{ color: '#0056B3', fontSize: '14px' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#003d82';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#0056B3';
        }}
      >
        <ArrowLeft size={18} />
        Back to Queue
      </button>

      {/* Patient Header Card */}
      <div 
        className="rounded-lg p-6 mb-6"
        style={{
          background: '#FFFFFF',
          boxShadow: '0px 2px 4px rgba(0,0,0,0.05)'
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 style={{ color: '#212529', fontSize: '24px', marginBottom: '8px' }}>
              {patient.name} ({patient.age}/{patient.sex})
            </h2>
            <div className="flex items-center gap-4" style={{ color: '#6C757D', fontSize: '14px' }}>
              <span>MRN: {patient.mrn}</span>
              <span>•</span>
              <span>Last Visit: {patient.lastVisit}</span>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-2">
          {patient.conditions.map((condition) => (
            <span
              key={condition}
              className="inline-block px-3 py-1 rounded-full"
              style={{
                background: '#E9ECEF',
                color: '#495057',
                fontSize: '13px'
              }}
            >
              {condition}
            </span>
          ))}
          {patient.allergies.map((allergy) => (
            <span
              key={allergy}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full"
              style={{
                background: 'rgba(220, 53, 69, 0.1)',
                color: '#DC3545',
                fontSize: '13px'
              }}
            >
              <AlertCircle size={14} />
              Allergy: {allergy}
            </span>
          ))}
        </div>
      </div>

      {/* Tab Navigation */}
      <div 
        className="rounded-lg mb-6"
        style={{
          background: '#FFFFFF',
          boxShadow: '0px 2px 4px rgba(0,0,0,0.05)'
        }}
      >
        <div className="flex border-b" style={{ borderColor: '#E9ECEF' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-6 py-4 transition-colors"
              style={{
                color: activeTab === tab.id ? '#0056B3' : '#6C757D',
                borderBottom: activeTab === tab.id ? '2px solid #0056B3' : '2px solid transparent',
                fontSize: '14px',
                fontWeight: activeTab === tab.id ? '600' : '400'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content - Prescription Tab */}
        {activeTab === 'prescription' && (
          <div className="p-6">
            {/* Drug Search */}
            <div className="mb-6">
              <label className="block mb-2" style={{ color: '#6C757D', fontSize: '13px' }}>
                Search Drug
              </label>
              <input
                type="text"
                value={drugSearch}
                onChange={(e) => setDrugSearch(e.target.value)}
                placeholder="Type to search medications..."
                className="w-full px-4 py-2 border rounded-md"
                style={{
                  borderColor: '#E9ECEF',
                  fontSize: '14px'
                }}
                list="drug-list"
              />
              <datalist id="drug-list">
                {availableDrugs.map((drug) => (
                  <option key={drug} value={drug} />
                ))}
              </datalist>
            </div>

            {/* Current Prescriptions Table */}
            <div className="mb-6">
              <h3 className="mb-3" style={{ color: '#212529', fontSize: '16px' }}>Current Prescriptions</h3>
              <div className="border rounded-md overflow-hidden" style={{ borderColor: '#E9ECEF' }}>
                <table className="w-full">
                  <thead>
                    <tr style={{ background: '#F4F7FA' }}>
                      <th className="px-4 py-3 text-left" style={{ color: '#6C757D', fontSize: '13px' }}>Drug</th>
                      <th className="px-4 py-3 text-left" style={{ color: '#6C757D', fontSize: '13px' }}>Dosage</th>
                      <th className="px-4 py-3 text-left" style={{ color: '#6C757D', fontSize: '13px' }}>Frequency</th>
                      <th className="px-4 py-3 text-left" style={{ color: '#6C757D', fontSize: '13px' }}>Eye</th>
                      <th className="px-4 py-3 text-left" style={{ color: '#6C757D', fontSize: '13px' }}>Duration</th>
                      <th className="px-4 py-3 text-left" style={{ color: '#6C757D', fontSize: '13px' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prescriptions.map((rx) => (
                      <tr key={rx.id} style={{ borderTop: '1px solid #F4F7FA' }}>
                        <td className="px-4 py-3" style={{ color: '#212529', fontSize: '14px' }}>{rx.drug}</td>
                        <td className="px-4 py-3" style={{ color: '#212529', fontSize: '14px' }}>{rx.dosage}</td>
                        <td className="px-4 py-3" style={{ color: '#212529', fontSize: '14px' }}>{rx.frequency}</td>
                        <td className="px-4 py-3" style={{ color: '#212529', fontSize: '14px' }}>{rx.eye}</td>
                        <td className="px-4 py-3" style={{ color: '#212529', fontSize: '14px' }}>{rx.duration}</td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => setPrescriptions(prescriptions.filter(p => p.id !== rx.id))}
                            style={{ color: '#DC3545', fontSize: '13px' }}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Doctor Notes */}
            <div>
              <label className="block mb-2" style={{ color: '#6C757D', fontSize: '13px' }}>
                Doctor Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border rounded-md resize-none"
                style={{
                  borderColor: '#E9ECEF',
                  fontSize: '14px'
                }}
                placeholder="Enter clinical notes..."
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                className="px-6 py-2 rounded-md transition-colors"
                style={{
                  background: '#0056B3',
                  color: '#FFFFFF',
                  fontSize: '14px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#003d82';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#0056B3';
                }}
              >
                Save & Continue
              </button>
              <button
                className="px-6 py-2 rounded-md transition-colors"
                style={{
                  border: '1px solid #E9ECEF',
                  background: '#FFFFFF',
                  color: '#6C757D',
                  fontSize: '14px'
                }}
              >
                Save as Draft
              </button>
            </div>
          </div>
        )}

        {/* Other tabs - placeholder content */}
        {activeTab !== 'prescription' && (
          <div className="p-6">
            <p style={{ color: '#6C757D', fontSize: '14px' }}>
              {tabs.find(t => t.id === activeTab)?.label} content will be displayed here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
