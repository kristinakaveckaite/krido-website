// =============================================================================
// SERVICE PAGES content. Each service follows the same shape so they share
// components. Add a new service by adding an entry here.
// =============================================================================

export type Treatment = {
  name: string;
  description: string;
  expectation: string;
  price: string;
  bookUrl: string;
  payLaterUrl?: string;
};

export type Faq = { q: string; a: string[] };

export type ServicePage = {
  slug: string;
  heroImage: string;
  heroTitle: string;
  heroSub: string;
  badges: string;
  sectionTitle: string;
  steps: { image: string; title: string; body: string }[];
  protocolNote: string;
  treatments: Treatment[];
  beforeAfter: string[];
  faqs: Faq[];
  ctaTitle: string;
};

const CRYO_PROTOCOL =
  "3 sessions for subtle refinement, 5 sessions for visible change, 10 sessions for complete transformation.";

// Per-area Vagaro booking deep-links (pulled from the live site).
const V = {
  abdomen:
    "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLAL4kofcr3LcHnnGemqqnSyCsWpS5bl4JaefILc7Vt83pa7rsxyn6Ia8t4TKntC95Nl/ekwwkGVmZWpftTaSmtHCHbkYebst7wsNolpyPItNnAbjvzAjb+pHmxDq7GZdRrDJVypWokzcjO3lO+9Wi2E+JksrsFjsvJCGgnSA70peGe4BufrxYoAUPER7BjamOrGmArxcuysZyLI1llL0Bcikl8tP1j8FJcVLNXbdYBZ6N4L/zXwcXfBEZ4k+9A1bG3/eH7m9+201TwrfoqBMJXXk48pHblY//8eXKkU1WSDDGCUe2+cjfdwovNlXNZJ61j/T4fHvVN2EmJbckh9ya2GC9k6T2YmkiVNUYBnwGWXqMhCQULHgtGYHQpgtXlkadvY+2/XaBEbwN+sXQI7Fm6sMwHZQqjEvR8Y6MndCsSfdZBMDyXiPZGZHz5S7QN0HouJscj4UZJOwQBxnIaGUnta6JlN/SnzkLFQg6Lev+gi",
  arms:
    "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLAL4kofcr3LcHnnGemqqnSyCsWpS5bl4JaefILc7Vt83pa7rsxyn6Ia8t4TKntC95Nl/ekwwkGVmZWpftTaSmtHCHbkYebst7wsNolpyPItNnAbjvzAjb+pHmxDq7GZdRrDJVypWokzcjO3lO+9Wi2E+JksrsFjsvJCGgnSA70peGe4BufrxYoAUPER7BjamOrGmArxcuysZyLI1llL0Bcikl8tP1j8FJcVLNXbdYBZ6N4L/zXwcXfBEZ4k+9A1bG3/eH7m9+201TwrfoqBMJXXk48pHblY//8eXKkU1WSDDGCUe2+cjfdwovNlXNZJ61j/T4fHvVN2EmJbckh9ya2GC9k6T2YmkiVNUYBnwGWXqMhCQULHgtGYHQpgtXlkadvY+2/XaBEbwN+sXQI7Fm6sMwHZQqjEvR8Y6MndCsSfXqgEnDGmrpmzUyB1KQidZKC9n0JexUd4Cjm3jxDowJsHXN1acubxXuqe8uM0yv9q",
  back:
    "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLAL4kofcr3LcHnnGemqqnSyCsWpS5bl4JaefILc7Vt83pa7rsxyn6Ia8t4TKntC95Nl/ekwwkGVmZWpftTaSmtHCHbkYebst7wsNolpyPItNnAbjvzAjb+pHmxDq7GZdRrDJVypWokzcjO3lO+9Wi2E+JksrsFjsvJCGgnSA70peGe4BufrxYoAUPER7BjamOrGmArxcuysZyLI1llL0Bcikl8tP1j8FJcVLNXbdYBZ6N4L/zXwcXfBEZ4k+9A1bG3/eH7m9+201TwrfoqBMJXXk48pHblY//8eXKkU1WSDDGCUe2+cjfdwovNlXNZJ61j/T4fHvVN2EmJbckh9ya2GC9k6T2YmkiVNUYBnwGWXqMhCQULHgtGYHQpgtXlkadvY+2/XaBEbwN+sXQI7Fm6sMwHZQqjEvR8Y6MndCsSf5BPRZz+cwAufUKitWdJOyLy363kWVE1dBepaQcwOmoomXI4KaRaewDHy6FtrFXkO",
  breast:
    "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLAL4kofcr3LcHnnGemqqnSyCsWpS5bl4JaefILc7Vt83pa7rsxyn6Ia8t4TKntC95Nl/ekwwkGVmZWpftTaSmtHCHbkYebst7wsNolpyPItNnAbjvzAjb+pHmxDq7GZdRrDJVypWokzcjO3lO+9Wi2E+JksrsFjsvJCGgnSA70peGe4BufrxYoAUPER7BjamOrGmArxcuysZyLI1llL0Bcikl8tP1j8FJcVLNXbdYBZ6N4L/zXwcXfBEZ4k+9A1bG3/eH7m9+201TwrfoqBMJXXk48pHblY//8eXKkU1WSDDGCUe2+cjfdwovNlXNZJ61j/T4fHvVN2EmJbckh9ya2GC9k6T2YmkiVNUYBnwGWXqMhCQULHgtGYHQpgtXlkadvY+2/XaBEbwN+sXQI7Fm6sMwHZQqjEvR8Y6MndCsSfhZ2XWv6lfeDM2/RQD5/Q1ConX8eEalbjVsPCj4kN8fuMZoVhaXWrxUGp38mhozam",
  cellulite:
    "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLAL4kofcr3LcHnnGemqqnSyCsWpS5bl4JaefILc7Vt83pa7rsxyn6Ia8t4TKntC95Nl/ekwwkGVmZWpftTaSmtHCHbkYebst7wsNolpyPItNnAbjvzAjb+pHmxDq7GZdRrDJVypWokzcjO3lO+9Wi2E+JksrsFjsvJCGgnSA70peGe4BufrxYoAUPER7BjamOrGmArxcuysZyLI1llL0Bcikl8tP1j8FJcVLNXbdYBZ6N4L/zXwcXfBEZ4k+9A1bG3/eH7m9+201TwrfoqBMJXXk48pHblY//8eXKkU1WSDDGCUe2+cjfdwovNlXNZJ61j/T4fHvVN2EmJbckh9ya2GC9k6T2YmkiVNUYBnwGWXqMhCQULHgtGYHQpgtXlkadvY+2/XaBEbwN+sXQI7Fm6sMwHZQqjEvR8Y6MndCsSf4CZjDclQhuWHohWYG5sjUlHZtYgXsYBb6QdR1Q7SPS2COWXWP8fzn4xkDn8lCKFp",
  glute:
    "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLAL4kofcr3LcHnnGemqqnSyCsWpS5bl4JaefILc7Vt83pa7rsxyn6Ia8t4TKntC95Nl/ekwwkGVmZWpftTaSmtHCHbkYebst7wsNolpyPItNnAbjvzAjb+pHmxDq7GZdRrDJVypWokzcjO3lO+9Wi2E+JksrsFjsvJCGgnSA70peGe4BufrxYoAUPER7BjamOrGmArxcuysZyLI1llL0Bcikl8tP1j8FJcVLNXbdYBZ6N4L/zXwcXfBEZ4k+9A1bG3/eH7m9+201TwrfoqBMJXXk48pHblY//8eXKkU1WSDDGCUe2+cjfdwovNlXNZJ61j/T4fHvVN2EmJbckh9ya2GC9k6T2YmkiVNUYBnwGWXqMhCQULHgtGYHQpgtXlkadvY+2/XaBEbwN+sXQI7Fm6sMwHZQqjEvR8Y6MndCsSfzFr9nsivWHoKpcXKkh2bOK7p2d+I956oJuEkpDrLGf7fJ3IaKS12niG+NbqNeevJ",
  knees:
    "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLAL4kofcr3LcHnnGemqqnSyCsWpS5bl4JaefILc7Vt83pa7rsxyn6Ia8t4TKntC95Nl/ekwwkGVmZWpftTaSmtHCHbkYebst7wsNolpyPItNnAbjvzAjb+pHmxDq7GZdRrDJVypWokzcjO3lO+9Wi2E+JksrsFjsvJCGgnSA70peGe4BufrxYoAUPER7BjamOrGmArxcuysZyLI1llL0Bcikl8tP1j8FJcVLNXbdYBZ6N4L/zXwcXfBEZ4k+9A1bG3/eH7m9+201TwrfoqBMJXXk48pHblY//8eXKkU1WSDDGCUe2+cjfdwovNlXNZJ61j/T4fHvVN2EmJbckh9ya2GC9k6T2YmkiVNUYBnwGWXqMhCQULHgtGYHQpgtXlkadvY+2/XaBEbwN+sXQI7Fm6sMwHZQqjEvR8Y6MndCsSf8MSeaaQCk2Bf44VgvFZff6t8hdtGhsxC9Ir0Nk5PpnNHmMYfYfzS41sUJ5WlkEp1",
  legs:
    "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLAL4kofcr3LcHnnGemqqnSyCsWpS5bl4JaefILc7Vt83pa7rsxyn6Ia8t4TKntC95Nl/ekwwkGVmZWpftTaSmtHCHbkYebst7wsNolpyPItNnAbjvzAjb+pHmxDq7GZdRrDJVypWokzcjO3lO+9Wi2E+JksrsFjsvJCGgnSA70peGe4BufrxYoAUPER7BjamOrGmArxcuysZyLI1llL0Bcikl8tP1j8FJcVLNXbdYBZ6N4L/zXwcXfBEZ4k+9A1bG3/eH7m9+201TwrfoqBMJXXk48pHblY//8eXKkU1WSDDGCUe2+cjfdwovNlXNZJ61j/T4fHvVN2EmJbckh9ya2GC9k6T2YmkiVNUYBnwGWXqMhCQULHgtGYHQpgtXlkadvY+2/XaBEbwN+sXQI7Fm7Yz0uhgM8Y42d8A23Fg+VrT+9VE69x26Zng78xvZs1ATzl4zuEMxbSkE0l9hFfE++WpT/zrY4PgrVWOtg8CM8a",
  waist:
    "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLAL4kofcr3LcHnnGemqqnSyCsWpS5bl4JaefILc7Vt83pa7rsxyn6Ia8t4TKntC95Nl/ekwwkGVmZWpftTaSmtHCHbkYebst7wsNolpyPItNnAbjvzAjb+pHmxDq7GZdRrDJVypWokzcjO3lO+9Wi2E+JksrsFjsvJCGgnSA70peGe4BufrxYoAUPER7BjamOrGmArxcuysZyLI1llL0Bcikl8tP1j8FJcVLNXbdYBZ6N4L/zXwcXfBEZ4k+9A1bG3/eH7m9+201TwrfoqBMJXXk48pHblY//8eXKkU1WSDDGCUe2+cjfdwovNlXNZJ61j/T4fHvVN2EmJbckh9ya2GC9k6T2YmkiVNUYBnwGWXqMhCQULHgtGYHQpgtXlkadvY+2/XaBEbwN+sXQI7Fm7Yz0uhgM8Y42d8A23Fg+VrP0/C2/x6+BgQJgnMkr0vdxC0KwcHrltsT0XpPcR4TuT7KxUW5WOlE4e6KxoGlHxF",
};

