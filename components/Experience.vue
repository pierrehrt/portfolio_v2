<template>
  <section
    id="experience"
    class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Experience"
  >
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
