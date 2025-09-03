 const rawArticles = [
{
    title: "Performance Comparison: Galvanizing vs. Anti-Corrosive coatings",
    author: "Author: Dr. Arezoo Assarian",
    date: "2.9.2025",
    calendar: "https://a.storyblok.com/f/286878845005802/512x512/8bf00d7772/calendar.png",
    paragraf:
      `<p>A new study made by Dr. Arezoo Assarian reveals that modern anti-corrosive coatings outperform traditional galvanizing in harsh marine and industrial environments.</p>

      <p>While galvanizing protects steel for decades in mild settings, it can fail in less than 10 years under aggressive conditions. In comparison, multi-layer epoxy systems and smart self-healing coatings last more than 20–30 years, with combined “duplex” systems offering up to 60 years of protection.</p>

      <p>Experts say the future of corrosion protection lies in advanced coatings that deliver longer service life, greater versatility, and easier repair than galvanizing alone.</p>`,
    photo: "https://a.storyblok.com/f/286878845005802/829x812/ecb3fc52df/performance_image.jpg",
    thumbnail: "",
    video: "",
    pdf: "../resources/PerformanceComparison.pdf"
  },

   {
    title: "Climatic Influence on Coating Performance",
    author: "Author: Dr. Arezoo Assarian",
    date: "1.9.2025",
    calendar: "https://a.storyblok.com/f/286878845005802/512x512/8bf00d7772/calendar.png",
    paragraf:
      "<p>A new study made by Dr. Arezoo Assarian, shows that protective coatings on steel fail if applied “as is” across different climates. Researchers tested a polyester–polyurethane coating in six cities—from Riyadh’s desert heat to Panama City’s tropical marine conditions—and found performance varied drastically. The takeaway: coatings must be formulated for local conditions, whether UV-heavy deserts, salt-laden coasts, or freeze–thaw continental zones, to prevent premature corrosion, blistering, or chalking.</p>",
    photo: "https://a.storyblok.com/f/286878845005802/6000x4000/c25f654ec0/coating_performance.jpg",
    thumbnail: "",
    video: "",
    pdf: "../resources/Climatic Influence on Coating Performance.pdf"
  },

   {
    title: "Interview with Dr. Arezoo Assarian",
    author: "Author: Dr. Arezoo Assarian",
    date: "31.8.2025",
    calendar: "https://a.storyblok.com/f/286878845005802/512x512/8bf00d7772/calendar.png",
    paragraf:
        `
        <p>The Inspenet article highlights advances in smart coatings for critical industries, featuring insights from Arezoo Assarian, CEO of Eninco Engineering.</p>

        <p>These coatings, developed by Eninco from their offices in the Netherlands and Croatia, offer active solutions for extreme conditions in sectors such as defense, energy, and marine. Unlike traditional coatings, smart coatings incorporate microcapsules or nanoparticles that automatically respond to stimuli like moisture, corrosion, or impacts, enhancing protection and extending the lifespan of infrastructure.</p>

        <p>Eninco Engineering’s approach combines science, industry, and sustainability, transforming passive protection into intelligent action. The company also provides opportunities for engineering students, allowing them to work on real projects and gain practical experience in an industrial environment.</p>

        <p>This innovative approach reflects a regional vision to integrate advanced solutions in the protection of industrial assets.</p>

        <p>For more information, you can watch the interview: <a href="https://inspenet.com/video-tv/recubrimientos-inteligentes-industriales" target="_blank">Watch Interview</a></p>
        `,
    photo: "https://a.storyblok.com/f/286878845005802/1536x864/ecc2a14ed3/interview.jpg",
    thumbnail: "",
    video: "",
    pdf: ""
  },
  
];

export const articles = rawArticles.map((article, index) => ({
  id: (index + 1).toString(),
  ...article
}));
