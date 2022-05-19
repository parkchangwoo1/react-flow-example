import React from 'react';
import Flow from 'src/components/flow/flowChart/flow';
import Header from 'src/components/layout/header';
import NavigationBar from 'src/components/layout/Navigation_bar';
import styled from 'styled-components';

/************************************* jsx *************************************/

const Main = () => {
	return (
		<Box className="column">
			<Header />
			<NavigationBar />
			<FlowLayout>
				<Flow />
			</FlowLayout>
		</Box>
	);
};

export default Main;

/******************************** styled-components ********************************/

const Box = styled.div`
	height: 100vh;
`;

const FlowLayout = styled.div`
	height: calc(100vh - 80px);
	padding-left: 80px;
`;
