import { Box, InputAdornment, SxProps, TextField, Theme } from "@mui/material";
import { useAppController } from "../../app/layout/core/AppController";
import { object } from "yup";
import { CSSProperties } from "react";
import Image from "next/image";

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
		<Box
			sx={{
				display: "flex",
			}}
		>
			<TextField
				id="text-area-multiline"
				fullWidth={true}
				onFocus={onFocus}
				sx={{
					background: "white",
					width: checked ? "98%" : " 90%",
					height: checked ? "260px" : "auto",
					borderRadius: "4px",
					px: "5px",
					transition: "0.3s",
					"& .MuiInputAdornment-positionStart": {
						top: 0,
					},
					...style,
				}}
				placeholder={placeholder}
				variant="standard"
				InputLabelProps={{
					shrink: true,
				}}
				InputProps={{
					disableUnderline: true,
					startAdornment: (
						<InputAdornment position="start">
							<Image
								width={30}
								height={30}
								style={{ borderRadius: "4px" }}
								src="/media/avatar/avatar1.png"
								alt="logo"
								className=" ms-2 me-0"
							/>
						</InputAdornment>
					),
				}}
				multiline
				maxRows={maxRows}
				{...props}
			/>
		</Box>
	);
};

export default CustomTextArea;
