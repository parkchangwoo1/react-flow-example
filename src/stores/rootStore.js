import { startNode, nodeState, edgeState } from './flow';

const useStore = () => {
	return { startNode, nodeState, edgeState };
};

export default useStore;
