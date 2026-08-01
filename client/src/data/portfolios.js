export const portfolios = [
  {
    id: "Education-Platform",
    caseStudy: "001",

    hero: {
      title: "Education Information System",
      highlight: "Campus Information System",
      subtitle:
        "A centralized campus information system designed to streamline academic administration and improve the overall digital experience for students, lecturers, and university staff.",
      image: "/assets/SS-ISES.png",
      tags: ["Laravel", "MySQL"],
    },

    overview: {
      role: "Full Stack Developer",
      duration: "6 Months",
      domain: "Education Technology",
      dataset: "University Academic Database",
      tools: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    },

    executiveSummary: {
      problem: `Managing academic administration manually can be inefficient, especially when different stakeholders require different levels of access and responsibilities. Students need an easy way to register courses and monitor their academic performance, lecturers require an efficient system for grading, and administrators need centralized tools to oversee academic operations.`,

      approach: `Developed a web-based Campus Information System that supports three user roles Administrator, Lecturer, and Student with role-based access control. The system implements full CRUD functionality, enabling administrators to manage academic data, lecturers to submit and update student grades, and students to enroll in courses (KRS) while monitoring their GPA (IPK) through an intuitive interface.`,

      outcome: `Successfully built a full-stack web application implementing authentication, role-based authorization, CRUD operations, and academic management workflows. The system provided a centralized platform for administrators, lecturers, and students to efficiently manage academic activities while improving the overall user experience.`,
    },

    workflow: [
      {
        icon: "design_services",
        title: "Requirement Analysis",
        description: "Conducted requirement analysis by identifying functional and non-functional requirements for each user role. Defined role-specific use cases for Administrators, Lecturers, and Students, including academic monitoring, grade management, course registration (KRS), and GPA (IPK) tracking.",
      },
      {
        icon: "account_tree",
        title: "System Design",
        description: "Designed the system architecture, database schema, and application workflows using Laravel as the backend framework and MySQL as the relational database. Implemented role-based access control to ensure secure and appropriate access for each user type.",
      },
      {
        icon: "code",
        title: "Application Development",
        description: "Developed a full-stack web application with authentication, authorization, and complete CRUD functionality. Implemented modules for student course registration, GPA visualization, lecturer grading, and administrative monitoring within a responsive web interface.",
      },
      {
        icon: "bug_report",
        title: "Testing & Validation",
        description: "Performed Black Box Testing to validate all functional requirements, ensuring each feature operated correctly according to user role permissions and system specifications.",
      },
      {
        icon: "cloud_upload",
        title: "Deployment",
        description: "Deployed the application to a web server, configured the production database, and verified that all modules, including authentication, academic management, and role-based access—functioned reliably in the production environment.",
      },
      {
        icon: "support_agent",
        title: "Maintenance",
        description: "Provided ongoing maintenance by fixing reported issues, improving system performance, and implementing feature enhancements based on user feedback to ensure the application's long-term reliability and usability.",
      },
    ],

    stack: [
      {
        icon: "code",
        title: "Laravel",
        description:
          "PHP framework for backend development and RESTful architecture.",
      },
      {
        icon: "database",
        title: "MySQL",
        description: "Relational database used to manage academic information.",
      },
      {
        icon: "web",
        title: "Bootstrap",
        description:
          "Responsive frontend framework for user interface development.",
      },
      {
        icon: "terminal",
        title: "PHP",
        description:
          "Server-side programming language powering the application.",
      },
    ],

    pipeline: `Route::middleware(['auth'])->group(function () {

    Route::resource('students', StudentController::class);

    Route::resource('courses', CourseController::class);

    Route::resource('lecturers', LecturerController::class);

});

public function store(Request $request)
{
    Student::create($request->all());

    return redirect()->back();
}`,

    challenges: [
      {
        title: "Role-Based Access Control",
        description:
          "Different users, including administrators, lecturers, and students—require distinct permissions and workflows, making secure access management a critical challenge.",
        solution:
          "Implemented a role-based access control (RBAC) system that ensures each user can only access features relevant to their responsibilities, such as academic monitoring for administrators, grade management for lecturers, and course registration and GPA tracking for students.",
      },
      {
        title: "Database Consistency",
        description: "Academic data such as student records, course registrations (KRS), and grades must remain accurate and synchronized to prevent inconsistencies across the system.",
        solution:
          "Designed a normalized MySQL database with relational constraints and implemented CRUD operations through Laravel, ensuring data integrity and consistency across all academic modules.",
      },
    ],

    insights: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],

    metrics: [
      {
        value: "20+",
        label: "System Modules",
      },
      {
        value: "500+",
        label: "Students Managed",
      },
      {
        value: "99.9%",
        label: "System Availability",
      },
      {
        value: "6",
        label: "Months Development",
      },
    ],

    nextProject: {
      title: "Inferred Production System and Dashboard",
      slug: "inferred-production",
    },
  },
  {
    id: "inferred-production",
    caseStudy: "002",

    hero: {
      title: "Inferred Production System",
      highlight: "Production Dashboard",
      subtitle:
        "An intelligent production monitoring system that combines real-time analytics and interactive dashboards to support data-driven decision making in manufacturing operations.",
      image: "/assets/SS-IP.png",
      tags: ["Python", "Dashboard"],
    },

    overview: {
      role: "Data Engineer",
      duration: "12 Months",
      domain: "Manufacturing Analytics",
      dataset: "Production & Sensor Data",
      tools: ["Python", "Pandas", "SQL", "Power BI", "Machine Learning"],
    },

    executiveSummary: {
      problem: `Oil production companies require accurate production forecasting and a centralized information system to monitor production performance and support operational decision-making. However, manual analysis makes it difficult to evaluate production trends efficiently.`,

      approach: `Developed a web-based information system and implemented the Inferred Production forecasting method to estimate future crude oil production. The application visualizes prediction results through interactive line charts, enabling users to evaluate model performance and analyze production trends effectively.`,

      outcome: `Successfully delivered a web application that enables users to monitor predicted crude oil production, compare forecasted and historical trends using line chart visualizations, and support more informed production planning and evaluation.`,
    },

    workflow: [
      {
        icon: "sensors",
        title: "Data Collection",
        description: "Collected historical crude oil production data from wells in the Rokan region, covering the 2023–2024 period. The dataset included well specifications, production records, and operational parameters required for forecasting and performance analysis.",
      },
      {
        icon: "cleaning_services",
        title: "Data Cleaning",
        description: "Preprocessed the dataset by resolving missing values, correcting data inconsistencies, standardizing formats, and converting data types to ensure accuracy and reliability for analysis and prediction.",
      },
      {
        icon: "sync_alt",
        title: "Data Integration",
        description: "Integrated the processed dataset into a web-based information system, enabling seamless access to production data through an interactive dashboard for monitoring well performance and operational metrics.",
      },
      {
        icon: "analytics",
        title: "Data Analysis",
        description: "Analyzed historical production trends and identified key factors influencing crude oil output. The analysis helped distinguish high-performing and low-performing wells while providing insights into production behavior over time.",
      },
      {
        icon: "dashboard",
        title: "Dashboard Development",
        description: "Designed and developed an interactive dashboard that visualizes production metrics, well performance, and forecasting results through informative charts and analytics, allowing users to explore production data efficiently.",
      },
      {
        icon: "monitoring",
        title: "Deployment & Monitoring",
        description: "Deployed the web-based information system with a CSV upload feature that allows users to submit new well data for crude oil production forecasting. The system generates prediction results and continuously supports production monitoring and performance evaluation.",
      },
    ],

    stack: [
      {
        icon: "code",
        title: "Python",
        description: "Used for data processing, automation, and analytics.",
      },
      {
        icon: "database",
        title: "SQL",
        description: "Database querying and production data management.",
      },
      {
        icon: "table_chart",
        title: "Pandas",
        description: "Data cleaning, transformation, and aggregation.",
      },
      {
        icon: "dashboard",
        title: "Power BI",
        description: "Interactive dashboards and operational reporting.",
      },
    ],

    pipeline: `import pandas as pd

production = pd.read_csv("production.csv")

production = production.drop_duplicates()

production = production.fillna(0)

summary = (
    production
    .groupby("machine")
    .agg({
        "output":"sum",
        "downtime":"mean"
    })
)

summary.to_csv("production_summary.csv")`,

    challenges: [
      {
        title: "Data Integration",
        description:
          "Crude oil production data originated from multiple sources and contained inconsistent formats, making it difficult to centralize and visualize the information within a single system.",
        solution:
          "Integrated the cleaned production dataset into a web-based information system, enabling seamless data synchronization and providing an interactive dashboard for monitoring well performance and production metrics.",
      },
      {
        title: "Production Forecasting",
        description: "Evaluating future crude oil production based solely on historical records is time-consuming and often leads to inefficient production planning.",
        solution:
          "Implemented the Inferred Production forecasting method with a CSV upload feature, allowing users to generate production predictions and compare forecast results with historical trends through interactive line charts.",
      },
    ],

    insights: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],

    metrics: [
      {
        value: "30%",
        label: "Efficiency Improvement",
      },
      {
        value: "25%",
        label: "Downtime Reduction",
      },
      {
        value: "10+",
        label: "Production Lines",
      },
      {
        value: "24/7",
        label: "Monitoring System",
      },
    ],

    nextProject: {
      title: "Traveling Mobile App",
      slug: "traveling-mobile-app",
    },
  },
  {
    id: "traveling-mobile-app",
    caseStudy: "003",

    hero: {
      title: "Traveling Mobile App",
      highlight: "Smart Travel Companion",
      subtitle:
        "A mobile application designed to simplify travel planning through personalized destination recommendations, itinerary management, and seamless booking experiences.",
      image: "/images/portfolios/jos.png",
      video: "/videos/josdemo.mp4",
      tags: ["Android Studio", "Machine Learning"],
    },

    overview: {
      role: "Mobile App Developer",
      duration: "8 Months",
      domain: "Travel Technology",
      dataset: "Tourism & User Preference Data",
      tools: ["Android Studio", "Firebase", "Python", "TensorFlow", "Google Maps API"],
    },

    executiveSummary: {
      problem: `Solo is one of the most popular tourist destinations in Central Java, Indonesia. However, visitors and tourists often struggle to identify attractions that match their personal interests and travel preferences, making trip planning less efficient.`,

      approach: `Collaborated with a team to develop Journey On Solo, a mobile travel application that provides destination information and personalized attraction recommendations based on user preferences. The application was designed to simplify trip planning by helping users discover places that best fit their interests.`,

      outcome: `The application successfully displayed personalized destination recommendations in a dedicated highlight section and integrated with Google Maps, allowing users to view detailed location information and navigate directly to recommended attractions.`,
    },

    workflow: [
      {
        icon: "travel_explore",
        title: "Requirement Analysis",
        description: "We analyzed the needs of tourists visiting Solo and identified the challenges they face in finding attractions that match their interests. Based on these findings, we defined the application's core features and recommendation criteria.",
      },
      {
        icon: "design_services",
        title: "UI/UX Design",
        description: "We designed an intuitive and user-friendly mobile interface by creating wireframes and user flows that prioritized a seamless travel planning experience.",
      },
      {
        icon: "smartphone",
        title: "Mobile Development",
        description: "We developed the mobile application and implemented essential features, including destination browsing, attraction details, and a personalized recommendation interface.",
      },
      {
        icon: "psychology",
        title: "Recommendation Engine",
        description: "We built a recommendation engine that suggests tourist destinations based on users' selected preferences, enabling a more personalized and relevant travel experience.",
      },
      {
        icon: "bug_report",
        title: "Testing",
        description: "We performed functional and usability testing to ensure the application operated reliably, resolved identified issues, and refined the overall user experience.",
      },
      {
        icon: "rocket_launch",
        title: "Deployment",
        description: "We deployed the application and integrated Google Maps, allowing users to view destination details and navigate directly to recommended attractions.",
      },
    ],

    stack: [
      {
        icon: "phone_iphone",
        title: "Flutter",
        description:
          "Cross-platform framework for building responsive mobile applications.",
      },
      {
        icon: "cloud",
        title: "Firebase",
        description:
          "Backend services including authentication, database, and storage.",
      },
      {
        icon: "psychology",
        title: "TensorFlow",
        description: "Machine learning framework for recommendation models.",
      },
      {
        icon: "map",
        title: "Google Maps API",
        description: "Interactive maps, navigation, and location services.",
      },
    ],

    pipeline: `import tensorflow as tf

import pandas as pd

places = pd.read_csv("tourism.csv")

users = pd.read_csv("users.csv")

recommendation_model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation="relu"),
    tf.keras.layers.Dense(64, activation="relu"),
    tf.keras.layers.Dense(10)
])

recommendation_model.compile(
    optimizer="adam",
    loss="mse"
)

recommendation_model.fit(users, places)`,

    challenges: [
      {
        title: "Recommendation Accuracy",
        description:
          "Tourists have different travel preferences, making it difficult to recommend destinations that are relevant to every user.",
        solution:
          "We developed a preference-based recommendation system that analyzes users' selected interests and highlights attractions that best match their travel preferences, enabling a more personalized travel experience.",
      },
      {
        title: "Google Maps Integration",
        description: "Finding the exact location of recommended attractions and navigating to them can be inconvenient when users have to switch between multiple applications.",
        solution:
          "We integrated Google Maps into the application, allowing users to view destination details and launch turn-by-turn navigation directly from the recommended attraction.",
      },
    ],

    insights: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],

    metrics: [
      {
        value: "1000+",
        label: "Destinations",
      },
      {
        value: "4.8★",
        label: "User Rating",
      },
      {
        value: "95%",
        label: "Recommendation Accuracy",
      },
      {
        value: "8",
        label: "Months Development",
      },
    ],

    nextProject: {
      title: "AI Vs Real Videos Detection System",
      slug: "ai-vs-real-videos-detection",
    },
  },
  {
    id: "ai-vs-real-videos-detection",
    caseStudy: "004",

    hero: {
      title: "AI vs Real Videos Detection System",
      highlight: "Deepfake Detection",
      subtitle:
        "A deep learning-based system designed to detect AI-generated deepfake videos, ensuring the authenticity of video content and combating misinformation.",
      image: "/images/portfolios/aireal.png",
      tags: ["Deep Learning", "Computer Vision", "TensorFlow"],
    },

    overview: {
      role: "Machine Learning Engineer",
      duration: "6 Months",
      domain: "Computer Vision",
      dataset: "Deepfake Detection Challenge Dataset",
      tools: ["Python", "TensorFlow", "OpenCV", "Keras", "NumPy"],
    },

    executiveSummary: {
      problem: `The rise of deepfake videos poses significant challenges in verifying the authenticity of video content, leading to misinformation and potential harm.`,
      approach: `By leveraging deep learning techniques and computer vision algorithms.`,
      outcome: `Developed a robust detection system capable of accurately identifying deepfake videos, contributing to the fight against digital misinformation.`,
    },

    workflow: [
      {
        icon: "video_library",
        title: "Data Collection",
        description: "Gathering a diverse dataset of real and deepfake videos.",
      },
      {
        icon: "cleaning_services",
        title: "Data Preprocessing",
        description: "Extracting frames, resizing, and normalizing video data.",
      },
      {
        icon: "analytics",
        title: "Model Development",
        description: "Designing and training deep learning models for detection.",
      },
      {
        icon: "verified",
        title: "Model Evaluation",
        description: "Assessing model performance using accuracy and F1 score.",
      },
      {
        icon: "cloud_upload",
        title: "Deployment",
        description: "Integrating the model into a user-friendly application.",
      },
    ],

    stack: [
      {
        icon: "code",
        title: "Python",
        description: "Primary programming language for data processing and model development.",
      },
      {
        icon: "psychology",
        title: "TensorFlow",
        description: "Deep learning framework used for model training and evaluation.",
      },
      {
        icon: "computer",
        title: "OpenCV",
        description: "Computer vision library for video processing and frame extraction.",
      },
      {
        icon: "table_chart",
        title: "Keras",
        description: "High-level neural networks API for building and training models.",
      },
    ],

    pipeline: `import cv2
import numpy as np

from tensorflow.keras.models import load_model

model = load_model("deepfake_detection_model.h5")

def preprocess_video(video_path):
    cap = cv2.VideoCapture(video_path)
    frames = []
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        frame = cv2.resize(frame, (224, 224))
        frame = frame / 255.0
        frames.append(frame)
    cap.release()
    return np.array(frames)

def predict_deepfake(video_path):
    frames = preprocess_video(video_path)
    predictions = model.predict(frames)
    avg_prediction = np.mean(predictions)
    return "Deepfake" if avg_prediction > 0.5 else "Real"`,

    challenges: [
      {
        title: "Data Imbalance",
        description:
          "The dataset contained a significantly higher number of real videos compared to deepfake videos, leading to potential bias in model training.",
        solution:
          "Implemented data augmentation techniques and used class weighting during model training to address the imbalance and improve detection accuracy.",
      },
      {
        title: "Model Generalization",
        description:
          "Ensuring the model performs well on unseen data and is not overfitting to the training set.",
        solution:
          "Used cross-validation techniques and regularization methods to improve the model's generalization capabilities.",
      }
    ],

    insights: [
      "The importance of a diverse and representative dataset for training robust deep learning models.",
      "The effectiveness of data augmentation and class weighting in addressing data imbalance issues.",
      "The need for continuous model evaluation and updates to maintain high detection accuracy in the face of evolving deepfake techniques.",
    ],

    metrics: [
      {
        value: "92%",
        label: "Detection Accuracy",
      },
      {
        value: "0.89",
        label: "F1 Score",
      },
      {
        value: "1500+",
        label: "Videos Analyzed",
      },
      {
        value: "6",
        label: "Months Development",
      },
    ],
    nextProject: {
      title: "World Cup Match Prediction",
      slug: "world-cup-prediction",
    },
  },
  {
    id: "world-cup-prediction",
    caseStudy: "005",

    hero: {
      title: "World Cup",
      highlight: "Match Prediction",
      subtitle:
        "A machine learning project that predicts football match outcomes by leveraging historical match statistics, feature engineering, and predictive modeling techniques.",
      image: "/images/portfolios/wc2026.png",
      tags: ["Machine Learning", "Sports Analytics", "XGBoost"],
    },

    overview: {
      role: "Machine Learning Engineer",
      duration: "4 Weeks",
      domain: "Sports Analytics",
      dataset: "StatsBomb Open Data",
      tools: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "Matplotlib"],
    },

    executiveSummary: {
      problem: `World Cup match prediction is a challenging task due to the complexity and unpredictability of football games.`,

      approach: `By leveraging historical match statistics and advanced machine learning techniques.`,

      outcome: `Achieved high accuracy in predicting match outcomes, providing valuable insights for teams and fans.`,
    },

    workflow: [
      {
        icon: "database",
        title: "Data Collection",
        description: "Collectiong Data from StatsBomb Open Data API and other sources.",
      },
      {
        icon: "cleaning_services",
        title: "Data Cleaning",
        description: "Cleaning and transforming the data for analysis and modeling.",
      },
      {
        icon: "analytics",
        title: "Exploratory Data Analysis",
        description: "Exploring the data to understand its structure, patterns, and insights.",
      },
      {
        icon: "dataset",
        title: "Feature Engineering",
        description: "Creating and selecting relevant features for the machine learning model.",
      },
      {
        icon: "model_training",
        title: "Model Training",
        description: "Constructing and training the machine learning model using XGBoost, CatBoost, Random Forest, and other algorithms.",
      },
      {
        icon: "verified",
        title: "Model Evaluation",
        description: "Evaluating the performance of the trained model using appropriate metrics and validation techniques.",
      },
    ],

    stack: [
      {
        icon: "code",
        title: "Python",
        description:
          "Primary programming language for data processing and machine learning.",
      },
      {
        icon: "table_chart",
        title: "Pandas",
        description: "Data manipulation, transformation, and preprocessing.",
      },
      {
        icon: "psychology",
        title: "Scikit-Learn",
        description:
          "Machine learning utilities, preprocessing, and evaluation.",
      },
      {
        icon: "bolt",
        title: "XGBoost",
        description:
          "Gradient boosting algorithm used for predictive modeling.",
      },
    ],

    pipeline: `import pandas as pd

from sklearn.model_selection import train_test_split

from xgboost import XGBClassifier

df = pd.read_csv("worldcup_matches.csv")

X = df.drop(columns=["result"])
y = df["result"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

model = XGBClassifier(
    n_estimators=300,
    learning_rate=0.05,
    max_depth=6
)

model.fit(X_train, y_train)

predictions = model.predict(X_test)`,

    challenges: [
      {
        title: "Data Quality",
        description:
          "Events data from StatsBomb Open Data contains 8 million rows that have missing values with 90-99% of the data being empty.",
        solution:
          "Transformed the data by merging it with other matches data and creating new features to improve the model's predictive power.",
      },
      {
        title: "Feature Selection",
        description: "Selecting the most relevant features for the machine learning model.",
        solution:
          "Utilized feature importance techniques and domain knowledge to identify and select the most impactful features.",
      },
    ],

    insights: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],

    metrics: [
      {
        value: "84%",
        label: "Prediction Accuracy",
      },
      {
        value: "0.91",
        label: "ROC-AUC Score",
      },
      {
        value: "0.83",
        label: "F1 Score",
      },
      {
        value: "2400+",
        label: "Matches Analyzed",
      },
    ],

    nextProject: {
      title: "AI vs Real Video Detection System",
      slug: "ai-vs-real-videos-detection",
    },
  },
];
