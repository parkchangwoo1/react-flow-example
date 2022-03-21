import React from 'react';
import styled from 'styled-components';

/************************************** JSX ****************************************/
export const FirstNodeData = () => {
	return <FirstNodeLayout>This is First Step!</FirstNodeLayout>;
};

export const DefaultNodeData = () => {
	return <DefaultNodeLayout>Click to add a message</DefaultNodeLayout>;
};

/******************************* styled-components *********************************/

const FirstNodeLayout = styled.div`
	padding: 1rem 2rem;
	border-radius: 10px;
	background: #e2faec;
	margin: 0.5rem 0;
`;

const DefaultNodeLayout = styled.div`
	padding: 1rem 2rem;
	border-radius: 10px;
	color: #c3c9d2;
	margin: 0.5rem 0;
	outline: 1px dashed #c3c9d2;
	&:hover {
		background: #e6f4ff;
		outline: 1px dashed #0184ff;
	}
`;
