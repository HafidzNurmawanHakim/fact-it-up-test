import React from "react";

function SpeechBubble(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
			<g data-name="39-Speech Bubble">
				<path d="M13 32a1 1 0 01-1-1v-5h-1A11 11 0 010 15v-4A11 11 0 0111 0h10a11 11 0 0111 11v4a11 11 0 01-11 11h-1.59l-5.71 5.71a1 1 0 01-.7.29zM11 2a9 9 0 00-9 9v4a9 9 0 009 9h2a1 1 0 011 1v3.59l4.29-4.29A1 1 0 0119 24h2a9 9 0 009-9v-4a9 9 0 00-9-9z" />
				<path d="M6 12h20v2H6zm2-5h16v2H8zm0 10h16v2H8z" />
			</g>
		</svg>
	);
}

const MemoSpeechBubble = React.memo(SpeechBubble);
export default MemoSpeechBubble;
