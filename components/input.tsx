import * as React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`rounded-md p-1 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
)

Input.displayName = "Input"

export { Input }
