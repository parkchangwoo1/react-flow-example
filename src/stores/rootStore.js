import { startNode, nodeState, edgeState, selectNode } from './flow';

const useStore = () => {
	return { startNode, nodeState, edgeState, selectNode };
};

export default useStore;
