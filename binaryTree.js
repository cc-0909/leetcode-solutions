//中序遍历


//最大深度
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
};
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function arrayToTree(arr) {
    if (arr.length === 0) return null;

    let root = new TreeNode(arr[0]);
    let nodes = [root]; 
    let i = 1;

    for (let node of nodes) {
        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            nodes.push(node.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            nodes.push(node.right);
        }
        i++;
    }

    return root;
}

//二叉树中序遍历
var inorderTraversal = function(root) {
    const result = [];  
    function inorder(node) {
        if (node === null) return;  
        inorder(node.left);  
        result.push(node.val);  
        inorder(node.right);  
    }
    inorder(root);  
    return result;  
};

//对称二叉树
var isSymmetric = function(root) {
    function isSimple(left,right){
         if (left === null && right === null) return true;      
        if (left === null || right === null) return false;     
        if (left.val !== right.val) return false; 
        let outSide=isSimple(left.left,right.right)
        let inSide=isSimple(left.right,right.left)
        return outSide&&inSide
    }
    if(root==null) return true
    let isTrue=isSimple(root.left,root.right)
    return isTrue
};