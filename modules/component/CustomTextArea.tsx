import { SxProps, TextField, Theme } from "@mui/material";
import { useAppController } from "../../app/layout/core/AppController";
import { object } from "yup";
import { CSSProperties } from "react";

type CustomTextArea = {
  placeholder?: string;
  checked?: boolean;
  style?: CSSProperties | SxProps<Theme> | undefined;
  maxRows?: number;
  onFocus?: (val: any) => void;
  [key: string]: any;
};

const CustomTextArea = ({
  placeholder,
  checked,
  maxRows,
  onFocus,
  style,
  ...props
}: CustomTextArea) => {
  return (
    <div>
      <TextField
        id="text-area-multiline"
        fullWidth={true}
        onFocus={onFocus}
        sx={{
          background: "white",
          width: checked ? "98%" : " 90%",
          height: checked ? "300px" : "auto",
          borderRadius: "4px",
          pl: "5px",
          transition: "0.3s",
          ...style,
        }}
        placeholder={placeholder}
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
        multiline
        maxRows={maxRows}
        {...props}
      />
    </div>
  );
};

export default CustomTextArea;
