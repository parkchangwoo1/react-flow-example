import React, { useEffect, useState } from 'react';
import { ReactComponent as OpenBtn } from 'src/assets/flow/openBtn.svg';
import styled from 'styled-components';
/************************************* jsx *************************************/

const SideSlide = (dataProps) => {
	const [data, setData] = useState();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (dataProps) setData(dataProps);
		console.log(data);
	}, []);

	return (
		<SideSlideLayout open={open}>
			<ContentLayout open={open}>
				{data?.id ? (
					<div></div>
				) : (
					<Untitled>
						<p className="gray mb-8">Flow</p>
						<p className="f-20">Untitled</p>
					</Untitled>
				)}
			</ContentLayout>
			<OpenLayout open={open} className="center" onClick={() => setOpen(!open)}>
				<OpenBtn width={60} height={60} fill="#e6e7ed" />
			</OpenLayout>
		</SideSlideLayout>
	);
};

export default SideSlide;

/******************************** styled-components ********************************/

const SideSlideLayout = styled.div`
	height: calc(100% - 80px);
	display: flex;
	position: absolute;
	width: ${(props) => (props.open ? '460px' : '60px')};
	z-index: 10;
	top: 80px;
	left: 80px;
	background: transparent;
	transition: 0.3s;
`;

const ContentLayout = styled.div`
	transition: 0.3s;
	overflow-x: hidden;
	width: ${(props) => (props.open ? '380px' : '0')};
	background: white;
`;

const Untitled = styled.div`
	margin: 1.5rem 2rem;
	// p {
	// 	margin-bottom: 1rem;
	// 	color: #757575;
	// 	strong {
	// 		color: black;
	// 	}
	// }
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
