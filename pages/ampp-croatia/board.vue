<template>
  <BackToTop />
  <Navigation />

  <div class="board_page_text">
    <h1>Board</h1>

    <h2>AMPP Croatia Chapter is an organization led by its members, directed by a board responsible for guiding the association and ensuring that the needs of members and industry are met and for supporting and supervising the execution of the various initiatives.</h2>

    <p>The board positions are elected by the AMPP members who are part of the AMPP Italy Chapter.</p>

    <p>The board in office for this year consists of the following members:</p>
  </div> 

  <div class="board_members_div">
    <div class="board_members" v-for="(board_member, index) in board_members" :key="index">
    <img :src="board_member.photo" />
    <h2>{{ board_member.title }}</h2>
    <h1>{{ board_member.name }}</h1>
    <p>{{ board_member.city }}</p>
    <NuxtLink :to="board_member.to" class="find_out_more_button">{{ board_member.company }}</NuxtLink>
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
    url: "https://a.storyblok.com/f/286902983623857/480x360/565e6307d0/our_mission.jpg",
    title: "Our Mission",
    paragraf: "",
    to: "/ampp-croatia/our-mission"
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

const board_members = [
  {
     photo: "https://a.storyblok.com/f/286902983623857/404x325/2b171c682e/ampp_croatia_croatia.png",
     title: "Chairman",
     name: "John Doe",
     city: "Zagreb",
     to: "https://www.eninco-engineering.hr",
     company: "Eninco Engineering"
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
