const ROW = 4;
const COL = 4;

const is_valid_move = (maze, x, y) => {
    return x >= 0 && y >=0 && x < COL && y < ROW && maze[x][y] != 0;
}

const find_path = (maze, x, y, solution) => {
    if (x == ROW - 1 && y == COL - 1) { 
      solution[x][y] = 1;
      return true;
    }
  
    if (is_valid_move(maze, x, y)) {
      solution[x][y] = 1; 
      
      if (find_path(maze, x + 1, y, solution))
        return true;
      
      if (find_path(maze, x, y + 1, solution))
        return true;    
  
      solution[x][y] = 0; 
      return false;
    }

    return false; 
  }

const solve_maze = (maze) => {
    let solution = Array(ROW).fill(0).map(r => Array(COL).fill(0));

    if (find_path(maze, 0, 0, solution)) return solution;
    return null; 
  }

let maze = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 1]
]; 

console.log(solve_maze(maze));

