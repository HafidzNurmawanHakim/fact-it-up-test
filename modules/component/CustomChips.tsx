import { Chip, SxProps } from "@mui/material";

function CustomChips() {
  let sx: SxProps = {
    background: "rgba(219, 13, 13, 0.2)",
    color: "red",
    width: "fit-content",
    height: "20px",
    fontSize: "10px",
  };

  return (
    <Chip
      label="Master Admin"
      color="primary"
      sx={sx}
      size="small"
      className="ms-2"
    />
  );
}

export default CustomChips;
