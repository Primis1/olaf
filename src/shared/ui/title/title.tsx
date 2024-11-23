import { cn } from "@/lib/utils";
import React from "react";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface Props {
  size?: TitleSize;
  text: string;
  className: string;
}

export const Title: React.FC<Props> = ({ size = "sm", text, className }) => {
  const mapTagBySize = {
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
    "2xl": "h1",
  };

  const mapClassNameBySize = {
    xs: "text-[16px] ys-text",
    sm: "text-[22px] ys-text",
    md: "text-[26px] ys-text",
    lg: "text-[32px] ys-display",
    xl: "text-[40px] ys-display",
    "2xl": "text-[48px] ys-display",
  };

  return React.createElement(mapTagBySize[size], {
    className: cn(mapClassNameBySize[size], className),
    text,
  });
};
