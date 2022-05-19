import React, { memo } from 'react';
import { ReactComponent as FirstStepSVG } from 'src/assets/flow/firstStep.svg';
import { ReactComponent as Waffle } from 'src/assets/flow/waffle.svg';
import { ReactComponent as Remove } from 'src/assets/flow/remove.svg';
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

export const FirstStep = memo(({ id, data, isConnectable }) => {
	return (
		<>
			<NodeSvgLayout>
				<div className="flex">
					<FirstStepSVG width={25} height={25} />
					<p className="center f-12">Starting Step</p>
				</div>
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
				<HandleText>The First Step</HandleText>
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

export const SendMessage = memo(({ id, data, isConnectable }) => {
	return (
		<>
			<HoverContextLayout>
				<HoverContext className="center">
					<HoverBtn
						onClick={(event) => {
							event.preventDefault();
							console.log(event.target);
						}}
					>
						<Remove width={18} height={18} />
					</HoverBtn>
				</HoverContext>
			</HoverContextLayout>
			<NodeSvgLayout>
				<div className="flex">
					<Waffle width={25} height={25} />
					<div className="column justify-between">
						<p className="f-10 secondary">Tmax Waffle</p>
						<p className="f-12 bold">Send Message</p>
					</div>
				</div>
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
				<HandleText>Next Step</HandleText>
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

const HoverContextLayout = styled.div`
	position: absolute;
	width: fit-content;
	left: 0;
	right: 0;
	margin: 0 auto;
	padding-bottom: 12px;
	top: -38px;
`;

const HoverContext = styled.div`
	background: white;
	top: -25px;
	border-radius: 5px;
`;

const HoverBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 26px;
	height: 26px;
	cursor: pointer;
	&:hover {
		background: #f1f3f5;
	}
`;
