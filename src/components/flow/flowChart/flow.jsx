import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ReactFlow, { addEdge, useNodesState, useEdgesState } from 'react-flow-renderer';
import useStore from 'src/stores/rootStore';
import SelectorNode from './selectorNode';
import { CustomLine } from './customLine';
import { FirstNodeData, DefaultNodeData } from './nodeComponent';
import styled from 'styled-components';
import SideSlide from './sideSilde/sideSlide';

const nodeTypes = {
	nodeDefault: SelectorNode,
};
const nodeDefaultStyle = {
	background: 'white',
	border: 'none',
	borderRadius: '8px',
	padding: 15,
	boxShadow: '2px 2px 5px #e5e5e5, -0px -0px 0px #ffffff',
};

const initialNodes = [
	{
		id: '1',
		type: 'nodeDefault',
		sourcePosition: 'right',
		style: nodeDefaultStyle,
		data: {
			label: FirstNodeData(),
		},
		arrowHeadType: 'arrow',
		position: { x: 150, y: 250 },
	},
];
const initialEdges = [];

/************************************** JSX ****************************************/

const Flow = () => {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const onConnect = (params) => setEdges((eds) => addEdge(params, eds));
	const { startNode } = useStore();

	const [reactFlowInstance, setReactFlowInstance] = useState(null);
	const onConnectStart = (event, { nodeId }) => {
		startNode.set(nodeId);
	};
	const onConnectStop = (event) => {
		const newId = Math.random();
		const newNode = {
			id: String(newId),
			type: 'nodeDefault',
			position: reactFlowInstance.project({
				x: event.clientX - 80,
				y: event.clientY - 95,
			}),
			style: nodeDefaultStyle,
			data: {
				label: DefaultNodeData(),
			},
		};
		const newElements = {
			id: `${startNode.id},${newId}`,
			source: String(startNode.id),
			target: String(newId),
			markerEnd: { type: 'arrow', color: '#8393a5' },
			animated: false,
		};
		addNode(newNode, newElements);
	};
	const addNode = useCallback(
		(nodes, edges) => {
			setNodes((els) => {
				return [...els, nodes];
			});
			setEdges((els) => {
				console.log(edges);
				return [...els, edges];
			});
		},
		[setNodes, setEdges],
	);

	return (
		<>
			<SideSlide />
			<ReactFlow
				nodes={nodes}
				edges={edges}
				nodeTypes={nodeTypes}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				onInit={setReactFlowInstance}
				onConnectStart={onConnectStart}
				onConnectStop={onConnectStop}
				style={{ background: '#f1f5f8' }}
				connectionLineComponent={CustomLine}
				defaultZoom={1.5}
			></ReactFlow>
		</>
	);
};

export default Flow;
