import { LayoutGrid, Users, Calendar, FileText, Settings } from 'lucide-react';

interface LeftSidebarProps {
  activeView: string;
  onNavigate: (view: string) => void;
}

export function LeftSidebar({ activeView, onNavigate }: LeftSidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'queue', label: 'My Queue', icon: Users },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside 
      className="h-full border-r flex flex-col"
      style={{ 
        width: '250px',
        background: '#FFFFFF',
        borderColor: '#E9ECEF'
      }}
    >
      <nav className="flex-1 py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="w-full flex items-center gap-3 px-6 py-3 transition-colors"
              style={{
                background: isActive ? 'rgba(0, 86, 179, 0.08)' : 'transparent',
                color: isActive ? '#0056B3' : '#212529',
                borderLeft: isActive ? '3px solid #0056B3' : '3px solid transparent'
              }}
            >
              <Icon size={20} />
              <span style={{ fontSize: '15px' }}>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
