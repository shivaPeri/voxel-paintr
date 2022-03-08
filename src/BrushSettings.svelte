<script lang="ts">
  import type { BrushSettings } from "./global";
  import { settings } from "./stores";

  let brush = $settings.brush;
  const update = (e) => {
    console.log(e);
    settings.update((v) => {
      v.brush = brush;
      return v;
    });
  };
</script>

<section>
  <input
    type="range"
    bind:value={brush.size}
    min="1"
    max="10"
    on:change={update}
  />
  <input type="color" bind:value={brush.color} on:change={update} />
</section>

<style>
  section {
    border: solid 1px black;
  }
</style>
