import { Input } from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useState, useEffect } from "react";

export default function MainPage() {
  const [inputList, setInputList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [buttonValid, setButtonValid] = useState<boolean>(false);
  const [updateValue, setUpdateValue] = useState(inputList);

  const handleTodoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue === "") {
      return;
    }
    setInputList([...inputList, inputValue]);
    setInputValue("");
  };
  console.log(inputList);
  const handleModifyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setUpdateValue([...inputList, value]);
  };

  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleUpdateSubmit = (index: number) => {
    setButtonValid(false);
    setInputList((prev) =>
      prev.map((value, todoNum) => (todoNum === index ? value : value))
    );
  };

  const handleDelteClick = (index: number) => {
    setInputList(inputList.filter((_, num) => num !== index));
  };

  useEffect(() => {
    setUpdateValue(inputList);
  }, [inputList]);

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
          maxWidth: "1000px",
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                  marginBottom: "10px",
                }}
                key={index}
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
                    <input type="checkbox" style={{ zoom: "1.5" }} />
                    <span>{value}</span>
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
                        onClick={() => handleDelteClick(index)}
                        aria-label="삭제"
                      >
                        <CloseOutlined />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      justifyContent: "space-around",
                    }}
                    onSubmit={() => handleUpdateSubmit(index)}
                  >
                    <div style={{ display: "flex", width: "100%" }}>
                      <Input
                        key={index}
                        style={{
                          marginBottom: "8px",
                          width: "100%",
                          height: "40px",
                        }}
                        onChange={(e) => handleModifyChange(e)}
                        value={updateValue}
                        suffix={
                          <>
                            <CheckOutlined type="submit" />
                            <CloseOutlined
                              onClick={() => setButtonValid(false)}
                            />
                          </>
                        }
                      />
                    </div>
                  </form>
                )}
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
