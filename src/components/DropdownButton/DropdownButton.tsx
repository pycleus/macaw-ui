import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { sprinkles } from "~/theme";
import { classNames } from "~/utils";
import { Box } from "../Box";
import { ArrowDownIcon } from "../Icons";
import { dropdownButton, DropdownButtonVariants } from "./DropdownButton.css";

export type DropdownButtonProps = DropdownButtonVariants &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> & {
    children?: ReactNode;
    disabled?: boolean;
    className?: string;
  };

export const DropdownButton = forwardRef<
  HTMLButtonElement,
  DropdownButtonProps
>(({ children, size, disabled, className, ...props }, ref) => {
  return (
    <Box
      as="button"
      className={classNames(
        dropdownButton({
          size,
        }),
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
      <ArrowDownIcon
        size="small"
        className={sprinkles({
          color: "textNeutralSubdued",
        })}
      />
    </Box>
  );
});

DropdownButton.displayName = "DropdownButton";