import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Stack from "@mui/material/Stack";
import { useButton } from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

const green = {
  500: "#1dbf73",
  600: "#19a463",
};

const CustomButtonRoot = styled("button")`
  justify-content: center;
  border-radius: 4px;
  font-weight: 600;
  line-height: 100%;
  font-size: 16px;
  background-color: ${green[500]};
  padding: 12px 24px;
  border: 1px solid transparent;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;

  &:hover {
    background-color: ${green[600]};
    text-decoration: none;
  }

  &.active {
    background-color: ${green[600]};
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
  const { children } = props;
  const { active, disabled, focusVisible, getRootProps } = useButton({
    ...props,
    ref,
    component: CustomButtonRoot,
  });

  const classes = {
    active,
    disabled,
    focusVisible,
  };

  return (
    <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
      {children}
    </CustomButtonRoot>
  );
});

CustomButton.propTypes = {
  children: PropTypes.node,
};

export default function ButtonStyle({ children, ...props }) {
  return (
    <Stack {...props} direction="row" spacing={2}>
      <CustomButton>{children}</CustomButton>
    </Stack>
  );
}
