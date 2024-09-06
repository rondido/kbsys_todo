import { ButtonType } from "../../types/ButtonType";

export default function StyledButton({ children, type, style }: ButtonType) {
  return (
    <button style={style} type={type}>
      {children}
    </button>
  );
}
