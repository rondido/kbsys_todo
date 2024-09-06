import { useState } from "react";
import { EditOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import StyledButton from "../buttons/StyledButton";
import { TodoItemType } from "../../types/TodoItemType";

export default function TodoItem({
  todo,
  onIndex,
  onInputList,
  setOnInputList,
}: TodoItemType) {
  const [buttonValid, setButtonValid] = useState<boolean>(false);
  const [updateValue, setUpdateValue] = useState(todo);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const handleUpdateSubmit = (index: number) => {
    setButtonValid(false);
    setOnInputList((prev) =>
      prev.map((value, todoNum) => (todoNum === index ? updateValue : value))
    );
  };

  const handleDelteClick = (index: number) => {
    setOnInputList(onInputList.filter((_, num) => num !== index));
  };

  const handleModifyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUpdateValue(value);
  };
  const handleChecked = () => {
    setIsComplete(!isComplete);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          marginBottom: "10px",
        }}
        key={onIndex}
      >
        {!buttonValid ? (
          <div
            style={{
              display: "flex",
              backgroundColor: "white",
              width: "100%",
              height: "40px",
              color: "black",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              style={{ zoom: "1.5" }}
              checked={isComplete}
              onChange={handleChecked}
            />
            <span style={{ textDecoration: isComplete ? "line-through" : "" }}>
              {todo}
            </span>
            <div>
              <Button
                type="text"
                onClick={() => setButtonValid(true)}
                aria-label="수정"
              >
                <EditOutlined />
              </Button>
              <Button
                type="text"
                onClick={() => handleDelteClick(onIndex)}
                aria-label="삭제"
              >
                <CloseOutlined />
              </Button>
            </div>
          </div>
        ) : (
          <div
            key={onIndex}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "space-around",
            }}
            onSubmit={() => handleUpdateSubmit(onIndex)}
          >
            <form style={{ display: "flex", width: "100%" }}>
              <Input
                key={onIndex}
                style={{
                  marginBottom: "8px",
                  width: "100%",
                  height: "40px",
                }}
                onChange={(e) => handleModifyChange(e)}
                value={updateValue}
                suffix={
                  <>
                    <StyledButton
                      type="submit"
                      style={{ border: "none", backgroundColor: "transparent" }}
                    >
                      <CheckOutlined />
                    </StyledButton>
                    <CloseOutlined onClick={() => setButtonValid(false)} />
                  </>
                }
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
