<script lang="ts">
  import { onMount } from "svelte";

  import {
    Canvas,
    Scene,
    PerspectiveCamera,
    DirectionalLight,
    AmbientLight,
    BoxBufferGeometry,
    Mesh,
    MeshStandardMaterial,
    WebGLRenderer,
    OrbitControls,
    Raycaster,
    GridHelper,
  } from "svelthree";
  import { settings } from "./stores";
  import { Str2Hex } from "./utils";

  export let w = window.innerWidth;
  export let h = window.innerHeight;
  let color = 0xff3e00;

  $: color = Str2Hex($settings.brush.color);

  export let cubeGeometry = new BoxBufferGeometry(1, 1, 1);
  export let cubeMaterial = new MeshStandardMaterial();

  let grid = new GridHelper(100, 10);
  onMount(() => {
    let temp = document.getElementById("scene1");
    console.log(grid, temp);
  });
</script>

<Canvas let:sti {w} {h}>
  <Scene {sti} let:scene id="scene1" props={{ background: 0xedf2f7 }}>
    <PerspectiveCamera
      {scene}
      id="cam1"
      pos={[100, 100, 100]}
      lookAt={[0, 0, 0]}
    />
    <AmbientLight {scene} intensity={1.25} />
    <DirectionalLight {scene} pos={[3, 3, 3]} />

    {#each { length: 10 } as _, i}
      {#each { length: 10 } as _, j}
        <Mesh
          {scene}
          geometry={cubeGeometry}
          material={cubeMaterial}
          mat={{
            roughness: 0.5,
            metalness: 0.5,
            color: color,
          }}
          pos={[i * 20, 0, j * 10]}
          rot={[0, 0, 0]}
          scale={[1, 1, 1]}
          onClick={(e) => console.log(e)}
        />
      {/each}
    {/each}

    <OrbitControls {scene} enableDamping />
  </Scene>

  <WebGLRenderer
    {sti}
    sceneId="scene1"
    camId="cam1"
    config={{ antialias: true, alpha: true }}
  />
</Canvas>
