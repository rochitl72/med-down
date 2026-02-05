import { AlertTriangle, Lightbulb, TrendingUp, X } from 'lucide-react';

interface AgentCardProps {
  type: 'alert' | 'suggestion' | 'insight';
  title: string;
  body: string;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
}

export function AgentCard({ type, title, body, actionLabel, onAction, onDismiss }: AgentCardProps) {
  const config = {
    alert: {
      borderColor: '#DC3545',
      iconBg: 'rgba(220, 53, 69, 0.1)',
      iconColor: '#DC3545',
      icon: AlertTriangle
    },
    suggestion: {
      borderColor: '#FFC107',
      iconBg: 'rgba(255, 193, 7, 0.1)',
      iconColor: '#FFC107',
      icon: Lightbulb
    },
    insight: {
      borderColor: '#28A745',
      iconBg: 'rgba(40, 167, 69, 0.1)',
      iconColor: '#28A745',
      icon: TrendingUp
    }
  };

  const { borderColor, iconBg, iconColor, icon: Icon } = config[type];

  return (
    <div
      className="rounded-lg p-4 mb-3 relative animate-in slide-in-from-right duration-300"
      style={{
        background: '#FFFFFF',
        borderLeft: `4px solid ${borderColor}`,
        boxShadow: '0px 2px 6px rgba(0,0,0,0.08)'
      }}
    >
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="absolute top-2 right-2 p-1 rounded hover:bg-gray-100 transition-colors"
          style={{ color: '#6C757D' }}
        >
          <X size={14} />
        </button>
      )}

      <div className="flex gap-3">
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: iconBg }}
        >
          <Icon size={16} style={{ color: iconColor }} />
        </div>

        <div className="flex-1 pr-4">
          <h4 className="mb-2" style={{ color: '#212529', fontSize: '14px' }}>
            {title}
          </h4>
          <p className="mb-3" style={{ color: '#6C757D', fontSize: '13px', lineHeight: '1.5' }}>
            {body}
          </p>

          {actionLabel && onAction && (
            <button
              onClick={onAction}
              className="px-3 py-1.5 rounded-md transition-colors"
              style={{
                border: `1px solid ${borderColor}`,
                color: borderColor,
                background: 'transparent',
                fontSize: '13px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = iconBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {actionLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
