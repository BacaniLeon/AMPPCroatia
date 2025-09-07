<template>
  <BackToTop />
  <Navigation />

  <div class="our-mission_page_text">
    <h1>Our Mission</h1>

    <h2>Protect and safeguard assets through education, certification, accreditation, innovation and standardization.</h2>

    <p>We work to ensure that our members have access to the best resources available in the field of material and performance protection, helping to strengthen professional skills and promote best practices in the sector.</p>

    <h3>We invite you to join our community to help create a safer and more sustainable future!</h3>
  </div> 

  <div class="our_mission_text_and_photo">
    <img src="https://a.storyblok.com/f/286902983623857/480x270/09d96935e5/our_mission_image.jpg"></img>
    <div class="our_mission_text">
      <h2>To help create a safer and more sustainable future</h2>
      <p>We invite you to join our community</p>
      <NuxtLink class="find_out_more_button" to="https://ampp.org/membership/membership-types/individual-membership">JOIN AMPP</NuxtLink>
    </div>
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
            <img class="img__ForHomePage" :src="more.url" :alt="'cert-' + index" />
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

const seeMore = [
  {
     url: "https://a.storyblok.com/f/286902983623857/480x360/b9c0216f68/ampp_croatia_chapter.jpg",
     title: "AMPP Croatia Chapter",
     paragraf: "",
     to: "/ampp-croatia/ampp-croatia-chapter"
   },
  { 
    url: "https://a.storyblok.com/f/286902983623857/480x360/0505aaa9a0/ampp_croatia_board.jpg",
    title: "Board",
    paragraf: "Extend knowledge about corrosion and its prevention, attracting the attention of those with appropriate education and specialization.",
    to: "/ampp-croatia/board"
  },
  { 
    url: "https://a.storyblok.com/f/286902983623857/480x360/4da830ff35/professional_ethics.jpg",
    title: "Professional Ethics",
    paragraf: "Discover the partners powering this event",
    to: "/ampp-croatia/professiona-ethics"
  },
  { 
    url: "https://a.storyblok.com/f/286902983623857/480x360/b7098180c4/courses_and_certifications.jpg",
    title: "Courses and Certifications",
    paragraf: "",
    to: "/ampp-croatia/courses-and-certifications"
  },
];

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
