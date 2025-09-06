<template>
  <nav :class="[{ navBar__MobileMenu: menuHidden }, 'navBar']">
    <div class="img_div">
      <NuxtLink to="/" class="navBar__LogoLink" no-prefetch>
        <img src="https://a.storyblok.com/f/286902983623857/1210x150/7bd62dc0e0/logo.png" class="LogoLink">
      </NuxtLink>

      <div class="social_media_images">
        <NuxtLink to="/" no-prefetch>
          <img src="https://a.storyblok.com/f/286902983623857/512x512/6ff0c7dfa7/instagram.png" class="social_media_image">
        </NuxtLink>
        <NuxtLink to="/" no-prefetch>
          <img src="https://a.storyblok.com/f/286902983623857/512x512/e69cebdcba/linkedin.png" class="social_media_image">
        </NuxtLink>
      </div>

      <img src="https://a.storyblok.com/f/286902983623857/512x512/7de781c235/menu.png" class="navBar__Menu" @click="showMenu">
    </div>

    <ul>
      <!-- AMPP CROATIA -->
      <li class="dropdown">
        <div style="display: flex">
          <NuxtLink to="/ampp-croatia" @click="changeOverflow()" no-prefetch>AMPP CROATIA</NuxtLink>
          <span class="dropdown-toggle" @click="toggleDropdown(1)">▼</span>
        </div>
        <ul class="dropdown-menu" :class="{ open: openDropdown === 1 }">
          <li><NuxtLink to="/ampp-croatia/ampp-croatia-chapter" @click="changeOverflow()">AMPP Croatia Chapter</NuxtLink></li>
          <li><NuxtLink to="/ampp-croatia/our-mission"
          @click="changeOverflow()">Our Mission</NuxtLink></li>
          <li><NuxtLink to="/ampp-croatia/board" 
          @click="changeOverflow()">Board</NuxtLink></li>
          <li><NuxtLink to="/ampp-croatia/professional-ethics" @click="changeOverflow()">Professional Ethics</NuxtLink></li>
          <li><NuxtLink to="/ampp-croatia/courses-and-certifications" @click="changeOverflow()">Courses and Certifications</NuxtLink></li>
          <li><NuxtLink to="/ampp-croatia/awards"
          @click="changeOverflow()">Awards</NuxtLink></li>
          <li><NuxtLink to="/ampp-croatia/members"
          @click="changeOverflow()">Members Area</NuxtLink></li>
        </ul>
      </li>

      <!-- WORKING GROUPS -->
      <li class="dropdown">
        <div style="display: flex">
          <NuxtLink to="/" @click="changeOverflow()" no-prefetch>WORKING GROUPS</NuxtLink>
          <span class="dropdown-toggle" @click="toggleDropdown(2)">▼</span>
        </div>
        <ul class="dropdown-menu" :class="{ open: openDropdown === 2 }">
          <li><NuxtLink to="/" @click="changeOverflow()">Oil & Gas</NuxtLink></li>
          <li><NuxtLink to="/" @click="changeOverflow()">Cathodic Protection</NuxtLink></li>
          <li><NuxtLink to="/" @click="changeOverflow()">Retiring</NuxtLink></li>
        </ul>
      </li>

      <!-- WORKSHOP AND FAIRS -->
      <li class="dropdown">
        <div style="display: flex">
          <NuxtLink to="/" @click="changeOverflow()" no-prefetch>WORKSHOP AND FAIRS</NuxtLink>
          <span class="dropdown-toggle" @click="toggleDropdown(3)">▼</span>
        </div>
        <ul class="dropdown-menu" :class="{ open: openDropdown === 3 }">
          <li><NuxtLink to="/" @click="changeOverflow()">2026</NuxtLink></li>
        </ul>
      </li>

      <!-- FUNDED RESEARCH -->
      <li class="dropdown">
        <NuxtLink to="/" @click="changeOverflow()" no-prefetch>FUNDED RESEARCH</NuxtLink>
      </li>

      <!-- COMMUNICATIONS -->
      <li class="dropdown">
        <NuxtLink to="/" @click="changeOverflow()" no-prefetch>COMMUNICATIONS</NuxtLink>
      </li>

      <!-- STUDENT -->
      <li class="dropdown">
        <NuxtLink to="/" @click="changeOverflow()" no-prefetch>STUDENT</NuxtLink>
      </li>

      <!-- AMPP -->
      <li class="dropdown">
        <NuxtLink to="/" @click="changeOverflow()" no-prefetch>AMPP</NuxtLink>
      </li>

      <!-- CONFERENCES & EXPO -->
      <li class="dropdown">
        <div style="display: flex">
          <NuxtLink to="/" @click="changeOverflow()" no-prefetch>CONFERENCES & EXPO</NuxtLink>
          <span class="dropdown-toggle" @click="toggleDropdown(4)">▼</span>
        </div>
        <ul class="dropdown-menu" :class="{ open: openDropdown === 4 }">
          <li><NuxtLink to="/" @click="changeOverflow()">2025</NuxtLink></li>
        </ul>
      </li>

      <!-- CONTACTS -->
      <li class="dropdown">
        <NuxtLink to="/" @click="changeOverflow()" no-prefetch>CONTACTS</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuHidden = ref(false)
const openDropdown = ref(null)

const showMenu = () => {
  menuHidden.value = !menuHidden.value
  const htmlElement = document.querySelector("html")
  htmlElement.style.overflow = menuHidden.value ? "hidden" : "visible"
}

function changeOverflow() {
  document.querySelector("html").style.overflow = "visible"
}

function toggleDropdown(index) {
  openDropdown.value = openDropdown.value === index ? null : index
}
</script>

<style scoped>
.dropdown-menu {
  display: none;
  flex-direction: column;
}

.dropdown-menu.open {
  display: flex;
}
</style>
