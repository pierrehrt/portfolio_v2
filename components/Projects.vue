<template>
  <section
    id="projects"
    class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Selected projects"
  >
    <div
      class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    >
      <h2
        class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
      >
        Projects
      </h2>
    </div>
    <div>
      <ul class="group/list">
        <li v-for="(doc, index) in Projects.data" :key="index" class="mb-12">
          <ProjectCard
            :title="doc.title"
            :description="doc.description"
            :projecturl="doc.projecturl"
            :imagePath="doc.imagePath"
            :tags="doc.tags"
            :relatedLinks="doc.relatedLinks"
          />
        </li>
      </ul>

      <div class="mt-12">
        <TextLink url="/archive" name="View Full Project Archive" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Projects from "../data/projects.json";
</script>

<style></style>
