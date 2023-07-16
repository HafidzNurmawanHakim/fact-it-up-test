import * as React from "react";

function Bookmark(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
			<path d="M12 17l-8 5V4a2 2 0 012-2h12a2 2 0 012 2v18z" />
		</svg>
	);
}

const MemoBookmark = React.memo(Bookmark);
export default MemoBookmark;
