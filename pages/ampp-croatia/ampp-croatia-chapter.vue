<template>
  <BackToTop />
  <Navigation />

  <div class="ampp_croatia_chapter_intro_banner">
          <div class="slide-inner">
            <img class="img__ForHomePage" src="https://a.storyblok.com/f/286902983623857/1600x600/527acd0d1d/banner_photo2.jpg"/>
            <h1>AMPP CROATIA CHAPTER</h1>
          </div>
  </div>

    <div class="ampp_chapter_croatia_text">
      <h2>AMPP Croatia Chapter offers a wide range of opportunities for professional development, networking and recognition in the material protection and performance sector.</h2>

      <p>
      <img src="https://a.storyblok.com/f/286902983623857/24x24/6038bb4dc4/gear.png" />
      It aims to extend knowledge on corrosion and its prevention, attracting the attention of those with adequate education and specialization.</p>

      <p>
      <img src="https://a.storyblok.com/f/286902983623857/24x24/6038bb4dc4/gear.png" />
      Ensure the availability of appropriate courses for all those acting in the field of corrosion and material protection. Provide the means of communication through which corrosion and its prevention can be announced, discussed and published for the common good.</p>

      <p>
      <img src="https://a.storyblok.com/f/286902983623857/24x24/6038bb4dc4/gear.png" />
      Encourage special studies and research in order to determine the causes of corrosion, develop new ones or improve techniques for its prevention.</p>

      <p>
      <img src="https://a.storyblok.com/f/286902983623857/24x24/6038bb4dc4/gear.png" />
      Coordinate studies and research on corrosion problems between technical associations to reduce their development and improve the efficiency of prevention.</p>

      <p>
      <img src="https://a.storyblok.com/f/286902983623857/24x24/6038bb4dc4/gear.png" />
      Promote common techniques, equipment and projects for corrosion control.</p>

      <p>
      <img src="https://a.storyblok.com/f/286902983623857/24x24/6038bb4dc4/gear.png" />
      Encourage collaboration between operators on plants and structures in the joint solution of corrosion problems.</p>
    </div>
  
  <button class="find_out_more_button_decoration">See also</button>
  <div class="find_out_more_banner">
    <div class="splideDiv_see_more">
      <Splide
        :options="splideOptions2"
        aria-label="Homepage Banner"
      >
        <SplideSlide v-for="(more, index) in seeMore" :key="index">
          <NuxtLink class="slide-inner-see_more" :to="more.to">
            <img class="img__ForHomePage" :src="more.photo" :alt="'cert-' + index" />
            <h2> {{ more.title }}</h2>
            <p> {{ more.paragraf }}</p>
          </NuxtLink>
        </SplideSlide>
      </Splide>
    </div>
  </div>

  <Footer />
  <Analytics />
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const photos = [
  { url: "https://a.storyblok.com/f/286902983623857/1600x600/9f18d0ea37/banner_photo1.jpg" },
  { url: "https://a.storyblok.com/f/286902983623857/1600x600/527acd0d1d/banner_photo2.jpg" },
];

const seeMore = [
  {
     photo: "https://a.storyblok.com/f/286902983623857/480x360/13203e5011/ampp.jpg",
     title: "AMPP",
     paragraf: "In March of 2019, NACE International, The Worldwide Corrosion Authority and SSPC",
     to: "/ampp"
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
     paragraf: "Extend knowledge about corrosion and its prevention, attracting the attention of those with appropriate education and specialization.",
     to: "/ampp-croatia/board"
   },
  {
     photo: "https://a.storyblok.com/f/286902983623857/480x360/b7098180c4/courses_and_certifications.jpg",
     title: "Courses and Certifications",
     paragraf: "",
     to: "/ampp-croatia/courses-and-certifications"
   },
];

const splideOptions = {
  type: 'loop',
  perPage: 1,
  autoplay: true,
  interval: 5000,
  pauseOnHover: true,
  pauseOnFocus: true,
  speed: 2000,
  rewind: true,
  arrows: true,
  pagination: true,
};

const splideOptions2 = {
  type: 'loop',
  perPage: 3,
  autoplay: true,
  interval: 5000,
  pauseOnHover: true,
  pauseOnFocus: true,
  speed: 2000,
  rewind: true,
  arrows: false,
  pagination: true,
  breakpoints: {
    768: {
      perPage: 1,
    },
  },
};

</script>
