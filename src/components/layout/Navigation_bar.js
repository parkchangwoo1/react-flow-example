import React, { useEffect, useState } from 'react';
import { ReactComponent as LogoSVG } from 'src/assets/navigation/logo.svg';
import { ReactComponent as BuliderSVG } from 'src/assets/navigation/builder.svg';
import styled from 'styled-components';

/************************************* jsx *************************************/

const NavigationBar = (dataProps) => {
	const [data, setData] = useState();

	useEffect(() => {
		if (dataProps) setData(dataProps);
	}, []);

	return (
		<NavigationBarLayout>
			<LogoLayout className="center">
				<LogoSVG width={120} />
			</LogoLayout>
			<Title className="center">{data?.title ? data.title : 'Project를 선택해주세요'}</Title>
			<MenuLayout>
				<li>
					<BuliderSVG width={30} />
					builder
				</li>
				<li></li>
				<li></li>
			</MenuLayout>
		</NavigationBarLayout>
	);
};

export default NavigationBar;

/******************************** styled-components ********************************/

const NavigationBarLayout = styled.div`
	position: fixed;
	width: 220px;
	height: 100vh;
	background: white;
	z-index: 20;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		width: 60%;
		left: 220px;
		height: 100vh;
		box-shadow: -12px 0 24px -5px rgba(132, 146, 166, 0.16);
	}
`;

const LogoLayout = styled.div`
	height: 80px;
	border-bottom: 1px solid #e1e5ea;
	cursor: pointer;
`;

const Title = styled.div`
	padding: 1rem 0;
	font-weight: bold;
	background: #f6f7f9;
`;

const MenuLayout = styled.ul`
	li {
		style: none;
		padding: 1rem;
	}
`;

const SlideHeader = styled.div`
	padding: 8px 8px 8px 32px;
	text-decoration: none;
	font-size: 25px;
	color: #818181;
	display: block;
	transition: 0.3s;
`;

const i = styled.div`
	height: calc(100vh - 80px);
`;
