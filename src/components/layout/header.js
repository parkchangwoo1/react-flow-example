import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return <HeaderLayout></HeaderLayout>;
};

export default Header;

const HeaderLayout = styled.div`
	height: 80px;
	padding-left: 80px;
	display: flex;
	background: #f6f7f9;
	border-bottom: 1px solid #e1e5ea;
	box-shadow: 0 8px 8px -2px rgb(238, 238, 238);
`;
