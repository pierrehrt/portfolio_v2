<template>
  <div
    class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
  >
    <div class="lg:flex lg:justify-between lg:gap-4 items-stretch">
      <header
        class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
      >
        <div>
          <Intro />
          <LanguageSwitcher />
          <Navigation />
        </div>
        <Socials />
      </header>

      <main class="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <Experience />
        <Projects />
        <Articles />
        <Footer />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Pierre Huret | Fullstack Developer | Scalable Digital Solutions",
  ogTitle: "Pierre Huret | Fullstack Developer | Scalable Digital Solutions",
  description:
    "I'm Pierre, fullstack developer specializing in creating scalable, efficient, and user-friendly digital solutions. With experience in software development, I offer expertise in developing and managing entire project, including front and backend on web and mobile.",
  ogDescription:
    "I'm Pierre, fullstack developer specializing in creating scalable, efficient, and user-friendly digital solutions. With experience in software development, I offer expertise in developing and managing entire project, including front and backend on web and mobile.",
  ogImage: "/about/pierre.jpeg",
  twitterCard: "summary_large_image",
});
</script>
