<template>
  <div>
    <ul class="ml-1 mt-8 flex items-center">
      <li class="mr-5 text-xs shrink-0">
        <NuxtLink to="https://github.com/pierrehrt" target="_blank" class="block hover:text-slate-200">
          <Github class="h-6 w-6" :fontControlled="false" />
        </NuxtLink>
      </li>
      <li class="mr-5 text-xs shrink-0">
        <NuxtLink to="https://www.linkedin.com/in/pierrehuret/" target="_blank" class="block hover:text-slate-200">
          <Linkedin class="h-6 w-6" :fontControlled="false" />
        </NuxtLink>
      </li>
      <li class="mr-5 text-xs shrink-0">
        <NuxtLink to="https://www.instagram.com/pierreehrt/" target="_blank" class="block hover:text-slate-200">
          <Instagram class="h-6 w-6" :fontControlled="false" />
        </NuxtLink>
      </li>
      <li class="mr-5 text-xs shrink-0">
        <NuxtLink to="https://x.com/Pierre_Hrt" target="_blank" class="block hover:text-slate-200">
          <X class="h-5 w-5" :fontControlled="false" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Github from "~/assets/icons/github.svg";
import Instagram from "~/assets/icons/instagram.svg";
import Linkedin from "~/assets/icons/linkedin.svg";
import X from "~/assets/icons/x.svg";
</script>
