import React from "react";

export default function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-screen h-full max-w-[90%] mx-auto ${
        className || " "
      } `}
    >
      {children}
    </div>
  );
}
