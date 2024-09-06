import { useState } from "react";
import TodoItem from "../components/todos/TodoItem";
import TodoAdd from "../components/todos/TodoAdd";

export default function TodosPage() {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputList, setInputList] = useState<string[]>([]);

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
            <TodoAdd
              onSetInputValue={setInputValue}
              onInputValue={inputValue}
              onInputList={inputList}
              setOnInputList={setInputList}
            />
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
