<script>
  import { xlink_attr } from "svelte/internal";

    export let val;
</script>



<td class="cell {val == 0 ? 'black': ''} {val == 2 ? 'green': ''}" on:click={() => val = Math.abs(val - 1)}>
    
</td>


<style>
    .cell {
        border: 1px solid green;
        height: 30px;
        width: 30px;
        text-align: center;
    }
    
    .black {
        background-color: black;
    }

    .green {
        background-color: green;
    }
</style>