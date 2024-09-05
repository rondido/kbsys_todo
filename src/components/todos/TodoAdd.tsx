import { Input } from "antd";
import Button from "../buttons/StyledButton";
import { TodoAddType } from "../../types/TodoaddType";

export default function TodoAdd({
  onSetInputValue,
  onInputValue,
  setOnInputList,
  onInputList,
}: TodoAddType) {
  const handleTodoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onInputValue === "") {
      return;
    }
    setOnInputList([...onInputList, onInputValue]);
    onSetInputValue("");
  };

  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSetInputValue(e.target.value);
  };
  return (
    <form
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "10px",
      }}
      onSubmit={handleTodoSubmit}
    >
      <Input
        placeholder="할일 목록을 추가해주세요."
        style={{
          width: "100%",
          height: "40px",
        }}
        onChange={(e) => handleTodoChange(e)}
        value={onInputValue || ""}
        aria-aria-label="할일 목록 추가"
      />
      <Button
        style={{
          height: "40px",
          width: "80px",
          border: "none",
          marginLeft: "5px",
          background: "white",
          cursor: "pointer",
        }}
        type="submit"
        aria-label="추가 버튼"
      >
        추가
      </Button>
    </form>
  );
}
