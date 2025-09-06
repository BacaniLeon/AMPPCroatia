<template>
  <BackToTop />
  <Navigation />


  <div class="paragraphs_under_intro_banner">
    <div class="welcome_to_ampp">
      <h2>Welcome to AMPP CROATIA CHAPTER</h2>
      <p><span style="color: #ee2737;">AMPP Croatia Chapter</span> it is a non-profit association of professionals who operate within Croatian territory with the aim of promoting the protection and performance of materials. AMPP Croatia Chapter represents the Croatian expression of an international reality AMPP Association for Materials Protection and Performance, based in Houston Texas and affiliated offices around the world. AMPP is the largest global community of corrosion and coating experts.</p>
      <NuxtLink to="/" class="find_out_more_button">Find out more</NuxtLink>
    </div>
    <div class="our_mission">
      <h2>Our Mission</h2>
      <p>Protect and safeguard assets through education, certification, accreditation, innovation and standardization. We work to ensure that our members have access to the best resources available in the field of material and performance protection, helping to strengthen professional skills and promote best practices in the sector.</p>
      <NuxtLink to="/" class="find_out_more_button">Find out more</NuxtLink>
    </div>
  </div>

  <div class="board_and_student_chapter_pictures">
    <div class="board">
      <h1>BOARD</h1>
      <p>Extending knowledge about corrosion and its prevention, attracting the attention of those with an education...</p>
      <NuxtLink to="/" class="find_out_more_button">See more</NuxtLink>
    </div>

    <div class="student_chapter">
      <h1>STUDENT CHAPTER</h1>
      <NuxtLink to="/" class="find_out_more_button">See more</NuxtLink>
    </div>
  </div>
  <button class="find_out_more_button_decoration">Find out more</button>
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

const photos = [
  { url: "https://a.storyblok.com/f/286902983623857/1600x600/9f18d0ea37/banner_photo1.jpg" },
  { url: "https://a.storyblok.com/f/286902983623857/1600x600/527acd0d1d/banner_photo2.jpg" },
];

const seeMore = [
  {
     url: "https://a.storyblok.com/f/286902983623857/480x270/479e1a5bb5/sponsor.jpg",
     title: "Sponsor & Exhibitors Prospectus",
     paragraf: "4th Conference & Expo - Genoa 2026",
     to: "/link"
   },
  { 
    url: "https://a.storyblok.com/f/286902983623857/480x270/ba640a0ff3/exhibiting.jpg",
    title: "Who's Exhibiting?",
    paragraf: "Take a closer look at the top players showing their solutions.",
    to: "/link2"
  },
  { 
    url: "https://a.storyblok.com/f/286902983623857/480x270/1253216aec/meetoursponsors.jpg",
    title: "Meet Our Sponsor",
    paragraf: "Discover the partners powering this event",
    to: "/link3"
  },
  { 
    url: "https://a.storyblok.com/f/286902983623857/480x270/7a1d277804/abstractt.jpg",
    title: "Call for Abstract",
    paragraf: "",
    to: "/link4"
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
};
</script>
