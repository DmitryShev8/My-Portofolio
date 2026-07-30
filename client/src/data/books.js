export const books = [
  {
    id: "sapiens",

    // ================= HERO =================
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "History",
    image: "/images/books/s.jpg",
    status: "Reading Now",

    description:
      "An exploration of how shared myths, culture, and institutions shaped the rise of human civilization.",

    recommendation:
      "History enthusiasts, anthropologists, and readers curious about the evolution of humanity.",

    series: "History Collection",
    edition: "Volume I",

    // ================= EXECUTIVE SUMMARY =================
    summary: {
      title: "The Story of Humanity",

      paragraphs: [
        "Sapiens explores how Homo sapiens evolved from an insignificant African primate into the dominant species on Earth.",

        "Harari argues that the defining feature of humans is our ability to believe in shared myths. Religion, money, nations, corporations, and laws exist because millions of people collectively agree that they do.",

        "The book challenges conventional thinking about progress, questioning whether technological and agricultural revolutions truly improved human happiness."
      ]
    },

    // ================= CORE PRINCIPLES =================
    principlesTitle: "Core Ideas",

    principles: [
      {
        title: "The Cognitive Revolution",
        description:
          "Language allowed humans to cooperate in large groups by creating shared stories and beliefs."
      },

      {
        title: "The Agricultural Revolution",
        description:
          "Agriculture increased food production but also introduced inequality, hard labor, and dependence."
      },

      {
        title: "The Scientific Revolution",
        description:
          "Modern civilization accelerated because humans embraced ignorance and pursued knowledge through science."
      },

      {
        title: "Imagined Orders",
        description:
          "Money, religion, governments, and corporations only exist because people collectively believe in them."
      }
    ],

    // ================= MY REFLECTION =================
    takeaway: {
      title: "My Reflection",

      quote:
        "History is something that very few people have been doing while everyone else was ploughing fields and carrying water buckets.",

      author: "Yuval Noah Harari",

      reflection:
        "This book completely changed how I think about civilization. It made me realize that many things we consider 'real' are actually collective agreements that only exist because society believes in them."
    },

    // ================= EXTRA =================
    favoriteQuote:
      "Culture tends to argue that it forbids only that which is unnatural. But from a biological perspective, nothing is unnatural.",

    lessons: [
      "Shared beliefs are the foundation of civilization.",
      "Technology changes society faster than biology.",
      "Progress often comes with unexpected trade-offs.",
      "Question assumptions that seem 'natural'."
    ],

    tags: [
      "History",
      "Anthropology",
      "Civilization",
      "Evolution"
    ],

    rating: 5,

    // ================= NEXT BOOK =================
    nextBook: "guns-germs-steel"
  },

  {
    id: "meditations",

    title: "Meditations",
    author: "Marcus Aurelius",
    category: "Philosophy",
    image: "/images/books/m.jpg",

    description:
      "Timeless reflections on discipline, resilience, and living with reason in an unpredictable world.",

    recommendation:
      "Anyone interested in Stoicism, self-discipline, and personal growth.",

    series: "Stoic Collection",
    edition: "Volume II",

    summary: {
      title: "The Philosophy of Inner Peace",

      paragraphs: [
        "Meditations is a private journal written by the Roman emperor Marcus Aurelius.",

        "Rather than teaching how to control the world, Marcus teaches how to control ourselves.",

        "Stoicism emphasizes accepting what cannot be changed while taking responsibility for one's own thoughts and actions."
      ]
    },

    principlesTitle: "Stoic Principles",

    principles: [
      {
        title: "Control What You Can",
        description:
          "Focus only on your own actions and reactions."
      },
      {
        title: "Accept Fate",
        description:
          "Events are outside your control, but your response is always yours."
      },
      {
        title: "Live According to Virtue",
        description:
          "Wisdom, courage, justice, and temperance are the highest values."
      }
    ],

    takeaway: {
      title: "My Reflection",

      quote:
        "You have power over your mind—not outside events.",

      author: "Marcus Aurelius",

      reflection:
        "This book reminds me to stop worrying about things I cannot control and instead improve my own character."
    },

    favoriteQuote:
      "Waste no more time arguing what a good man should be. Be one.",

    lessons: [
      "Control your thoughts.",
      "Accept uncertainty.",
      "Practice virtue every day."
    ],

    tags: [
      "Stoicism",
      "Philosophy",
      "Psychology"
    ],

    rating: 5,

    nextBook: "zarathustra"
  },

  {
    id: "zarathustra",

    title: "Thus Spoke Zarathustra",
    author: "Friedrich Nietzsche",
    category: "Philosophy",
    image: "/images/books/tsj.jpg",

    description:
      "A poetic philosophical journey challenging morality, conformity, and self-overcoming.",

    recommendation:
      "Readers interested in existential philosophy and Nietzsche's ideas.",

    series: "Philosophy Collection",
    edition: "Volume III",

    summary: {
      title: "The Philosophy of Self-Overcoming",

      paragraphs: [
        "Nietzsche presents the story of Zarathustra to explore the evolution of humanity.",

        "He introduces the ideas of the Übermensch, eternal recurrence, and the rejection of herd mentality."
      ]
    },

    principlesTitle: "Major Themes",

    principles: [
      {
        title: "Übermensch",
        description:
          "Become who you truly are."
      },
      {
        title: "Will to Power",
        description:
          "Growth comes from overcoming resistance."
      },
      {
        title: "Eternal Recurrence",
        description:
          "Live as though every moment would repeat forever."
      }
    ],

    takeaway: {
      title: "My Reflection",

      quote:
        "Become who you are.",

      author: "Friedrich Nietzsche",

      reflection:
        "Nietzsche encourages us to create our own values rather than blindly inheriting them."
    },

    favoriteQuote:
      "He who has a why to live can bear almost any how.",

    lessons: [
      "Challenge conformity.",
      "Create your own values.",
      "Growth comes through struggle."
    ],

    tags: [
      "Existentialism",
      "Philosophy"
    ],

    rating: 4.8,

    nextBook: "sapiens"
  },

  {
    id: "guns-germs-steel",

    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    category: "History",
    image: "/images/books/ggs.jpg",

    description:
      "A compelling perspective on how geography and environment influenced the fate of civilizations.",

    recommendation:
      "Readers interested in world history and geography.",

    series: "History Collection",
    edition: "Volume II",

    summary: {
      title: "Why Civilizations Developed Differently",

      paragraphs: [
        "Diamond argues that geography—not intelligence or race—is the primary reason civilizations developed at different speeds.",

        "Access to domesticable plants, animals, and favorable environments shaped the world's history."
      ]
    },

    principlesTitle: "Key Arguments",

    principles: [
      {
        title: "Geographic Luck",
        description:
          "Environment largely determines opportunity."
      },
      {
        title: "Domestication",
        description:
          "Agriculture accelerated technological development."
      },
      {
        title: "Disease",
        description:
          "Germs played a decisive role in conquest."
      }
    ],

    takeaway: {
      title: "My Reflection",

      quote:
        "History followed different courses for different peoples because of differences among peoples' environments.",

      author: "Jared Diamond",

      reflection:
        "The book challenges simplistic explanations for global inequality and highlights the profound influence of geography."
    },

    favoriteQuote:
      "Geography shaped history more than human superiority.",

    lessons: [
      "Environment matters.",
      "Technology is not evenly distributed.",
      "History is shaped by many interconnected factors."
    ],

    tags: [
      "History",
      "Geography",
      "Civilization"
    ],

    rating: 4.9,

    nextBook: "sapiens"
  }
];