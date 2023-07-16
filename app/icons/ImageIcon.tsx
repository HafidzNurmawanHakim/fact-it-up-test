import * as React from "react";

function ImageIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			id="prefix__Layer_1"
			x={0}
			y={0}
			viewBox="0 0 32 32"
			xmlSpace="preserve"
			width="1em"
			height="1em"
			{...props}
		>
			<style>{".prefix__st0{fill:#008ad0}.prefix__st1{fill:#333}"}</style>
			<path
				className="prefix__st1"
				d="M30 31H2a1 1 0 01-1-1V2a1 1 0 011-1h28a1 1 0 011 1v28a1 1 0 01-1 1zM3 29h26V3H3v26z"
			/>
			<path
				className="prefix__st0"
				d="M21.001 28a.998.998 0 01-.833-.445L13 16.803 5.832 27.555a1.001 1.001 0 01-1.664-1.11l8-12c.371-.557 1.293-.557 1.664 0l8 12A1 1 0 0121.001 28z"
			/>
			<path
				className="prefix__st0"
				d="M27.287 28a1 1 0 01-.821-.428L21 19.746l-2.181 3.123a1.002 1.002 0 01-1.641-1.145l3.001-4.297c.375-.537 1.266-.537 1.641 0l6.286 9A1 1 0 0127.287 28z"
			/>
			<path
				className="prefix__st1"
				d="M22.5 14c-2.481 0-4.5-2.019-4.5-4.5S20.019 5 22.5 5 27 7.019 27 9.5 24.981 14 22.5 14zm0-7C21.121 7 20 8.121 20 9.5s1.121 2.5 2.5 2.5S25 10.879 25 9.5 23.879 7 22.5 7z"
			/>
		</svg>
	);
}

const MemoImageIcon = React.memo(ImageIcon);
export default MemoImageIcon;
