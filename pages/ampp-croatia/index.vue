<template>
  <BackToTop />
  <Navigation />

  <div class="ampp_croatia_page">
    <h1>AMPP CROATIA</h1>
    <div class="ampp_croatia_articles_div">
      <NuxtLink :to="article.to" class="ampp_croatia_articles" v-for="(article, index) in articles" :key="index">
        <img :src="article.photo" />
        <h2>{{ article.title }}</h2>
        <p>{{ article.paragraf }}</p>
      </NuxtLink>
    </div>
  </div>

  <Footer />
  <Analytics />
</template>

<script setup>

const articles = [
  {
     photo: "https://a.storyblok.com/f/286902983623857/480x360/b9c0216f68/ampp_croatia_chapter.jpg",
     title: "AMPP Croatia Chapter",
     paragraf: "",
     to: "/ampp-croatia/ampp-croatia-chapter"
   },
  {
     photo: "https://a.storyblok.com/f/286902983623857/480x360/565e6307d0/our_mission.jpg",
     title: "Our Mission",
     paragraf: "",
     to: "/ampp-croatia/our-mission"
   },
  {
     photo: "https://a.storyblok.com/f/286902983623857/480x360/0505aaa9a0/ampp_croatia_board.jpg",
     title: "Board",
     paragraf: "AMPP Awards - Recognizing the best in our industry",
     to: "/ampp-croatia/board"
   },
  {
     photo: "https://a.storyblok.com/f/286902983623857/480x360/4da830ff35/professional_ethics.jpg",
     title: "Professional Ethics",
     paragraf: "",
     to: "/ampp-croatia/professional-ethics"
   },
  {
     photo: "https://a.storyblok.com/f/286902983623857/480x360/b7098180c4/courses_and_certifications.jpg",
     title: "Courses and Certifications",
     paragraf: "",
     to: "/ampp-croatia/courses-and-certifications"
   },
  {
     photo: "https://a.storyblok.com/f/286902983623857/480x360/fcbdd7bb86/awards.jpg",
     title: "Awards",
     paragraf: "AMPP Awards - Recognizing the best in our industry",
     to: "/ampp-croatia/awards"
   },
  {
     photo: "https://a.storyblok.com/f/286902983623857/404x325/2b171c682e/ampp_croatia_croatia.png",
     title: "Members Area",
     paragraf: "",
     to: "/ampp-croatia/members"
   },
];

</script>
