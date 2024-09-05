import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  type: "submit" | "button" | "reset";
  style: React.CSSProperties;
}

export default function StyledButton({ children, type, style }: IButton) {
  return (
    <button style={style} type={type}>
      {children}
    </button>
  );
}
