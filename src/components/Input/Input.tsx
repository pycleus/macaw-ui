import { forwardRef, InputHTMLAttributes } from "react";
import { classNames } from "~/utils";
import { InputWrapper, useStateEvents } from "./InputWrapper";
import { Box } from "../Box";
import { input as inputStyle, InputVariants } from "./Input.css";

export type InputProps = InputVariants &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "color" | "width" | "height" | "size"
  > & { label?: string };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      children,
      size,
      disabled = false,
      className,
      value,
      label,
      id,
      type,
      onChange,
      ...props
    },
    ref
  ) => {
    const {
      handlers,
      value: inputValue,
      active,
      typed,
    } = useStateEvents(value, onChange);

    return (
      <InputWrapper
        id={id}
        typed={typed}
        active={active}
        disabled={disabled}
        size={size}
        label={label}
        className={className}
      >
        <Box
          id={id}
          as="input"
          type={type}
          className={classNames(inputStyle({ size }))}
          disabled={disabled}
          value={inputValue}
          ref={ref}
          {...handlers}
          {...props}
        />
        {children}
      </InputWrapper>
    );
  }
);

Input.displayName = "Input";
