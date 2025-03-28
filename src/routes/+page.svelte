<script lang="ts">
  import { onMount } from "svelte";

  let { data } = $props();
  let secondsAgo = $state(0);

  const updateSecondsAgo = () => {
    secondsAgo = Math.round(Date.now() / 1000) - data.timeSec;
  };

  onMount(() => {
    updateSecondsAgo();
    const interval = setInterval(updateSecondsAgo, 500);
    return () => clearInterval(interval);
  });
</script>

<div
  class="w-full h-full bg-black text-white flex flex-col justify-center items-center"
>
  <h1 class="text-4xl">hi there hello</h1>
  <h2 class="text-md">
    the server ip address is <span class="text-green">{data.ip}</span>
  </h2>
  <h3 class="text-md">
    this page was rendered <span class="text-green">{secondsAgo}</span> seconds ago
  </h3>
</div>
