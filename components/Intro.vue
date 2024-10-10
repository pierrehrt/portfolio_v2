<template>
  <div>
    <NuxtImg
      src="/about/pierre.jpeg"
      alt="Pierre Huret"
      class="rounded-full border mb-4 2xl:h-[100px] 2xl:w-[100px] h-[80px] w-[80px] object-cover"
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
    <div class="flex gap-4 mt-5">
      <RelatedLink link-name="Email me" url="mailto:pierrehuret79@gmail.com" />
      <RelatedLink
        link-name="Schedule a call"
        url="https://cal.com/pierre-hrt/30min"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang=""></style>
