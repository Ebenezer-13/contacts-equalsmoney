import { ChangeEvent } from "react";
import styled from "styled-components";

interface IEditableFieldProps {
  value: string;
  editing: boolean;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

const Input = styled.input``;

const EditableField = ({ value, editing, onChange }: IEditableFieldProps) => {
  return editing ? (
    <Input value={value} onChange={onChange} />
  ) : (
    <div>{value}</div>
  );
};

export default EditableField;
