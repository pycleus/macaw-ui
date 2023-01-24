import { ReactNode } from "react";
import { Sprinkles } from "~/theme";

import { Box } from "../Box";

type ListDividerProps = Pick<Sprinkles, "paddingX" | "paddingY"> & {
  children?: ReactNode;
};

export const Divider = ({ children, ...rest }: ListDividerProps) => {
  return (
    <Box as="li" {...rest}>
      {children}
    </Box>
  );
};