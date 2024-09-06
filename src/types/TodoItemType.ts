import { SetStateAction } from "react";

export interface TodoItemType {
  todo: string;
  onIndex: number;
  onInputList: string[];
  setOnInputList: React.Dispatch<SetStateAction<string[]>>;
}
