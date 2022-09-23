import React from 'react';

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number;
}

export const Pill: React.FC<PillProps> = ({ value, ...props }) => {
  return (
    <span
      className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-xs font-medium text-muted bg-tertiary rounded-full"
      {...props}
    >
      {value}
    </span>
  );
};
