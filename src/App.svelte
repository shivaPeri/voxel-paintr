<script lang="ts">
  import BrushSettings from "./BrushSettings.svelte";
  import Viewport from "./Viewport.svelte";
</script>

<section>
  <h1>voxel paintr</h1>
  <div>here is a heading</div>
  <Viewport w={800} h={600} />
  <BrushSettings />
</section>

<style>
  section {
    display: grid;
    gap: 20px;
  }
</style>
