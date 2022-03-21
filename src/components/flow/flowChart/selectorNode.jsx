import React, { memo } from 'react';
import { ReactComponent as FirstStep } from 'src/assets/flow/firstStep.svg';
import { ReactComponent as Waffle } from 'src/assets/flow/waffle.svg';
import { Handle } from 'react-flow-renderer';
import styled from 'styled-components';

const targetHandleStyle = { top: 10, left: -2, width: 0, border: 'none' };
const SourceHandleStyle = {
	bottom: 5,
	top: 'auto',
	width: 10,
	height: 10,
	border: '1px solid #8393a5',
	background: 'white',
};

export default memo(({ id, data, isConnectable }) => {
	return (
		<>
			<NodeSvgLayout>
				{id === '1' ? (
					<div className="flex">
						<FirstStep width={25} height={25} />
						<p className="center f-12">Starting Step</p>
					</div>
				) : (
					<div className="flex">
						<Waffle width={25} height={25} />
						<div className="column justify-between">
							<p className="f-10 secondary">Tmax Waffle</p>
							<p className="f-12 bold">Send Message</p>
						</div>
					</div>
				)}
			</NodeSvgLayout>
			<NodeLayout>
				<Handle
					type="target"
					position="left"
					style={targetHandleStyle}
					onConnect={(params) => console.log('handle onConnect', params)}
					isConnectable={isConnectable}
				/>
				<div>{data.label}</div>
				<HandleText>{id === '1' ? 'The First Step' : 'Next Step'}</HandleText>
				<Handle
					className="sourceNode"
					type="source"
					position="right"
					style={SourceHandleStyle}
					isConnectable={isConnectable}
				/>
			</NodeLayout>
		</>
	);
});

const NodeLayout = styled.div`
	padding: 1.5rem 0;
`;

const NodeSvgLayout = styled.div`
	color: #505354;
	p {
		margin-left: 0.5rem;
	}
`;

const HandleText = styled.div`
	position: absolute;
	bottom: 10px;
	right: 10px;
	color: #8393a5;
	font-size: 0.3rem;
`;