export const services: Record<string, ServicePage> = {
  "cryo-services": {
    slug: "cryo-services",
    heroImage:
      "https://framerusercontent.com/images/cSEHPzxoVWLyQXrS0jt5gFu0SXI.jpeg?width=1344&height=768",
    heroTitle: "Sculpt & Tighten Cryotherapy",
    heroSub:
      "30 minutes to sculpt and tighten, then back to your day. No downtime.",
    badges: "5 ★ Reviews • Licensed staff • St. Petersburg",
    sectionTitle: "Your Fastest Path to a Tighter, Brighter Look",
    steps: [
      {
        image:
          "https://framerusercontent.com/images/4uFgYaOmQoQ7A8BfZKftOqUKgzA.webp?width=1080&height=1350",
        title: "What is cryo?",
        body: "A controlled cooling treatment applied to the skin for a few minutes.",
      },
      {
        image:
          "https://framerusercontent.com/images/kDJDHqG7tuJRGRgjSxfLWohOG4c.png?width=1080&height=720",
        title: "What you feel",
        body: "Cold and pressure, then numbness. Most clients say it's tolerable.",
      },
      {
        image:
          "https://framerusercontent.com/images/zNb0aHedfOuL7qrQ8e5rokatl0.webp?width=1000&height=667",
        title: "What happens next?",
        body: "No downtime. You may look flushed at first.",
      },
    ],
    protocolNote: CRYO_PROTOCOL,
    treatments: [
      {
        name: "Abdomen",
        description:
          "A high-performance treatment targeting pinchable fat. We use our signature sequence — 3D Body Scan, Cryo, Red Light cell rejuvenation, and Lymphatic Drainage — to refine the midsection with precision. We are the only medspa in Tampa Bay offering this comprehensive protocol to maximize metabolic fat loss.",
        expectation: "Average reduction of 1 to 2 inches per session.",
        price: "$299",
        bookUrl: V.abdomen,
        payLaterUrl: V.abdomen,
      },
      {
        name: "Arms / Underarms",
        description:
          "Targeted fat reduction and skin tightening for pinchable fat in the upper arms and underarm area. Our four-stage protocol includes 3D Body Scanning, Cryo treatment, Red Light Therapy, and Lymphatic Drainage to support visible contouring and improved skin firmness.",
        expectation: "Average reduction of 1 to 2 inches per session.",
        price: "$299",
        bookUrl: V.arms,
        payLaterUrl: V.arms,
      },
      {
        name: "Back",
        description:
          "Focuses on back fat along the bra line and posterior waist. We apply our signature 3D Body Scan, Cryo, Red Light, and Lymphatic Drainage sequence to isolate pinchable fat and visibly lift the skin — creating a clean, firm, and athletic contour.",
        expectation:
          "Average reduction of 1 to 2 inches per session with a more streamlined profile.",
        price: "$299",
        bookUrl: V.back,
        payLaterUrl: V.back,
      },
      {
        name: "Breast Sculpt & Lift",
        description:
          "Addresses laxity in the skin and tissue surrounding the breast to restore a more structured form. Our protocol stimulates deep collagen production to visibly lift the skin and improve structural density, firming the bust line for a more lifted, athletic appearance.",
        expectation:
          "Visibly lifted skin, increased firmness, and restored contour.",
        price: "$299",
        bookUrl: V.breast,
        payLaterUrl: V.breast,
      },
      {
        name: "Cellulite Treatment",
        description:
          "Treats any area affected by the appearance of cellulite caused by trapped fat cells and weakened connective tissue. Our four-stage protocol supports smoother skin, improved firmness, and refined contours.",
        expectation: "Visible smoothing, skin lifting, and 1 to 2 inch reduction.",
        price: "$299",
        bookUrl: V.cellulite,
        payLaterUrl: V.cellulite,
      },
      {
        name: "Glute Sculpt & Lift",
        description:
          "Addresses sagging and loss of shape in the glutes and surrounding tissue. We stimulate deep collagen and tighten the skin for a visibly lifted, more athletic profile and a firm, high-performance contour.",
        expectation: "Visible lift, improved skin snap-back, and refined contour.",
        price: "$299",
        bookUrl: V.glute,
        payLaterUrl: V.glute,
      },
      {
        name: "Knees",
        description:
          "Focused treatment to reduce localized pinchable fat and firm loose skin around the knee. Our signature protocol optimizes metabolic waste removal to sharpen leg definition.",
        expectation: "Average reduction of 1 to 2 inches per session.",
        price: "$299",
        bookUrl: V.knees,
        payLaterUrl: V.knees,
      },
      {
        name: "Legs",
        description:
          "A comprehensive approach to leg contouring using our signature sequence. Targets pinchable fat and enhances skin density for a smooth, high-performance silhouette.",
        expectation: "Average reduction of 1 to 2 inches per session.",
        price: "$299",
        bookUrl: V.legs,
        payLaterUrl: V.legs,
      },
      {
        name: "Waist",
        description:
          "Cinches the midsection to emphasize a more defined hourglass shape. We isolate pinchable fat and visibly tighten the skin to enhance your natural geometry and athletic definition.",
        expectation:
          "Average reduction of 1 to 2 inches per session with enhanced waist curvature.",
        price: "$299",
        bookUrl: V.waist,
        payLaterUrl: V.waist,
      },
    ],
    beforeAfter: [
      "https://framerusercontent.com/images/HMmZxAZOrlq5Nc5mnb4URVayPK4.webp?width=1080&height=1350",
      "https://framerusercontent.com/images/VeELfv4dHmiNqkIQTfH7ewr4S8.webp?width=1080&height=1350",
      "https://framerusercontent.com/images/doFzswIQySzzeC54M5ApGjLyMaA.webp?width=1080&height=1350",
      "https://framerusercontent.com/images/s0LVaOeY1BLuX8IxvGtQ3XSpU.webp?width=1080&height=1350",
      "https://framerusercontent.com/images/jMmiajfqch8IsTGuAIPeYGUU.webp?width=1080&height=1350",
      "https://framerusercontent.com/images/3ylGki2MiZQdIbttldd7JiL1T0.webp?width=1080&height=1350",
      "https://framerusercontent.com/images/edMjHfZUORrgwP1qB7lc1tBOC0.webp?width=1080&height=1350",
      "https://framerusercontent.com/images/NPrqhvoFMIhPpJbEwCilRBi2fY.webp?width=1080&height=1350",
    ],
    faqs: [
      {
        q: "What problem do these treatments actually solve?",
        a: [
          "These treatments help reduce stubborn fat and loose skin in areas that don't respond well to diet or exercise.",
          "They're designed to refine, sculpt, and smooth targeted areas such as the abdomen, arms, legs, flanks, or underarms, creating a more toned and balanced appearance.",
        ],
      },
      {
        q: "What is included in a fat reduction and skin tightening session?",
        a: [
          "We begin with a 3D body scan to assess your body composition and track changes in inches and shape over time, so your plan is precise and results-driven.",
          "Next, we perform the cryo fat reduction and skin tightening treatment, targeting stubborn, pinchable fat while supporting skin firmness.",
          "The session is completed with red light therapy and lymphatic drainage massage to maximize cellular rejuvenation and help the body process treated fat cells.",
        ],
      },
      {
        q: "Is this a weight loss treatment?",
        a: [
          "This is body sculpting, not weight loss. Instead of the number on the scale, these treatments focus on shape, inches, and skin quality. Many clients feel leaner and more defined even when their weight stays the same.",
        ],
      },
      {
        q: "What results can I expect after one session?",
        a: [
          "Clients see visible changes after just one session, including reduced fullness, smoother skin texture, and increased firmness — commonly a measurable inch loss of up to 1–1.5 inches in the treated area. Results continue to improve over the following weeks.",
        ],
      },
      {
        q: "How many sessions will I need?",
        a: [
          "Most clients start with at least 3 sessions, while 5–10 sessions are ideal for deeper fat reduction and more refined results. Your plan is personalized during your consultation.",
        ],
      },
      {
        q: "How does this compare to weight loss injections?",
        a: [
          "Weight loss injections work systemically for overall weight loss and can't be controlled by area. Cryo fat reduction works locally, targeting stubborn, pinchable fat in specific areas — ideal for precise shaping rather than dramatic weight loss.",
        ],
      },
      {
        q: "Is the treatment painful?",
        a: [
          "The treatment is non-invasive and generally relaxing. You may notice a cooling sensation during and shortly after the session, which usually fades within a few hours. It doesn't interfere with daily activities.",
        ],
      },
      {
        q: "How should I prepare before my session and what should I do after?",
        a: [
          "For best results, avoid sugars and highly processed fats for at least 2 hours before your session, and avoid sugars and refined carbohydrates for 2 hours after. This keeps insulin lower and supports fat mobilization.",
          "After your session, light movement such as walking helps activate lymphatic drainage and optimize your results.",
        ],
      },
      {
        q: "Is there any downtime?",
        a: [
          "There is no downtime. You can return to your normal daily activities immediately after your session.",
        ],
      },
    ],
    ctaTitle: "Try Cryo Today",
  },
};
