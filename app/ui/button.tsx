import React from "react";

import { cva, VariantProps } from "class-variance-authority";

const button = cva(
  "py-[4px] px-[8px] flex gap-x-[4px] justify-center items-center rounded-[6px] text-[14px] leading-[24px] font-normal",
  {
    variants: {
      appearance: {
        primary: "",
        secondary: "",
      },
      color: {
        primary: "",
        red: "",
      },
    },
    compoundVariants: [
      {
        appearance: "primary",
        color: "primary",
        className: "bg-primary-600 text-white",
      },
      {
        appearance: "secondary",
        color: "primary",
        className: "border border-primary-600 text-primary-600",
      },
      {
        appearance: "secondary",
        color: "red",
        className: "border text-red-500 border-border-primary",
      },
    ],
  },
);

interface ButtonProps
  extends VariantProps<typeof button>,
    Omit<
      React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      "color"
    > {}

export const Button = ({
  className,
  appearance,
  color,
  ...props
}: ButtonProps) => {
  return (
    <button className={button({ appearance, color, className })} {...props} />
  );
};
