import React from "react";

interface RandomCircleProps {
    count: number;
}

const RandomCircle: React.FC<RandomCircleProps> = ({ count }) => {
    const getRandomColor = (): string => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const getRandomSize = (): number => {
        return Math.floor(Math.random() * 25) + 1; // Ukuran acak antara 1px hingga 25px
    };

    const generateRandomPosition = (): React.CSSProperties => {
        const positionStyle: React.CSSProperties = {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            zIndex: 0,
        };
        return positionStyle;
    };

    return (
        <>
            {Array.from({ length: Math.min(count, 3) }).map((_, index) => {
                const size = getRandomSize();
                const borderRadius = size / 2;
                return (
                    <div
                        key={index}
                        className="random-circle"
                        style={generateRandomPosition()}
                    >
                        <div
                            className="circle"
                            style={{
                                backgroundColor: getRandomColor(),
                                width: size,
                                height: size,
                                borderRadius: borderRadius,
                            }}
                        ></div>
                    </div>
                );
            })}
        </>
    );
};

export default RandomCircle;
