<template>
  <BackToTop />
  <Navigation />

  <div class="oil_and_gas_intro_banner">
          <div class="slide-inner">
            <img class="img__ForHomePage" src="https://a.storyblok.com/f/286902983623857/1600x600/92241f1978/oil-and-gas-wide.jpg"/>
            <h1>Oil & Gas, Chemical and Process Industry</h1>
          </div>
  </div>

      <div class="oil_and_gas_photos_and_text">
          <div class="oil_and_gas_photos">
            <div class="vanishing_text">
              <img src="https://a.storyblok.com/f/286902983623857/990x560/5f24b86dab/corrosion_pipe.jpg"/>
              <p>Corrosion in the crude piping</p>
            </div>

            <div class="vanishing_text">
              <img src="https://a.storyblok.com/f/286902983623857/990x560/677ad1bf8b/corrosion_water_pipe.jpg"/>
              <p>Corrosion in the cooling water pipe</p>
            </div>

            <div class="vanishing_text">
              <img src="https://a.storyblok.com/f/286902983623857/990x560/18e181cd51/corrosion_crude_tank.jpg"/>
              <p>Corrosion Crude tank</p>
            </div>
  
          </div>
          <div class="oil_and_gas_text">
              <h2>Contact Marco De Marco</h2>

              <h3>The “Oil&Gas Working Group, Chemical and Process Industry” is one of the historical groups of AMPP Croatia Chapter, established to study and discuss issues of specific interest.</h3>

              <p>In this context, the periodic organization by the WG of study days (workshops) with interventions by representatives of Industry and the academic world – also through active discussions in round tables - undoubtedly represents the most effective tool for a first constructive approach and shared in the fight against corrosion and in the study of corrosion engineering (interpretation, mitigation and monitoring of corrosion phenomena).</p>

              <p>Noting that corrosion-related “failure” events account for more than 25% of failures experienced in the petroleum and process chemistry industries, the multiple environmental conditions present require appropriate material choice as well as appropriate corrosion mitigation and control measures.</p>

              <p>Corrosion can impose significant additional costs associated with choosing more expensive materials at the design stage, and, no less, its onset in service can have environmental and health & safety implications.</p>

              <p>Nowadays, many of the constituent figures of the workforce in Industry, from management to operators through maintenance, inspection, process and investment technicians should be involved, each for their level of skills and responsibility, in corrosion management.</p>
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
     class: "oil_and_gas_links_div",
     background: "https://a.storyblok.com/f/286902983623857/480x270/1bc820e585/course_calendar.jpg",
     paragraf: "In Croatia",
     button_text: "INFO & RECORDINGS"
   },
  {
     title: "Calendar of all AMPP courses",
     to: "https://www.ampp.org/education/education-resources/courses-by-program/general-corrosion/ethics-for-the-corrosion-professional",
     class: "oil_and_gas_links_div_2nd",
     background: "https://a.storyblok.com/f/286902983623857/480x270/4620cb4aec/all_courses.jpg",
     paragraf: "In the world",
     button_text: "SEARCH"
   },
   {
     title: "Search for certified professionals",
     to: "https://nace.useclarus.com/view/verify",
     class: "oil_and_gas_links_div",
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
