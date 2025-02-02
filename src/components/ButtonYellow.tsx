import React, { FC, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const ButtonYellow: FC<ButtonProps> = ({
  children,
  href,
  className,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        "hover:bg-blue-gradient-hover inline-block text-purple-900 px-[30px] btn-yellow-gradient leading-[66px] h-[66px] text-custom-xl font-extrabold rounded-full min-w-[284px]",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ButtonYellow;
