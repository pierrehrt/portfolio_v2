<template>
  <nav
    class="fixed z-40 bottom-4 left-1/2 transform -translate-x-1/2 sm:block hidden"
  >
    <div
      class="border border-slate-700/50 flex p-[7px] rounded-lg gap-1.5 bg-nav/80 backdrop-blur"
    >
      <div
        class="py-2 px-6 rounded-lg flex items-center bg-slate-800/50 flex justify-stretch items-center"
      >
        <p class="text-white text-xl">P.</p>
      </div>
      <ul class="w-max p-[7px] rounded-lg flex items-center gap-[7px] bg-bg">
        <li class="gap-[7px] flex">
          <a
            v-for="(section, index) in sections"
            :key="index"
            :href="section.anchor"
            :class="[
              'group border nav-box border-slate-700/50 py-3 px-4 rounded-md hover:border-slate-500 transition-all',
              { active: activeSection === section.anchor },
            ]"
          >
            <span
              class="nav-text whitespace-nowrap text-xs uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
            >
              {{ section.name }}
            </span>
          </a>
        </li>
      </ul>

      <a
        class="nav-text text-xs font-bold uppercase text-white whitespace-nowrap p-1 rounded-lg flex items-center py-2 px-4 bg-slate-800/50 hover:bg-teal-400/80 transition-all"
        href="mailto:pierrehuret79@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Send an email (opens in a new tab)"
      >
        Email Me</a
      >
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
const { t, locale } = useI18n();

const sections = ref([
  { name: t("about"), anchor: "#about" },
  { name: t("experience"), anchor: "#experience" },
  { name: t("projects"), anchor: "#projects" },
  { name: t("articles"), anchor: "#articles" },
]);

const activeSection = ref("");

const handleScroll = () => {
  let sectionInView = "";
  sections.value.forEach((section) => {
    const sectionElement = document.querySelector(section.anchor);
    if (sectionElement) {
      const rect = sectionElement.getBoundingClientRect();
      // Check if the section top has passed the top of the screen
      if (rect.top <= 0 && rect.bottom > 0) {
        sectionInView = section.anchor;
      }
    }
  });
  activeSection.value = sectionInView;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initialize active class on page load
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
watch(locale, () => {
  sections.value = [
    { name: t("about"), anchor: "#about" },
    { name: t("experience"), anchor: "#experience" },
    { name: t("projects"), anchor: "#projects" },
    { name: t("articles"), anchor: "#articles" },
  ];
});
</script>

<style>
.active .nav-text {
  --tw-text-opacity: 1;
  color: rgb(226 232 240 / var(--tw-text-opacity));
  border-color: rgb(226 232 240 / var(--tw-text-opacity));
}
.active.nav-box {
  --tw-text-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-text-opacity));
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
}
</style>
