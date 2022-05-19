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
	set(changeNode) {
		this.node = [...changeNode];
	},
});

const edgeState = observable({
	id: 0,
	set(id) {
		this.id = id;
	},
});

const selectNode = observable({
	node: {},
	open: false,

	select(node) {
		this.node = node;
		console.log(node);
		this.open = true;
	},
	sideOpen() {
		this.open = !this.open;
	},
	reset() {
		console.log('reset');
		this.open = false;
		this.node = {};
	},
});
export { startNode, nodeState, edgeState, selectNode };
