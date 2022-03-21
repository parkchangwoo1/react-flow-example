import React from 'react';
import Flow from 'src/components/flow/flowChart/flow';
import Header from 'src/components/layout/header';
import SideBar from 'src/components/layout/sidebar';
import styled from 'styled-components';

/************************************* jsx *************************************/

const Main = () => {
	return (
		<Box className="column">
			<Header />
			<SideBar />
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
