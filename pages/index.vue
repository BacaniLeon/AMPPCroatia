<template>
  <BackToTop />
  <Navigation />

  <div class="intro_banner">
    <div class="splideDiv">
      <Splide
        :options="splideOptions"
        aria-label="Homepage Banner"
      >
        <SplideSlide v-for="(photo, index) in photos" :key="index">
          <div class="slide-inner">
            <img class="img__ForHomePage" :src="photo.url" :alt="'cert-' + index" />
          </div>
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
</script>
