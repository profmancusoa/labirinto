<script>
    import Cell from "../components/cell.svelte";
  
    let row = 3;
    let col = row;
  
    let maze = [];
  
    $: {
      col = row;
      maze = Array(row)
        .fill(1)
        .map((r) => Array(col).fill(1));
    }
  
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const is_valid_move = (x, y) => {
      return x >= 0 && y >= 0 && x < row && y < col && maze[x][y] != 0;
    };
  
    const find_path = async (x, y) => {
      await sleep(200);
      if (x == row - 1 && y == col - 1) {
        maze[x][y] = 2;
        maze = [...maze];
        return true;
      }
  
      if (is_valid_move(x, y)) {
        maze[x][y] = 2;
        maze = [...maze];
  
        if (await find_path(x + 1, y)) return true;
  
        if (await find_path(x, y + 1)) return true;
  
        maze[x][y] = 1;
        maze = [...maze];
        return false;
      }
  
      return false;
    };
  
    const solve_maze = async () => {
        await find_path(0, 0);
    };
  </script>
  
  <main>
    <div class="config">
      LABIRINTO {row} x {col}
      <input
        type="range"
        min="4"
        max="20"
        bind:value={row}
        class="slider"
        id="row"
      />
      <button on:click={solve_maze}>SOLVE</button>
    </div>
  
    <table class="maze" border="1">
      {#each maze as row, r}
        <tr>
          {#each row as col, c}
            <Cell bind:val={maze[r][c]} />
          {/each}
        </tr>
      {/each}
    </table>
  </main>
  
  <style>
    .maze {
      margin: auto;
      margin-top: 3rem;
    }
  
    main {
      width: 80%;
      margin: auto;
      height: 95vh;
    }
  
    .config {
      width: 60%;
      margin: auto;
      display: grid;
      grid-template-columns: 2fr 3fr 0.5fr;
      gap: 1rem;
      margin-top: 2rem;
      font-size: 2rem;
    }
  </style>
  