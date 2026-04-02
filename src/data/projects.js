const projects = [
  {
    id: 1,
    title: "DeepFake Detection",
    description:
      "CNN-RNN based model to detect AI-generated videos by analyzing temporal inconsistencies.",
    details:
      "This project combines CNN for spatial feature extraction and RNN (LSTM/GRU) for temporal learning. It processes sequences of frames to detect subtle inconsistencies in AI-generated videos.",
    tech: ["Python", "PyTorch", "OpenCV"],
    category: "AI",
  },
  {
    id: 2,
    title: "Fullstack – Pertamina",
    description:
      "Web-based dashboard for data processing and visualization.",
    details:
      "Developed a full-stack system including backend APIs, database handling, and frontend dashboards to transform raw data into insights.",
    tech: ["Laravel", "Flask", "MySQL"],
    category: "Web",
  },
  {
    id: 3,
    title: "Journey On Solo - Traveling App",
    description:
      "A mobile application for planning and sharing travel experiences.",
    details:
      "Worked on machine learning features for personalized travel recommendations and user-generated content sharing.",
    tech: ["TensorFlow", "NLP"],
    category: "AI",
  },
  {
    id: 4,
    title: "Writing & Blogging",
    description:
      "Philosophy and history essays.",
    details:
      "Writing about philosophy, civilization, and the relationship between technology and human thought.",
    tech: ["Markdown", "React"],
    category: "Writing",
  },
  {
    id: 5,
    title: "Language Learning",
    description:
      "Exploring linguistic structures and learning new languages.",
    details:
      "Currently learning Russian and other languages to better understand their grammar, vocabulary, and cultural context.",
    tech: ["Duolingo", "Airlearning", "Pingo"],
    category: "Education",
  },
  {
    id: 6,
    title: "Academic Information Systems",
    description:
      "A system for managing and organizing academic information.",
    details:
      "Designed and implemented a comprehensive system for handling student records, gpa calculations, and academic reporting.",
    tech: ["Laravel", "MySQL"],
    category: "Web",
  }
];

export default projects;
