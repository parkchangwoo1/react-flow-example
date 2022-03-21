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
				points={`${targetX - 5},${targetY - 5} ${targetX},${targetY} ${targetX - 5},${targetY + 5}`}
				fill="#8393a5"
			/>
		</g>
	);
};
