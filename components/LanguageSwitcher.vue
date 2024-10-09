<template>
  <nav class="flex mt-6">
    <div
      class="border border-slate-700/50 p-1.5 rounded-lg flex items-center gap-1"
    >
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
const { locale, locales, setLocale } = useI18n();
</script>
