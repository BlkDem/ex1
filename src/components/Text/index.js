import React from "react";
const variantClasses = {
  h1: "font-normal text-[8.26px]",
  h2: "font-black md:text-[48px] sm:text-[48px] text-[73.47px]",
  h3: "font-normal md:text-[48px] sm:text-[48px] text-[70px]",
  h4: "font-bold md:text-[48px] sm:text-[48px] text-[60px]",
  h5: "font-black text-[483.32px] md:text-[48px] sm:text-[48px]",
  h6: "font-normal sm:text-[35px] md:text-[41px] text-[45px]",
  body1: "sm:text-[15px] md:text-[20px] text-[40px]",
  body2: "font-normal sm:text-[33px] md:text-[35px] text-[37px]",
  body3: "font-normal sm:text-[31px] md:text-[33px] text-[35px]",
  body4: "font-normal sm:text-[26px] md:text-[28px] text-[30px]",
  body5: "font-normal sm:text-[24px] md:text-[26px] text-[28px]",
  body6: "font-normal sm:text-[21px] md:text-[23px] text-[25px]",
  body7: "sm:text-[20px] md:text-[22px] text-[24px]",
  body8: "font-normal sm:text-[18px] md:text-[20px] text-[22px]",
  body9: "text-[20px]",
  body10: "font-normal text-[19px]",
  body11: "text-[18px]",
  body12: "font-bold text-[17.06px]",
  body13: "text-[17px]",
  body14: "text-[16px]",
  body15: "font-normal text-[15px]",
  body16: "text-[14px]",
  body17: "font-normal text-[120px] md:text-[48px] sm:text-[48px]",
  body18: "font-normal text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
