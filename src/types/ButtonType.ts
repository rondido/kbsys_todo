import { ReactNode } from "react";

export interface ButtonType {
  children: ReactNode;
  type: "submit" | "button" | "reset";
  style: React.CSSProperties;
}
