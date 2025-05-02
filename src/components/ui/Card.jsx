// src/components/ui/card.jsx
export function Card({ children, className, ...props }) {
    return (
      <div className={`rounded-xl border p-4 shadow ${className}`} {...props}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className, ...props }) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }
  