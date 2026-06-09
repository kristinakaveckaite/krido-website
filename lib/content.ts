// =============================================================================
// SITE CONTENT — single source of truth.
// Edit copy, links, and image URLs here. Components read from this file so you
// rarely have to touch markup. This is what makes the rebuild "scalable".
// =============================================================================

export const site = {
  name: "KRIDO Wellness",
  phone: "727-423-2932",
  phoneHref: "tel:727-423-2932",
  instagram: "https://www.instagram.com/kridowellness/",
  // Vagaro handles all booking AND product checkout. These open your live Vagaro page.
  bookingUrl: "https://www.vagaro.com/kridowellness",
  shopUrl: "https://www.vagaro.com/kridowellness", // products are purchased on Vagaro
  address: {
    line1: "IMAGE Studios, 2nd Floor",
    line2: "11 7th St N, Suite 220",
    cityState: "St. Petersburg, FL 33701",
  },
  hours: "Monday – Saturday · By appointment only",
};

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "What is Cryo?", href: "/what-is-cryo" },
  { label: "Before & Afters", href: "/before-and-afters" },
  { label: "Memberships", href: "/memberships" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Location", href: "/#visit" },
];

export const hero = {
  videoUrl:
    "https://framerusercontent.com/assets/oLMPWHGLZMoBeOZ0W4OhEicWkjo.mp4",
  eyebrow: "St. Pete's #1 cryo studio",
  headline: ["Lose Inches.", "Lift Your Face.", "No Surgery. No Downtime."],
  sub: "Most clients see results after their very first session.",
  note: "Optimize your health and aesthetics in St. Petersburg, Florida",
};

export const treatmentsIntro = {
  title: "KRIDO Treatments",
  body: "Our quick, non-invasive, science-backed cryo-treatments sculpt and lift the areas you want, helping you look slimmer, firmer, and more youthful.",
};

export const treatments = [
  {
    title: "Face & Body Sculpting",
    lines: ["Cryo Face Sculpting", "Cryo Body Sculpting"],
    href: "/cryo-services",
    image:
      "https://framerusercontent.com/images/spPZ4shzvjCo5Z0zPH4ik9CKk.jpeg?width=1320&height=2325",
  },
  {
    title: "Cryo Sculpting Packages",
    lines: ["Cryo Face Packages", "Cryo Body Packages"],
    href: "/packages",
    image:
      "https://framerusercontent.com/images/6uTL046g0Ef4o9d84m3lDnIA.jpeg?width=4096&height=2304",
  },
  {
    title: "Facials",
    lines: [
      "Facials powered by Circadia",
      "Microneedling",
      "Dermaplaning",
      "Microdermabrasion",
      "And more",
    ],
    href: "/facials",
    image:
      "https://framerusercontent.com/images/d8qZ5hZ7wvDomJ1GDKv3lmK9mUE.png?width=1080&height=1350",
  },
  {
    title: "Brows and Lashes",
    lines: ["Brow lamination & tint", "Lash lift & tint"],
    href: "/brows-and-lashes",
    image:
      "https://framerusercontent.com/images/Z49IxsbtZ96ejo00Gou4MH7W2DY.png?width=3750&height=1963",
  },
  {
    title: "Permanent Makeup",
    lines: ["Brows", "Lips", "Eyeliners", "Scar Camouflage", "Fine Line Tattoos"],
    href: "/permanent-makeup",
    image:
      "https://framerusercontent.com/images/bIK9hJ1aQ76g9SaXbddxGc6JnDM.jpeg?width=1202&height=1575",
  },
  {
    title: "Facial Memberships",
    lines: ["Essential Membership for Facials"],
    href: "/memberships",
    image:
      "https://framerusercontent.com/images/1FwAXiLkIOQPLghfwyxPmMDUU.jpg?width=736&height=736",
  },
];

export const features = [
  {
    label: "Non-Invasive",
    image:
      "https://framerusercontent.com/images/4uFgYaOmQoQ7A8BfZKftOqUKgzA.webp?width=1080&height=1350",
  },
  {
    label: "Body Sculpting",
    image:
      "https://framerusercontent.com/images/kDJDHqG7tuJRGRgjSxfLWohOG4c.png?width=1080&height=720",
  },
  {
    label: "At a Cellular Level",
    image:
      "https://framerusercontent.com/images/zNb0aHedfOuL7qrQ8e5rokatl0.webp?width=1000&height=667",
  },
];

