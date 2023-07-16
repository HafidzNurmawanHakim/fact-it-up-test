import { GridSize, useMediaQuery, useTheme } from "@mui/material";
import {
	createContext,
	Dispatch,
	FC,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";

type AppControllerParam = {
	leftPanel: boolean;
	setLeftPanel: Dispatch<SetStateAction<boolean>>;
	rightPanel: boolean;
	setRightPanel: Dispatch<SetStateAction<boolean>>;
	leftGrid: GridSize;
	setLeftGrid: Dispatch<SetStateAction<GridSize>>;
	mainGrid: GridSize;
	setMainGrid: Dispatch<SetStateAction<GridSize>>;
	heightNav: Number;
	setHeightNav: Dispatch<SetStateAction<Number>>;
	heightBrowser: Number;
	setHeightBrowser: Dispatch<SetStateAction<Number>>;
	heightLeftPanel: Number;
	isMobile: Boolean;
	isIpad: Boolean;
};

interface AppControllerProps {
	children: any;
}

const initsAppControllerParam: AppControllerParam = {
	leftPanel: false,
	setLeftPanel: () => {},
	rightPanel: false,
	setRightPanel: () => {},
	leftGrid: 3,
	setLeftGrid: () => {},
	mainGrid: 9,
	setMainGrid: () => {},
	heightNav: 80,
	setHeightNav: () => {},
	heightBrowser: 754,
	setHeightBrowser: () => {},
	heightLeftPanel: 754,
	isIpad: false,
	isMobile: false,
};

const AppControllerContext = createContext<AppControllerParam>(
	initsAppControllerParam
);

const useAppController = () => {
	return useContext(AppControllerContext);
};

const AppControllerProvider: FC<AppControllerProps> = ({ children }) => {
	const [leftPanel, setLeftPanel] = useState(true);
	const [rightPanel, setRightPanel] = useState(false);
	const [leftGrid, setLeftGrid] = useState<GridSize>(3);
	const [mainGrid, setMainGrid] = useState<GridSize>(19);
	const [heightBrowser, setHeightBrowser] = useState<Number>(754);
	const [heightNav, setHeightNav] = useState<Number>(80);

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isIpad = useMediaQuery(theme.breakpoints.down("md"));

	useEffect(() => {
		if (typeof window !== "object" || typeof document !== "object") return;

		const eventHandler = () => {
			setHeightBrowser(document.documentElement.clientHeight);
			setHeightNav(document.getElementById("navbar")?.offsetHeight || 80);
		};

		document.addEventListener("resize", eventHandler);

		if (isMobile || isIpad) {
			setLeftPanel(false);
			setMainGrid(24);
		}

		return () => document.removeEventListener("resize", eventHandler);
	}, [isMobile, isIpad]);

	let heightLeftPanel: number =
		(heightBrowser.valueOf() || 754) - (heightNav.valueOf() || 80) - 25;

	return (
		<AppControllerContext.Provider
			value={{
				leftPanel,
				setLeftPanel,
				rightPanel,
				setRightPanel,
				leftGrid,
				mainGrid,
				setLeftGrid,
				setMainGrid,
				heightBrowser,
				heightNav,
				setHeightBrowser,
				setHeightNav,
				heightLeftPanel,
				isMobile,
				isIpad,
			}}
		>
			{children}
		</AppControllerContext.Provider>
	);
};

export { AppControllerProvider, useAppController };
