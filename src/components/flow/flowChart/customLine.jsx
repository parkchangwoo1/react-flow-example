export const CustomLine = ({ sourceX, sourceY, targetX, targetY }) => {
	return (
		<g className="normal-edge">
			<path
				fill="none"
				stroke="#8393a5"
				strokeWidth={1.5}
				d={`M${sourceX},${sourceY} C ${(sourceX + targetX) / 2} ${sourceY} ${
					(sourceX + targetX) / 2
				} ${targetY} ${targetX},${targetY}`}
			/>
			<polygon
				points={`${targetX - 6},${targetY - 6} ${targetX + 1},${targetY} ${targetX - 6},${targetY + 6}`}
				fill="#8393a5"
			/>
		</g>
	);
};
