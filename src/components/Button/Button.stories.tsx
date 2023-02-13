import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ReactNode } from "react";
import { Button, ButtonProps } from "./Button";
import { Box } from "../Box";
import { RemoveIcon, SearchIcon } from "../Icons";

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonSetWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      placeItems="center"
      gap={5}
      marginX={7}
    >
      {children}
    </Box>
  );
};

const TextButtonVariants = (props: Omit<ButtonProps, "children">) => (
  <>
    <ButtonSetWrapper>
      <Button variant="primary" size="large" {...props}>
        Button
      </Button>
      <Button variant="primary" size="medium" {...props}>
        Button
      </Button>
      <Button variant="primary" size="small" {...props}>
        Button
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button variant="secondary" size="large" {...props}>
        Button
      </Button>
      <Button variant="secondary" size="medium" {...props}>
        Button
      </Button>
      <Button variant="secondary" size="small" {...props}>
        Button
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button variant="tertiary" size="large" {...props}>
        Button
      </Button>
      <Button variant="tertiary" size="medium" {...props}>
        Button
      </Button>
      <Button variant="tertiary" size="small" {...props}>
        Button
      </Button>
    </ButtonSetWrapper>
  </>
);

const IconButtonVariants = () => (
  <>
    <ButtonSetWrapper>
      <Button
        onClick={() => undefined}
        icon={<RemoveIcon />}
        variant="primary"
        size="large"
      />
      <Button icon={<RemoveIcon />} variant="primary" size="medium" />
      <Button icon={<RemoveIcon />} variant="primary" size="small" />
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button
        type="button"
        icon={<RemoveIcon />}
        variant="secondary"
        size="large"
      />
      <Button icon={<RemoveIcon />} variant="secondary" size="medium" />
      <Button icon={<RemoveIcon />} variant="secondary" size="small" />
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button
        name="remove"
        icon={<RemoveIcon />}
        variant="tertiary"
        size="large"
      />
      <Button icon={<RemoveIcon />} variant="tertiary" size="medium" />
      <Button icon={<RemoveIcon />} variant="tertiary" size="small" />
    </ButtonSetWrapper>
  </>
);

const TextIconButtonVariants = (props: Omit<ButtonProps, "children">) => (
  <>
    <ButtonSetWrapper>
      <Button variant="primary" size="large" {...props}>
        <SearchIcon />
        Button
      </Button>
      <Button variant="primary" size="medium" {...props}>
        <SearchIcon size="small" />
        Button
      </Button>
      <Button variant="primary" size="small" {...props}>
        <SearchIcon size="small" />
        Button
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button variant="secondary" size="large" {...props}>
        <SearchIcon />
        Button
      </Button>
      <Button variant="secondary" size="medium" {...props}>
        <SearchIcon size="small" />
        Button
      </Button>
      <Button variant="secondary" size="small" {...props}>
        <SearchIcon size="small" />
        Button
      </Button>
    </ButtonSetWrapper>
    <ButtonSetWrapper>
      <Button variant="tertiary" size="large" {...props}>
        <SearchIcon />
        Button
      </Button>
      <Button variant="tertiary" size="medium" {...props}>
        <SearchIcon size="small" />
        Button
      </Button>
      <Button variant="tertiary" size="small" {...props}>
        <SearchIcon size="small" />
        Button
      </Button>
    </ButtonSetWrapper>
  </>
);

export const Default: ComponentStory<typeof Button> = () => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Box display="flex" flexDirection="row" marginBottom={11} paddingTop={11}>
      <TextButtonVariants />
      <IconButtonVariants />
    </Box>
    <Box display="flex" flexDirection="row">
      <TextButtonVariants disabled />
      <TextIconButtonVariants />
    </Box>
  </Box>
);