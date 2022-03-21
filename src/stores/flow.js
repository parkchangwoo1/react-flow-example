import { observable } from 'mobx';

const startNode = observable({
	id: 0,
	set(id) {
		this.id = id;
	},
});

const nodeState = observable({
	node: [],
	add(newNode) {
		this.node = [...this.node, newNode];
		console.log(newNode);
	},
	del(id) {},
});

const edgeState = observable({
	id: 0,
	set(id) {
		this.id = id;
	},
});

export { startNode, nodeState, edgeState };
