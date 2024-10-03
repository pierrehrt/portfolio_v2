<template>
  <nav class="nav hidden lg:block">
    <ul class="mt-16 w-max">
      <li class="gap-4 flex flex-col">
        <a
          v-for="(section, index) in sections"
          :key="index"
          :href="section.anchor"
          :class="['group', { active: activeSection === section.anchor }]"
        >
          <span
            class="inline-block nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
          ></span>
          <span
            class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
          >
            {{ section.name }}
          </span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const sections = ref([
  { name: "About", anchor: "#about" },
  { name: "Experience", anchor: "#experience" },
  { name: "Projects", anchor: "#projects" },
  { name: "Articles", anchor: "#articles" },
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
</script>


<style>
.active .nav-text {
  --tw-text-opacity: 1;
  color: rgb(226 232 240 / var(--tw-text-opacity));
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
}
.active .nav-indicator {
  width: 4rem;
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity));
}
</style>
