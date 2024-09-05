import { Input } from "antd";
import { useState } from "react";
import TodoItem from "../components/todos/TodoItem";

export default function TodosPage() {
  const [inputList, setInputList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleTodoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue === "") {
      return;
    }
    setInputList([...inputList, inputValue]);
    setInputValue("");
  };

  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          width: "30%",
          background: "#dee2e6",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "5px 5px 5px black",
          overflowY: "auto",
        }}
      >
        <header>
          <h1 style={{ fontSize: "20px", marginBottom: "10px" }}>할일 목록</h1>
        </header>
        <main>
          <section>
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
                value={inputValue || ""}
              />
              <button
                style={{
                  height: "40px",
                  width: "80px",
                  border: "none",
                  marginLeft: "5px",
                  background: "white",
                }}
                type="submit"
              >
                추가
              </button>
            </form>
            {inputList.map((value, index) => (
              <TodoItem
                todo={value}
                onIndex={index}
                onInputList={inputList}
                setOnInputList={setInputList}
              />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
