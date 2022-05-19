import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { ReactComponent as OpenBtn } from 'src/assets/flow/openBtn.svg';

import styled from 'styled-components';
/************************************* jsx *************************************/

const SideSlide = observer(({ selectNode }) => {
	return (
		<SideSlideLayout open={selectNode.open}>
			<ContentLayout open={selectNode.open}>
				{selectNode.node.id ? (
					<SelectHeader className="f-20 center" type={selectNode.node.type}>
						{selectNode.node.data.title}
					</SelectHeader>
				) : (
					<Untitled>
						<p className="gray mb-8">Flow</p>
						<p className="f-20">Untitled</p>
					</Untitled>
				)}
			</ContentLayout>
			<OpenLayout open={selectNode.open} className="center" onClick={() => selectNode.sideOpen()}>
				<OpenBtn width={60} height={60} fill="#e6e7ed" />
			</OpenLayout>
		</SideSlideLayout>
	);
});

export default SideSlide;

/******************************** styled-components ********************************/

const SideSlideLayout = styled.div`
	height: calc(100% - 80px);
	display: flex;
	position: absolute;
	width: ${(props) => (props.open ? '460px' : '60px')};
	z-index: 30;
	top: 80px;
	left: 220px;
	background: transparent;
	transition: 0.3s;
`;

const ContentLayout = styled.div`
	transition: 0.3s;
	overflow-x: hidden;
	width: ${(props) => (props.open ? '380px' : '0')};
	background: white;
`;

const SelectHeader = styled.div`
	width: 100%;
	height: 60px;
	text-align: center;
	background: ${(props) =>
		props.type === 'startingStep'
			? 'rgb(225, 250, 236)'
			: props.type === 'sendMessage'
			? 'rgb(225, 229, 234)'
			: 'white'};
`;

const Untitled = styled.div`
	margin: 1.5rem 2rem;
`;

const OpenLayout = styled.div`
	width: 60px;
	background: transparent;
	cursor: pointer;
	&:hover {
		background: #dfe5ec60;
	}
	svg {
		transition: 0.3s;
		transform: ${(props) => (props.open ? 'rotate(180deg)' : 'none')};
	}
`;

const i = styled.div`
	height: calc(100vh - 80px);
`;
