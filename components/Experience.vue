<template>
  <section
    id="experience"
    class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Experience"
  >
    <div
      class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    >
      <h2
        class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
      >
        Experience
      </h2>
    </div>
    <div>
      <ol class="group/list">
        <li v-for="(doc, index) in Experience.data" :key="index" class="mb-12">
          <ExperienceCard
            :title="doc.title"
            :description="doc.description"
            :companyName="doc.companyName"
            :companyUrl="doc.companyUrl"
            :startYear="doc.startYear"
            :endYear="doc.endYear"
            :tags="doc.tags"
            :position="doc.position"
            :relatedLinks="doc.relatedLinks"
          />
        </li>
      </ol>
      <TextLink url="/pdf/resume.pdf" name="View Full Résumé" />
    </div>
  </section>
</template>

<script>
import Experience from "../data/experience.json";
export default {
  data() {
    return {
      Experience,
    };
  },
};
</script>