export const bestSellers = [
  {
    name: "Vitamin Veil Cleansing Oil",
    href: "https://www.vagaro.com/kridowellness",
    image: "https://circadia.com/cdn/shop/files/3-VitaminVeilCleaningOil.png?v=1771599786&width=800",
  },
  {
    name: "AquaPorin Hydrating Cream",
    href: "https://www.vagaro.com/kridowellness",
    image: "https://circadia.com/cdn/shop/files/2-AquaporinHydratingCream.png?v=1771604241&width=800",
  },
  {
    name: "Serum 71",
    href: "https://www.vagaro.com/kridowellness",
    image: "https://circadia.com/cdn/shop/files/3_Serum71RenewalSerum.png?v=1771597055&width=800",
  },
  {
    name: "Emergency Eye Lift",
    href: "https://www.vagaro.com/kridowellness",
    // TODO: replace with Circadia CDN image when available
    image: "https://framerusercontent.com/images/1FwAXiLkIOQPLghfwyxPmMDUU.jpg?width=800",
  },
  {
    name: "Lip Renewing Hydrator — Peppermint Mocha",
    href: "https://www.vagaro.com/kridowellness",
    // TODO: replace with Circadia CDN image when available
    image: "https://framerusercontent.com/images/4uFgYaOmQoQ7A8BfZKftOqUKgzA.webp?width=800",
  },
];

export const testimonials = [
  {
    name: "Evgeniya",
    quote:
      "Glowing after my facial and cryo-facial with Coleen. She was absolutely amazing – so gentle, knowledgeable, and professional. The treatment left my skin feeling fresh, lifted, and radiant. I could instantly see and feel the glow! Highly recommend.",
  },
  {
    name: "Brigitte F.",
    quote:
      "I have to admit I was a little scared but this was the most relaxing time I have had in a long time. I had a Cryo-facial and Cryo-neck done and the results were amazing. A friend who sees me all the time instantly asked what I had done the next day as I now have a jaw line. A must for anyone who wants to feel better about themselves.",
  },
  {
    name: "Lilly B.",
    quote:
      "I had a wonderful experience at KRIDO Wellness with Colleen. She provided excellent care and attention during my treatment. I have already noticed improvements in the firmness and tightness of my skin after just one session. I highly recommend her services.",
  },
  {
    name: "Eligija Z.",
    quote:
      "I had such a wonderful facial with Colleen! She was extremely professional, gentle, and so friendly throughout the whole experience. My skin felt refreshed and glowing afterward. Highly recommend booking with Colleen — she's amazing!",
  },
  {
    name: "Garrett R.",
    quote:
      "Colleen did an amazing job with my 3D body scan and Cryo Slimming services. She took the time to give me a full breakdown of my body percentages, which made the whole process feel really personalized. The results were perfect!",
  },
  {
    name: "Ty R.",
    quote:
      "I feel so much more toned and sculpted, and the results were noticeable right away. I also got the Circadia Premium Facial — the most relaxing experience, truly like a reset for my skin. I did cryo-sculpting on my abdomen postpartum and lost a whole inch from one session!",
  },
  {
    name: "Danute K.",
    quote:
      "The best center! After 2 sessions my arms were 2 inches slimmer! Highest recommendations!",
  },
  {
    name: "Brandee Thomas",
    quote:
      "What an amazing experience! The facial was very relaxing and the red light was such a wonderful touch!",
  },
];

export const mission = {
  eyebrow: "Behind Your Results",
  title: "Our Mission",
  paragraphs: [
    "At KRIDO Wellness, we help clients achieve a slimmer, firmer, more youthful appearance using safe, non-invasive treatments that support the body's natural processes.",
    "We combine targeted cold therapy and red light technology to reduce unwanted fat, tighten skin, and brighten the face in quick, relaxing sessions with no downtime.",
    "Our mission is simple: to help you feel renewed, confident, and aligned in your body.",
  ],
  image:
    "https://framerusercontent.com/images/U3kTTKToY1dOw2xtIH1h1QxNU.webp?width=1372&height=758",
};

export const owner = {
  eyebrow: "Owner",
  name: "Kristina Kaveckaite",
  image:
    "https://framerusercontent.com/images/cLyYnQzrW41sZs9HTwPKGZce2tM.webp?width=1061&height=1501",
};

export const location = {
  eyebrow: "Come visit us",
  title: "Location",
  body: [
    "We're located in IMAGE Studios, 2nd floor — 11 7th St North, Suite 220, St. Petersburg, FL 33701.",
    "Enter through the side entrance on 7th St N, take the stairs or elevator to the second floor, and find us in suites 220 & 221.",
    "Free 3-hour parking is available right in front on 7th Street North, with additional free 2-hour parking along Central Avenue North.",
  ],
  image:
    "https://framerusercontent.com/images/lRcsj7PJLEGRwIWLtiABFs2d8.jpeg?width=1786&height=1350",
};
