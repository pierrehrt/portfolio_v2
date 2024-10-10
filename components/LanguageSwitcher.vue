<template>
  <nav
    class="flex lg:fixed absolute z-20 right-4 top-[20px] lg:top-1/2 lg:transform lg:-translate-y-1/2"
  >
    <div
      class="border border-slate-700/50 p-1.5 rounded-lg flex flex-col items-center gap-1"
    >
      <div class="text-slate-400 p-2">
        <LanguageIcon class="w-5" :fontControlled="false" />
      </div>
      <a
        href="#"
        v-for="localeItem in locales"
        :key="localeItem.code"
        class="px-2.5 py-2.5 z-10 text-xs hover:bg-slate-800/50 rounded-lg cursor-pointer uppercase"
        :class="{
          'text-slate-300 bg-slate-800/50': locale === localeItem.code,
        }"
        @click.prevent.stop="setLocale(localeItem.code)"
        >{{ localeItem.code }}
      </a>
    </div>
  </nav>
</template>

<script setup>
import LanguageIcon from "~/assets/icons/languages.svg";
const { locale, locales, setLocale } = useI18n();
</script>
