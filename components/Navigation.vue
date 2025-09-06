<template>
    <nav :class="[{navBar__MobileMenu: menuHidden}, 'navBar']">
    <div class="img_div">
        <NuxtLink to="/" class="navBar__LogoLink" no-prefetch><img src="https://a.storyblok.com/f/286902983623857/1210x150/7bd62dc0e0/logo.png" class="LogoLink"></NuxtLink>
        <div class="social_media_images">
        <NuxtLink to="/" class="navBar__LogoLink" no-prefetch><img src="https://a.storyblok.com/f/286902983623857/512x512/6ff0c7dfa7/instagram.png" class="social_media_image"></NuxtLink>
        <NuxtLink to="/" class="navBar__LogoLink" no-prefetch><img src="https://a.storyblok.com/f/286902983623857/512x512/e69cebdcba/linkedin.png" class="social_media_image"></NuxtLink>
        </div>
        <img src="https://a.storyblok.com/f/286902983623857/512x512/7de781c235/menu.png" class="navBar__Menu" @click="showMenu">
    </div>
        <ul>
            <li class="dropdown">
                <div style="display: flex">
                <NuxtLink to="/ampp-croatia" @click="changeOverflow()" no-prefetch>AMPP CROATIA</NuxtLink>
                <span class="dropdown-toggle">▼</span>
                </div>
                
                <ul class="dropdown-menu">
                <li><NuxtLink to="/ampp-croatia/ampp-croatia-chapter">AMPP Croatia Chapter</NuxtLink></li>
                <li><NuxtLink to="/ampp-croatia/our-mission">Our Mission</NuxtLink></li>
                <li><NuxtLink to="/ampp-croatia/board">Board</NuxtLink></li>
                <li><NuxtLink to="/ampp-croatia/professional-ethics">Professional Ethics</NuxtLink></li>
                <li><NuxtLink to="/ampp-croatia/courses-and-certifications">Courses and Certifications</NuxtLink></li>
                <li><NuxtLink to="/ampp-croatia/awards">Awards</NuxtLink></li>
                <li><NuxtLink to="/ampp-croatia/members">Members Area</NuxtLink></li>
                </ul>
            </li>

            <li class="dropdown">
                <div style="display: flex">
                    <NuxtLink to="/" @click="changeOverflow()" no-prefetch>WORKING GROUPS</NuxtLink>
                    <span class="dropdown-toggle">▼</span>
                </div>
                <ul class="dropdown-menu">
                <li><NuxtLink to="/">Oil & Gas</NuxtLink></li>
                <li><NuxtLink to="/">Cathodic Protection</NuxtLink></li>
                <li><NuxtLink to="/">Retiring</NuxtLink></li>
                </ul>
            </li>

            <li class="dropdown">
                <div style="display: flex">
                    <NuxtLink to="/" @click="changeOverflow()" no-prefetch>WORKSHOP AND FAIRS</NuxtLink>
                    <span class="dropdown-toggle">▼</span>
                </div>
                <ul class="dropdown-menu">
                <li><NuxtLink to="/">2026</NuxtLink></li>
                </ul>
            </li>

            <li class="dropdown">
                <NuxtLink to="/" @click="changeOverflow()" no-prefetch>FUNDED RESEARCH</NuxtLink>
            </li>

            <li class="dropdown">
                <NuxtLink to="/" @click="changeOverflow()" no-prefetch>COMMUNICATIONS</NuxtLink>
            </li>

            <li class="dropdown">
                <NuxtLink to="/" @click="changeOverflow()" no-prefetch>STUDENT</NuxtLink>
            </li>

            <li class="dropdown">
                <NuxtLink to="/" @click="changeOverflow()" no-prefetch>AMPP</NuxtLink>
            </li>

            <li class="dropdown">
                <div style="display: flex">
                <NuxtLink to="/" @click="changeOverflow()" no-prefetch>CONFERENCES & EXPO</NuxtLink>
                <span class="dropdown-toggle">▼</span>
                </div>
                <ul class="dropdown-menu">
                <li><NuxtLink to="/">2025</NuxtLink></li>
                </ul>
            </li>

            <li class="dropdown">
                <NuxtLink to="/" @click="changeOverflow()" no-prefetch>CONTACTS</NuxtLink>
            </li>
        </ul>
    </nav>
  </template>
  
  <script setup>

  const menuHidden = ref(false);
  const showMenu = computed(() => {
   menuHidden.value=!menuHidden.value;
   if(menuHidden.value===true){
    var htmlElement = document.querySelector("html");
    htmlElement.style.overflow="hidden";
   }
   if(menuHidden.value===false){
    var htmlElement = document.querySelector("html");
    htmlElement.style.overflow="visible";
   }
  })
  
  function changeOverflow(){
    var htmlElement = document.querySelector("html");
    htmlElement.style.overflow='visible';
  }
    
const openDropdown = ref(null)

function toggleDropdown(index) {
  if (openDropdown.value === index) {
    openDropdown.value = null
  } else {
    openDropdown.value = index
  }
}
    
  </script>
  