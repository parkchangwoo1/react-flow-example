export const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY }) => {
	return (
		<>
			<path
				id={id}
				stroke="#8393a5"
				className="react-flow__edge-path"
				d={`M${sourceX},${sourceY} C ${(sourceX + targetX) / 2} ${sourceY} ${
					(sourceX + targetX) / 2
				} ${targetY} ${targetX},${targetY}`}
			/>
			<polygon
				points={`${targetX - 6},${targetY - 6} ${targetX + 1},${targetY} ${targetX - 6},${targetY + 6}`}
				fill="#8393a5"
			/>
		</>
	);
};
