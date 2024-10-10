<template>
  <div class="flex lg:fixed z-20 lg:left-4 lg:top-1/2 lg:transform lg:-translate-y-1/2">
    <ul
      class="mt-8 border border-slate-700/50 p-[6px] rounded-lg flex lg:flex-col items-center gap-[6px]"
    >
      <li
        v-for="(social, index) in socials"
        :key="index"
        class="text-xs shrink-0"
      >
        <NuxtLink
          :to="social.url"
          target="_blank"
          class="block hover:text-slate-200 hover:bg-slate-800/50 p-3 rounded-md"
        >
          <component
            :is="icons[social.icon]"
            :class="social.icon === 'X' ? 'h-4 w-4' : 'h-5 w-5'"
            :fontControlled="false"
          />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import socialsData from "../data/socials.json";
import Github from "~/assets/icons/github.svg";
import Instagram from "~/assets/icons/instagram.svg";
import Linkedin from "~/assets/icons/linkedin.svg";
import X from "~/assets/icons/x.svg";

// Define the interface for social data
interface Social {
  name: string;
  url: string;
  icon: string;
}

// Load the JSON data
const socials: Social[] = socialsData.data;

// Map icon names to components
const icons: Record<string, any> = {
  Github,
  Instagram,
  Linkedin,
  X,
};
</script>
