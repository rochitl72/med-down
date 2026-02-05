interface PatientQueueProps {
  onOpenPatient: (patientId: string) => void;
}

export function PatientQueue({ onOpenPatient }: PatientQueueProps) {
  const queueData = [
    {
      id: '1',
      token: 'T-042',
      mrn: '100234',
      name: 'Rajesh Kumar',
      age: '65',
      sex: 'M',
      waitTime: '12 min',
      status: 'ready',
      statusLabel: 'Ready for Examination'
    },
    {
      id: '2',
      token: 'T-043',
      mrn: '100567',
      name: 'Lakshmi Devi',
      age: '58',
      sex: 'F',
      waitTime: '8 min',
      status: 'dilating',
      statusLabel: 'Dilating'
    },
    {
      id: '3',
      token: 'T-044',
      mrn: '101245',
      name: 'Sundar Rajan',
      age: '42',
      sex: 'M',
      waitTime: '25 min',
      status: 'ready',
      statusLabel: 'Ready for Examination'
    },
    {
      id: '4',
      token: 'T-045',
      mrn: '102389',
      name: 'Meena Krishnan',
      age: '71',
      sex: 'F',
      waitTime: '5 min',
      status: 'dilating',
      statusLabel: 'Dilating'
    },
    {
      id: '5',
      token: 'T-046',
      mrn: '103456',
      name: 'Arjun Patel',
      age: '55',
      sex: 'M',
      waitTime: '18 min',
      status: 'ready',
      statusLabel: 'Ready for Examination'
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 style={{ color: '#212529', fontSize: '24px' }}>Outpatient Department - Retina Queue</h1>
        <p style={{ color: '#6C757D', fontSize: '14px', marginTop: '4px' }}>
          {queueData.length} patients waiting
        </p>
      </div>

      <div className="rounded-lg overflow-hidden" style={{ 
        background: '#FFFFFF',
        boxShadow: '0px 2px 4px rgba(0,0,0,0.05)'
      }}>
        <table className="w-full">
          <thead>
            <tr style={{ background: '#F4F7FA', borderBottom: '1px solid #E9ECEF' }}>
              <th className="px-6 py-3 text-left" style={{ color: '#6C757D', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Token No
              </th>
              <th className="px-6 py-3 text-left" style={{ color: '#6C757D', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                MRN
              </th>
              <th className="px-6 py-3 text-left" style={{ color: '#6C757D', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Patient Name
              </th>
              <th className="px-6 py-3 text-left" style={{ color: '#6C757D', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Age/Sex
              </th>
              <th className="px-6 py-3 text-left" style={{ color: '#6C757D', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Wait Time
              </th>
              <th className="px-6 py-3 text-left" style={{ color: '#6C757D', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Status
              </th>
              <th className="px-6 py-3 text-left" style={{ color: '#6C757D', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {queueData.map((patient) => (
              <tr 
                key={patient.id}
                className="transition-colors hover:bg-gray-50"
                style={{ borderBottom: '1px solid #F4F7FA' }}
              >
                <td className="px-6 py-4" style={{ color: '#212529', fontSize: '14px' }}>
                  {patient.token}
                </td>
                <td className="px-6 py-4" style={{ color: '#212529', fontSize: '14px' }}>
                  {patient.mrn}
                </td>
                <td className="px-6 py-4" style={{ color: '#212529', fontSize: '14px' }}>
                  {patient.name}
                </td>
                <td className="px-6 py-4" style={{ color: '#212529', fontSize: '14px' }}>
                  {patient.age}/{patient.sex}
                </td>
                <td className="px-6 py-4" style={{ color: '#6C757D', fontSize: '14px' }}>
                  {patient.waitTime}
                </td>
                <td className="px-6 py-4">
                  <span 
                    className="inline-block px-3 py-1 rounded-full" 
                    style={{
                      background: patient.status === 'ready' ? 'rgba(40, 167, 69, 0.1)' : 'rgba(255, 193, 7, 0.1)',
                      color: patient.status === 'ready' ? '#28A745' : '#FFC107',
                      fontSize: '13px'
                    }}
                  >
                    {patient.statusLabel}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => onOpenPatient(patient.id)}
                    className="px-4 py-2 rounded-md transition-colors"
                    style={{
                      border: '1px solid #0056B3',
                      color: '#0056B3',
                      background: 'transparent',
                      fontSize: '14px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 86, 179, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    Open File
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
