import { clsx } from "clsx";
import React from "react";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  wrapperClassName?: string;
  icon?: React.ReactNode;
}

export const Input = ({
  icon,
  className,
  wrapperClassName,
  ...props
}: InputProps) => {
  return (
    <div
      className={clsx(
        wrapperClassName,
        "border-border-primary flex items-center gap-x-[8px] rounded-[6px] border border-solid bg-white px-[8px] py-[6px] text-[14px] text-gray-900",
      )}>
      {Boolean(icon) && icon}
      <input
        {...props}
        className={clsx(
          "w-full outline-0 placeholder:text-[#9AA6AC]",
          className,
        )}
      />
    </div>
  );
};
