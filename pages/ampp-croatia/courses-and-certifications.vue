<template>
  <BackToTop />
  <Navigation />

  <div class="courses_and_certifications_intro_banner">
          <div class="slide-inner">
            <img class="img__ForHomePage" src="https://a.storyblok.com/f/286902983623857/1600x600/fa1457e9ca/courses_and_certifications.jpg"/>
                <h1>AMPP - Courses and Certifications</h1>
          </div>
  </div>

    <div class="courses_and_certifications_text">
      <p>AMPP has developed several courses on what corrosion is, how to prevent it through choice of materials, cathodic protection and protective coatings (coating).</p>

      <p>The courses are aimed at different industrial sectors such as <span> Naval </span>, <span> Oil&Gas </span>, <span> Civil </span>, <span> Nuclear </span>, etc.</p>

      <p>
      It is possible to consult all the courses on the following page on the AMPP website <NuxtLink to="https://www.ampp.org/education/education-resources/courses-by-program">(see)</NuxtLink></p>

      <p>In Croatia AMPP has stipulated an exclusive contract for training courses with IMC engineering srl; for any request for information on AMPP courses in Croatia please contact the <NuxtLink to="/contact">IMC training (click here)</NuxtLink></p>
    </div>

    <div class="courses_and_certifications_links_separator">
      <div class="courses_and_certifications_links" v-for="(link,index) in links"       :key="index" >
          <div :class="link.class">
          <NuxtLink :to="link.to" class="courses_and_certifications_links_link">
          <img :src="link.background">
          </NuxtLink>
          <div class="courses_and_certifications_links_text">
          <h2>{{ link.title }}</h2>
          <p>{{ link.paragraf }}</p>
          <NuxtLink :to="link.to" class="courses_and_certifications_find_out_more_button">{{ link.button_text }}</NuxtLink>
          </div>
          </div>
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

const seeMore = [
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
     paragraf: "Extend knowledge about corrosion and its prevention, attracting the attention of those with appropriate education and specialization.",
     to: "/ampp-croatia/board"
   },
  {
     photo: "https://a.storyblok.com/f/286902983623857/480x360/4da830ff35/professional_ethics.jpg",
     title: "Professional Ethics",
     paragraf: "",
     to: "/ampp-croatia/professional-ethics"
   },
];

const links = [
  {
     title: "2025 course calendar",
     to: "https://www.imc-quorum.com/easyNews/NewsLeggi.asp?NewsID=25",
     class: "courses_and_certifications_links_div",
     background: "https://a.storyblok.com/f/286902983623857/480x270/1bc820e585/course_calendar.jpg",
     paragraf: "In Croatia",
     button_text: "INFO & RECORDINGS"
   },
  {
     title: "Calendar of all AMPP courses",
     to: "https://www.ampp.org/education/education-resources/courses-by-program/general-corrosion/ethics-for-the-corrosion-professional",
     class: "courses_and_certifications_links_div_2nd",
     background: "https://a.storyblok.com/f/286902983623857/480x270/4620cb4aec/all_courses.jpg",
     paragraf: "In the world",
     button_text: "SEARCH"
   },
   {
     title: "Search for certified professionals",
     to: "https://nace.useclarus.com/view/verify",
     class: "courses_and_certifications_links_div",
     background: "https://a.storyblok.com/f/286902983623857/480x270/5f179174cd/certified_professionals.jpg",
     paragraf: "If you are looking for certified people for a project or want to verify its certifications",
     button_text: "LOOK FOR IT HERE"
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
