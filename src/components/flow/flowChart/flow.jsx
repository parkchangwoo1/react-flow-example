import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactFlow, { addEdge } from 'react-flow-renderer';
import useStore from 'src/stores/rootStore';
import { debounce } from 'lodash';
import { FirstStep, SendMessage } from './selectorNode';
import { CustomLine } from './customLine';
import { CustomEdge } from './customEdge';
import { useObserver } from 'mobx-react';
import { FirstNodeData, DefaultNodeData } from './nodeComponent';
import SideSlide from './sideSilde/sideSlide';

const nodeTypes = {
	startingStep: FirstStep,
	sendMessage: SendMessage,
};
const edgeTypes = {
	customEdge: CustomEdge,
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
		title: 'Starting Step',
		type: 'startingStep',
		sourcePosition: 'right',
		style: nodeDefaultStyle,
		data: {
			label: FirstNodeData(),
			title: 'Starting Step',
		},
		position: { x: 150, y: 250 },
	},
];

/************************************** JSX ****************************************/

const Flow = () => {
	const [nodes, setNodes] = useState(initialNodes);
	const onConnect = (params) => setNodes((eds) => addEdge(params, eds));
	const [reactFlowInstance, setReactFlowInstance] = useState(null);
	const { startNode, nodeState, selectNode } = useStore();

	const onConnectStart = (event, { nodeId }) => {
		startNode.set(nodeId);
	};

	const contextMenuCreate = (x, y) => {
		let addBox = document.createElement('div');
		addBox.className = 'column center';
		addBox.id = 'addMenu';
		addBox.innerHTML = `
			<li id='messenger'><strong>+ Messenger</strong></li>
			<li><strong>+ Action</strong></li>
			<li><strong>+ Condition</strong></li>
			<li><strong>+ Randomizer</strong></li>
			<li><strong>+ Smart Delay</strong></li>
			<li>Cancel</li>
		`;
		document.body.appendChild(addBox);
		document.getElementById('messenger').addEventListener('click', function () {
			document.body.removeChild(addBox);
			createNode(x, y);
		});
		document.getElementById('addMenu').style.top = `${y}px`;
		document.getElementById('addMenu').style.left = `${x}px`;
	};

	const createNode = (clientX, clientY) => {
		const newId = Math.random();
		const newNode = {
			id: String(newId),
			type: 'sendMessage',
			position: reactFlowInstance.project({
				x: clientX - 80,
				y: clientY - 95,
			}),
			style: nodeDefaultStyle,
			data: {
				label: DefaultNodeData(),
				title: 'Send Message',
			},
		};
		const newEdge = {
			id: `${startNode.id},${newId}`,
			source: String(startNode.id),
			target: String(newId),
			type: 'customEdge',
		};
		addNode(newNode, newEdge);
	};
	const onConnectStop = (event) => {
		console.log(event);
		contextMenuCreate(event.clientX, event.clientY);
	};

	const onElementsRemove = (el) => {};

	const addNode = useCallback(
		(node, edge) => {
			setNodes((els) => {
				return [...els, node, edge];
			});
		},
		[setNodes],
	);

	const nodeChange = useMemo(
		() =>
			debounce((val) => {
				nodeState.set(nodes);
			}, 200),
		[],
	);

	useEffect(() => {
		nodeChange();
	}, [nodes, nodeChange]);

	return useObserver(() => (
		<>
			<SideSlide selectNode={selectNode} />
			<ReactFlow
				id="flowChart"
				elements={nodes}
				nodeTypes={nodeTypes}
				edgeTypes={edgeTypes}
				onConnect={onConnect}
				onLoad={setReactFlowInstance}
				onConnectStart={onConnectStart}
				onConnectStop={onConnectStop}
				onElementsRemove={onElementsRemove}
				elementsSelectable={true}
				onElementClick={(e, node) => {
					console.log(e.target);
					if (!node.source) selectNode.select(node);
					else selectNode.reset();
				}}
				onPaneClick={(e) => selectNode.reset()}
				style={{ background: '#f1f5f8' }}
				connectionLineComponent={CustomLine}
				defaultZoom={1.5}
			></ReactFlow>
		</>
	));
};

export default Flow;
