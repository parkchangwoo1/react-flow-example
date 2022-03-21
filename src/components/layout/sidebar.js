import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

/************************************* jsx *************************************/

const SideBar = (dataProps) => {
	const [data, setData] = useState();

	useEffect(() => {
		if (dataProps) setData(dataProps);
	});

	return (
		<SideBarLayout>
			<LogoLayout></LogoLayout>
			<MenuLayout></MenuLayout>
		</SideBarLayout>
	);
};

export default SideBar;

/******************************** styled-components ********************************/

const SideBarLayout = styled.div`
	position: fixed;
	width: 80px;
	height: 100vh;

	background: #f6f7f9;
	//transition: 0.5s;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		width: 60%;
		left: 80px;
		height: 100vh;
		box-shadow: -12px 0 24px -5px rgba(132, 146, 166, 0.16);
	}
`;

const LogoLayout = styled.div`
	height: 80px;
	border-bottom: 1px solid #e1e5ea;
`;

const MenuLayout = styled.div``;

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
