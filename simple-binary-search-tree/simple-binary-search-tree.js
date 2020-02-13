class BSTNode {
    constructor(val) {
        this.right = null;
        this.left = null;
        this.value = val;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    addNode(val) {
        const node = new BSTNode(val);

        let currentNode = null;

        if (!this.root) {
            this.root = node;
        } else {
            currentNode = this.root;

            while (currentNode) {
                if (val > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    } else {
                        currentNode = currentNode.right;
                    };

                } else if (val < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    };
                } else {
                    console.log(`Invalid input: ${val}`)
                };
            };
        }
    }
}
