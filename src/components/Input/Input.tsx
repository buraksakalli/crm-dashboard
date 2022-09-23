import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  // @ts-ignore
  const error = props.pattern && props.value && !new RegExp(props.pattern).test(props?.value ?? '');
  return (
    <div className="mb-2">
      <label className={`flex text-sm font-medium mb-1 ${!error ? 'text-muted' : 'text-red-500'}`} htmlFor="email">
        {props.label} {error && <span className="ml-1 text-red-500">is not valid</span>}
      </label>
      <input className="border rounded-md p-2 w-full" {...props} />
    </div>
  );
};
