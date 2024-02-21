function knightMoves(start, end) {
    let tree = new Node(start);
    let queue = [tree];

    while (queue.length > 0) {
        let currentNode = queue.shift();

        const moves = [
            [1, 2], [2, 1], [2, -1], [1, -2],
            [-1, -2], [-2, -1], [-2, 1], [-1, 2]
        ];

        for (let i = 0; i < moves.length; i++) {
            let newCoordinates = [currentNode.coordinates[0] + moves[i][0], currentNode.coordinates[1] + moves[i][1]];
            if (checkIfValid(newCoordinates)) {
                let newNode = new Node(newCoordinates);
                currentNode.child.push(newNode);
                queue.push(newNode);
                if (JSON.stringify(newCoordinates) === JSON.stringify(end)) return [tree, end];
            }
        }
    }
    return null;
}

class Node
{
    constructor(coordinates)
    {
        this.coordinates = coordinates;
        this.child = Array(0);
    }
}

function checkIfValid(coordinates)
{
    if(coordinates[0] <= 8 && coordinates[1] <= 8 && coordinates[0] >= 0 && coordinates[1] >= 0) return true;
    else return false;

}

function findEnd(root, end, path = []) {
    if (!root || !root.child) return null;
    
    path.push(root.coordinates);
    
    for (let child of root.child) {
        if (!child) continue;
        
        if (child.coordinates[0] === end[0] && child.coordinates[1] === end[1]) {
            path.push(end);
            return path;
        }
        
        let result = findEnd(child, end, path.slice());
        if (result) return result;
    }
}

const root = knightMoves([0, 0], [7, 8]); 
const endPosition = root[1];
const path = findEnd(root[0], endPosition);

console.log(path);