/* ============================================================
   SITE CONTENT — EDIT ME
   ------------------------------------------------------------
   Everything on the site (bio, about text, timeline, skills,
   certificates, projects, contact links) is pulled from this
   one file. To update the site, edit the values below and
   save — no HTML or CSS editing required.

   Field-by-field notes are inline as comments. Anything wrapped
   in [ ] is a placeholder you should replace.
   ============================================================ */

const SITE_CONTENT = {

  // ---------- IDENTITY ----------
  name: "Chris Kariuki Mungai",
  role: "Aspiring Computer Scientist",
  location: "Nairobi, Kenya",

  // Short line used in the browser tab and meta description.
  tagline: "Building technology that lifts education and financial inclusion.",

  // ---------- HERO ----------
  hero: {
    eyebrow: "Self-taught developer · Computer Science",
    headline: "Building technology that lifts education and financial inclusion.",
    subtext:
      "I'm a self-driven, self-taught developer working toward a Computer Science degree. " +
      "My own struggles in accessing quality education, combined with what I saw during a " +
      "six-month attachment at Equity Bank, shaped a clear mission: use technology to close " +
      "the gaps in learning and financial access across Africa.",
    primaryCta: { label: "See my work", href: "#work" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
  },

  // ---------- ABOUT ----------
  about: {
    heading: "About me",
    // Add / edit paragraphs freely — each string becomes its own paragraph.
    paragraphs: [
      "I'm Chris Kariuki Mungai, an aspiring Computer Science student and self-taught " +
        "developer. I didn't come to code through a formal pipeline — I taught myself, " +
        "driven by curiosity and by the gaps I experienced firsthand in my own education.",
      "During a six-month attachment at Equity Bank, I got a close look at how financial " +
        "systems work — and how many people are still locked out of them. That experience, " +
        "paired with my own path through an imperfect education system, is what drives my " +
        "long-term goal: to build technology that revolutionizes access to education and " +
        "financial inclusion in Africa.",
      "I'm currently building my skills across software development and applied AI, and " +
        "putting that into practice through Stemlift Africa — my flagship project.",
    ],
  },

  // ---------- JOURNEY / TIMELINE ----------
  // This powers the ascending timeline graphic. Add, remove, or reorder
  // entries freely — the graphic adjusts automatically.
  journey: [
    {
      date: "Ongoing",
      title: "Self-taught foundations",
      description:
        "Taught myself to code across multiple languages and technologies, driven by " +
        "curiosity and a self-directed learning process rather than a formal program.",
    },
    {
      date: "6-month attachment",
      title: "Equity Bank",
      description:
        "Gained first-hand exposure to financial systems, operations, and the real-world " +
        "gaps in financial inclusion — an experience that reshaped my long-term goals.",
    },
    {
      date: "August 2026",
      title: "freeCodeCamp certifications",
      description: "Earned certifications in Python and JavaScript.",
    },
    {
      date: "2026",
      title: "Coursera — Generative AI",
      description:
        "Completed multiple Coursera certifications in Generative AI, building applied AI " +
        "skills alongside core software development.",
    },
    {
      date: "In progress",
      title: "Stemlift Africa",
      description:
        "Building my flagship project — a technology initiative aimed at lifting access to " +
        "STEM education across Africa.",
    },
  ],

  // ---------- SKILLS ----------
  skills: {
    heading: "Skills",
    // Simple tag list — add or remove as your skills grow.
    tags: [
      "Python",
      "JavaScript",
      "HTML & CSS",
      "Git & GitHub",
      "Generative AI / Prompt Engineering",
      "Problem Solving",
      "Self-Directed Learning",
    ],
  },

  // ---------- CERTIFICATES (attachments proving digital skills) ----------
  // "file" should point to a PDF or image placed inside assets/certificates/.
  // If a file isn't uploaded yet, leave file as "" and the button will be hidden.
  certificates: [
    {
      title: "Python",
      issuer: "freeCodeCamp",
      date: "August 2026",
      file: "", // e.g. "assets/certificates/freecodecamp-python.pdf"
    },
    {
      title: "JavaScript",
      issuer: "freeCodeCamp",
      date: "August 2026",
      file: "", // e.g. "assets/certificates/freecodecamp-javascript.pdf"
    },
    {
      title: "Generative AI [add specific course name]",
      issuer: "Coursera",
      date: "2026",
      file: "", // e.g. "assets/certificates/coursera-genai-1.pdf"
    },
    // Add one entry per Coursera certificate you have — copy the block above.
  ],

  // ---------- PROJECTS ----------
  projects: [
    {
      name: "Stemlift Africa",
      description:
        "My flagship project — a technology initiative focused on lifting access to STEM " +
        "education across Africa. [Add 2–3 sentences here on what it actually does, the " +
        "tech stack used, and its current status.]",
      tags: ["Education Technology", "Africa", "In Progress"], // edit freely
      repoUrl: "https://github.com/Iammusic67/Stemlift-africa",
      demoUrl: "", // e.g. "https://iammusic67.github.io/Stemlift-africa" — leave "" to hide the button
    },
    // To add another project, copy the block above and edit the fields.
  ],

  // ---------- CONTACT ----------
  contact: {
    heading: "Let's connect",
    subtext:
      "I'm always open to conversations about education technology, financial inclusion, " +
      "or opportunities to learn and build.",
    email: "ckaris003@gmail.com",
    github: "https://github.com/Iammusic67",
    linkedin: "", // e.g. "https://linkedin.com/in/your-handle" — leave "" to hide
  },

  // ---------- FOOTER ----------
  footer: {
    note: "Built and maintained by Chris Kariuki Mungai.",
  },
};
