import { Search, User } from 'lucide-react';

export function GlobalHeader() {
  return (
    <header className="h-[60px] flex items-center justify-between px-6" style={{ background: '#0056B3' }}>
      {/* Left Side - Logo and Search */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2C10 2 6 6 6 10C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10C14 6 10 2 10 2Z" fill="white" opacity="0.9"/>
              <path d="M4 10C4 10 3 13 5 15C6.66 16.66 9 16 10 15.5C11 16 13.34 16.66 15 15C17 13 16 10 16 10" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7"/>
            </svg>
          </div>
          <div className="text-white">
            <div className="font-semibold" style={{ fontSize: '16px', lineHeight: '20px' }}>Aravind Eye Care System</div>
          </div>
        </div>
        
        <div className="relative" style={{ width: '400px' }}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={18} />
          <input
            type="text"
            placeholder="Search Patient by MRN, Name, or Phone..."
            className="w-full h-10 pl-10 pr-4 rounded-full border-none outline-none"
            style={{ 
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontSize: '14px'
            }}
          />
        </div>
      </div>

      {/* Right Side - Location and Profile */}
      <div className="flex items-center gap-6">
        <div className="text-white/90" style={{ fontSize: '14px' }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: '#28A745' }}></div>
            Madurai - Retina Clinic
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
            <User size={20} className="text-white" />
          </div>
          <div className="text-white" style={{ fontSize: '14px' }}>
            <div>Dr. Priya Sharma</div>
          </div>
        </div>
      </div>
    </header>
  );
}
