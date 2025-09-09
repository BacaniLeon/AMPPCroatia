<template>
  <BackToTop />
  <Navigation />

    <div class="working_groups_text">
      <h1>Working groups</h1>

      <p><span>AMPP Croatia Chapter</span>  is organized into thematic working groups, the objective of which is to promote initiatives both at a national and international level in order to disseminate knowledge in the world of corrosion and its prevention.</p>

      <h2>Participating in the working groups is a great opportunity for technical discussion and meetings between members. </h2>

      <h3>If you wish to collaborate with AMPP Croatia Chapter, you can join one of the working groups already active or propose a new one.
        Don't hesitate to write to us for further details and to find out how to contribute.</h3>
    </div>

    <div class="working_groups_links">
        <div v-for="(group, index) in groups" :key="index" class="working_group_links_articles">
          <NuxtLink class="working_group_links_article" :to="group.to">
            <img class="img__ForHomePage" :src="group.photo" :alt="'cert-' + index" />
            <h2> {{ group.title }}</h2>
            <p> {{ group.paragraf }}</p>
          </NuxtLink>
        </div>
    </div>

  <Footer />
  <Analytics />
</template>

<script setup>

const groups = [
  {
     photo: "https://a.storyblok.com/f/286902983623857/480x360/8cd489ce78/oil_and_gas.jpg",
     title: "Oil & Gas",
     paragraf: "",
     to: "/working-groups/oil-and-gas"
   },
  {
     photo: "https://a.storyblok.com/f/286902983623857/480x360/5bc74782d6/cathodic_protection.jpg",
     title: "Cathordic protection",
     paragraf: "",
     to: "/working-groups/cathordic-protection"
   },
  {
     photo: "https://a.storyblok.com/f/286902983623857/480x360/d784ca7b8f/coating.jpg",
     title: "Coating",
     paragraf: "",
     to: "/working-groups/coating"
   },

];

</script>
