import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder26: "rounded-radius26",
  icbCircleBorder18: "rounded-radius18",
};
const variants = {
  FillAmberA400: "bg-amber_A400 text-black_900",
  OutlineWhiteA700: "border border-solid border-white_A700 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-black_900",
  OutlineBlack900: "border border-black_900 border-solid text-black_900",
  OutlineAmberA400: "border border-amber_A400 border-solid text-amber_A400",
  icbFillWhiteA700: "bg-white_A700",
  icbFillBlack90063: "bg-black_900_63",
  icbFillAmberA400: "bg-amber_A400",
};
const sizes = {
  sm: "sm:p-[3px] md:p-[4px] p-[8px]",
  md: "p-[11px] sm:p-[4px] md:p-[5px]",
  lg: "p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px]",
  xl: "md:p-[12px] p-[25px] sm:px-[15px] sm:py-[9px]",
  smIcn: "p-[11px] sm:p-[4px] md:p-[5px]",
  mdIcn: "p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["icbCircleBorder26", "icbCircleBorder18"]),
  variant: PropTypes.oneOf([
    "FillAmberA400",
    "OutlineWhiteA700",
    "FillWhiteA700",
    "OutlineBlack900",
    "OutlineAmberA400",
    "icbFillWhiteA700",
    "icbFillBlack90063",
    "icbFillAmberA400",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillAmberA400",
  size: "lg",
};

export { Button };
