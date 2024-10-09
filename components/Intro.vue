<template>
  <div>
    <NuxtImg
      src="/about/pierre.jpeg"
      height="100"
      width="100"
      alt="Pierre Huret"
      class="rounded-full border mb-4"
    />
    <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
      Pierre Huret
    </h1>
    <h2
      class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl"
    >
      {{ $t("introH2") }}
    </h2>
    <p class="mt-4 max-w-xs leading-normal text">
      {{ $t("introDesc") }}
    </p>
  </div>
</template>

<script lang="ts" setup></script>

<style lang=""></style>
