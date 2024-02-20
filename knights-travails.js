class Board
{
    constructor(dimension = 8)
    {
        this.dimension = dimension;
        const board = new Array(8);

        for(let i = 0; i < this.dimension; i++)
        {
           board[i] = new Array(8).fill(-1);
        }

        this.board = board;
    }

    drawBoard()
    {
        for(let i = 0; i < this.board.length; i++)
        {
            for(let j = 0; j < this.board.length; j++)
            {
                process.stdout.write(String("  " + this.board[i][j]) + "  ");
            }
            console.log("\n");
        }
    }
}

const board = new Board();
board.drawBoard();