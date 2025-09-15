<template>
  <BackToTop />
  <Navigation />

  <div class="professional_ethics_intro_banner">
          <div class="slide-inner">
            <img class="img__ForHomePage" src="https://a.storyblok.com/f/286902983623857/1600x600/3e9689c3c8/professional_ethics_withtext.jpg"/>
             <h1>Professional Ethics</h1>
          </div>
  </div>

    <div class="professiona_ethics_text">
    
      <h2>In recent years, AMPP has raised great awareness of the professional code of ethics, i.e. the responsibilities of ethical-social behavior as well as the principles that individual inspectors must adhere to during their work activity.</h2>

      <h3>On the subject, the following were created</h3>

      <p>
      <img src="https://a.storyblok.com/f/286902983623857/512x512/d2f0928209/check-mark.png" />
      a course, which is mandatory for those who need to renew or request a new certification, but is dedicated to everyone.</p>

      <p>
      <img src="https://a.storyblok.com/f/286902983623857/512x512/d2f0928209/check-mark.png" />
      a committee made up of 11 professional members, to whom it is possible to send complaints about incorrect behavior or professional practices.</p>

      <h4>Below you will find all the links on the topic.</h4>
    </div>

  <div class="links_to_the_topic">
      <NuxtLink :to="link.to" v-for="(link,index) in links" :key="index"  class="links_to_the_topic_div">
        <h2>{{ link.title }}</h2>
      </NuxtLink>
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
     photo: "https://a.storyblok.com/f/286902983623857/480x360/b7098180c4/courses_and_certifications.jpg",
     title: "Courses and Certifications",
     paragraf: "",
     to: "/ampp-croatia/courses-and-certifications"
   },
];

const links = [
  {
     title: "Complaint form and ethics committee",
     to: "https://www.ampp.org/resources/ethics-and-professional-practice"
   },
  {
     title: "Professional Ethics Course",
     to: "https://www.ampp.org/education/education-resources/courses-by-program/general-corrosion/ethics-for-the-corrosion-professional"
   },
   {
     title: "Summary Code of Ethics",
     to: "https://higherlogicdownload.s3.amazonaws.com/NACE/cedda8a4-c3c0-4583-b1b6-3b248e6eb1f2/UploadedImages/Membership/pdf/Code-of-Ethics.pdf"
   },
   {
     title: "Information Code of Ethics AMPP",
     to: "https://www.ampp.org/about/about-ampp/ampp-bylaws-and-governance"
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
