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
      problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,

      approach: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,

      outcome: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.`,
    },

    workflow: [
      {
        icon: "design_services",
        title: "Requirement Analysis",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "account_tree",
        title: "System Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "code",
        title: "Application Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "bug_report",
        title: "Testing & Validation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "cloud_upload",
        title: "Deployment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "support_agent",
        title: "Maintenance",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
        title: "System Integration",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        solution:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      },
      {
        title: "Database Consistency",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        solution:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
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
      problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,

      approach: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,

      outcome: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.`,
    },

    workflow: [
      {
        icon: "sensors",
        title: "Data Collection",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "cleaning_services",
        title: "Data Cleaning",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "sync_alt",
        title: "Data Integration",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "analytics",
        title: "Data Analysis",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "dashboard",
        title: "Dashboard Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "monitoring",
        title: "Deployment & Monitoring",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        solution:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      },
      {
        title: "Real-Time Monitoring",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        solution:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
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
      problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,

      approach: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,

      outcome: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.`,
    },

    workflow: [
      {
        icon: "travel_explore",
        title: "Requirement Analysis",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "design_services",
        title: "UI/UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "smartphone",
        title: "Mobile Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "psychology",
        title: "Recommendation Engine",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "bug_report",
        title: "Testing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "rocket_launch",
        title: "Deployment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        solution:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      },
      {
        title: "Real-Time Synchronization",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        solution:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
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
