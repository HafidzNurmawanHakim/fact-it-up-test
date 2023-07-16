import { Chip, SxProps } from "@mui/material";

interface ChipsProps {
  sx?: SxProps;
}

function CustomChips({ sx, ...props }: ChipsProps) {
  let style: SxProps = {
    background: "rgba(219, 13, 13, 0.2)",
    color: "red",
    width: "fit-content",
    height: "20px",
    fontSize: "8px",
    borderRadius: "4px",
    border: "1px solid red",
    ...sx,
  };

  return <Chip label="Master Admin" color="primary" sx={style} size="small" />;
}

export default CustomChips;
