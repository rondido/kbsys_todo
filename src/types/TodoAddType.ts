import { SetStateAction } from "react";

export interface TodoAddType {
  onSetInputValue: React.Dispatch<SetStateAction<string>>;
  onInputValue: string;
  onInputList: string[];
  setOnInputList: React.Dispatch<SetStateAction<string[]>>;
}
