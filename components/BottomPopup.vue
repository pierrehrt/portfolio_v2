<template>
  <transition name="slide-up">
    <a
      v-if="isVisible"
      class="fixed bottom-5 left-10 z-50 flex flex-col gap-1 rounded-lg bg-slate-800/50 p-4 backdrop-blur max-w-[350px]"
      :href="url"
      target="_blank"
      aria-label="View article (opens in a new tab)"
    >
      <button @click.stop.prevent="closePopup" class="self-end">
        <CrossIcon class="cursor-pointer text-white" />
      </button>
      <NuxtImg :src="img" class="rounded-md" />
      <h3 class="text-slate-400 text-s">{{ name }}</h3>
      <p class="text-slate-200 text-xs">{{ description }}</p>
    </a>
  </transition>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import CrossIcon from "~/assets/icons/cross.svg";

defineProps<{
  name: string;
  description: string;
  img: string;
  url: string;
}>();

const isVisible = ref(false);

const closePopup = () => {
  isVisible.value = false;
};

onMounted(() => {
  // Delay to simulate slide up after the page loads
  setTimeout(() => {
    isVisible.value = true;
  }, 500);
});
</script>

<style scoped>
/* Slide-up and slide-down animation */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}
.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.slide-up-enter-to {
  transform: translateY(0%);
  opacity: 1;
}
.slide-up-leave-from {
  transform: translateY(0%);
  opacity: 1;
}
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
