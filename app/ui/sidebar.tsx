import Image from "next/image";
import React from "react";
import { clsx } from "clsx";

export const Sidebar = () => {
  return (
    <aside className="border-border-primary sticky top-0 flex h-screen w-[56px] flex-col border border-solid">
      <div className="flex h-[56px] items-center justify-center">
        <Image src="/logo.svg" alt="logo" height={32} width={32} />
      </div>
      <div className="border-t-border-primary flex flex-1 flex-col justify-between border-t border-solid py-[12px]">
        <FeaturedIcon className="bg-primary-600 mx-auto">
          <Image
            src="/icons/analytics.svg"
            alt="analytics"
            height={20}
            width={20}
          />
        </FeaturedIcon>

        <div>
          <FeaturedIcon className="mx-auto mb-[10px]">
            <Image
              src="/icons/settings.svg"
              alt="settings"
              height={20}
              width={20}
            />
          </FeaturedIcon>

          <div className="border-t-border-primary border-t border-solid pt-[12px]">
            <Image
              src="/avatar.jpeg"
              alt="avatar"
              height={32}
              width={32}
              className="mx-auto rounded-full"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

type Div = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const FeaturedIcon = ({ className, children, ...props }: Div) => {
  return (
    <div
      className={clsx(
        "flex h-[36px] w-[36px] items-center justify-center rounded-[6px]",
        className,
      )}
      {...props}>
      {children}
    </div>
  );
};
