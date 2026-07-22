export const bootcamp = [
  {
    id: 1,
    slug: "cafe-sales-preprocessing",
    title: "Cafe Sales Data Preprocessing",
    category: "Data Cleaning",
    thumbnail: "/images/projects/cafe-sales-preprocessing.png",

    technologies: ["Python", "Pandas", "NumPy", "Jupyter Notebook"],

    github: "",
    demo: "",
    report: "",

    overview:
      "Transforming noisy transactional data into a reliable analytical asset through comprehensive preprocessing and feature engineering.",

    challenge_solution: [
      {
        challenge:
          "The dataset contained hidden missing values, inconsistent categories, and invalid transaction records.",
        solution:
          "Developed an end-to-end preprocessing pipeline using Python to clean, standardize, and validate the dataset.",
      },
      {
        challenge:
          "Incorrect data types and business-sensitive outliers reduced analytical reliability.",
        solution:
          "Applied business-driven imputation, corrected data types, and validated outliers instead of blindly removing anomalies.",
      },
      {
        challenge:
          "Raw transactional data lacked meaningful analytical features.",
        solution:
          "Engineered additional features to support visualization and machine learning.",
      },
    ],

    purpose:
      "Transform unreliable transactional data into a trustworthy dataset for business analytics.",

    objective:
      "Clean, validate, and enrich raw sales data using Python-based preprocessing techniques.",

    outcome:
      "Produced an analysis-ready dataset with improved consistency, reduced analytical bias, and engineered features suitable for reporting and predictive analytics.",

    businessQuestions: [
      "Which preprocessing techniques improve overall data quality?",
      "How can missing values and inconsistencies affect business insights?",
      "What additional features can support future analytics?",
    ],

    keyFindings: [
      "Data quality significantly improved after preprocessing.",
      "Feature engineering enhanced downstream analytical capability.",
      "Business rules prevented misleading analytical results.",
    ],

    recommendations: [
      "Implement automated data validation before analysis.",
      "Standardize categorical values during data collection.",
      "Regularly monitor data quality metrics.",
    ],

    limitations:
      "The preprocessing pipeline was designed specifically for the available dataset and may require adjustments for different business environments.",
  },
  {
    id: 2,
    slug: "cafe-sales-data-visualization",
    title: "Cafe Sales Data Visualization",
    subtitle: "Exploratory Data Analysis & Business Insight",
    category: "Data Visualization",

    image: "/images/projects/cafe-sales-visualization.png",

    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],

    github: "",
    dashboard: "",
    report: "",

    overview:
      "This project explores transactional sales data from a café business to uncover customer purchasing behavior, sales trends, and operational performance. Using exploratory data analysis (EDA) and visual storytelling, the project transforms raw sales records into actionable business insights that support data-driven decision making.",

    challengeSolution: [
      {
        challenge:
          "Raw transaction tables made purchasing patterns difficult to identify.",
        solution:
          "Performed exploratory data analysis (EDA) and visualized customer purchasing behavior using Python.",
      },
      {
        challenge:
          "Sales fluctuations lacked clear business explanations across products and time periods.",
        solution:
          "Analyzed seasonal trends, product performance, and revenue distribution through statistical visualizations.",
      },
      {
        challenge:
          "Business insights were scattered across multiple variables and difficult to communicate.",
        solution:
          "Designed intuitive visualizations that transformed complex transactional data into actionable business insights.",
      },
    ],

    purpose:
      "Transform transactional sales records into meaningful business insights that support operational and strategic decision-making.",

    objective:
      "Perform exploratory data analysis to identify customer purchasing behavior, sales trends, seasonal patterns, and product performance through statistical visualization.",

    outcome:
      "Successfully revealed purchasing patterns, sales distributions, customer behavior, and operational trends through visual analytics, enabling faster and more informed business decisions.",

    businessQuestions: [
      "Which products contribute the most to total sales?",
      "How do sales fluctuate over time?",
      "What purchasing patterns can be observed from customers?",
      "Are there seasonal trends affecting sales performance?",
      "Which business areas present opportunities for improvement?",
    ],

    keyFindings: [
      "Customer purchasing behavior varies significantly across product categories.",
      "Several products consistently generate the highest revenue contribution.",
      "Sales exhibit noticeable fluctuations over different time periods.",
      "Visual analysis makes hidden business trends easier to identify than raw transactional tables.",
    ],

    recommendations: [
      "Prioritize inventory planning for high-performing products.",
      "Monitor seasonal demand to optimize stock management.",
      "Use customer purchasing trends to support targeted promotions.",
      "Continuously monitor sales performance through interactive dashboards.",
    ],

    limitations:
      "The analysis is based solely on available transactional sales data. External factors such as promotions, holidays, weather conditions, or competitor activities were not included.",

    featured: false,
  },
  {
    id: 3,
    slug: "olist-ecommerce-sql-analysis",
    title: "Olist E-Commerce SQL Analysis",
    subtitle: "Business Intelligence Using SQL",
    category: "SQL Analytics",

    image: "/images/projects/olist-sql-analysis.png",

    technologies: ["SQL", "PostgreSQL", "DBeaver"],

    github: "",
    dashboard: "",
    report: "",

    overview:
      "This project analyzes the Brazilian Olist e-commerce dataset using SQL to uncover business insights related to customer behavior, sales performance, seller activity, and delivery operations. By integrating multiple relational tables, the analysis transforms fragmented transactional data into meaningful business intelligence that supports strategic decision-making.",

    challengeSolution: [
      {
        challenge:
          "Business information was distributed across multiple normalized tables, making comprehensive analysis difficult.",
        solution:
          "Integrated customers, orders, products, sellers, payments, and reviews using SQL JOINs to build a unified analytical dataset.",
      },
      {
        challenge:
          "Complex business questions required more than basic SQL queries.",
        solution:
          "Applied Common Table Expressions (CTEs), window functions, subqueries, and aggregations to perform advanced analytical queries.",
      },
      {
        challenge:
          "Large transactional datasets made extracting business insights time-consuming and inefficient.",
        solution:
          "Optimized SQL queries to efficiently analyze customer purchasing behavior, seller performance, revenue trends, and delivery performance.",
      },
    ],

    purpose:
      "Transform relational e-commerce data into actionable business insights using SQL.",

    objective:
      "Analyze customer behavior, sales performance, logistics efficiency, and seller contribution by leveraging advanced SQL techniques on a relational database.",

    outcome:
      "Successfully generated business insights covering revenue trends, customer purchasing behavior, seller performance, and delivery efficiency while demonstrating advanced SQL problem-solving skills.",

    businessQuestions: [
      "Which sellers generate the highest revenue?",
      "How do customer purchasing behaviors vary across regions?",
      "Which product categories contribute the most to sales?",
      "How efficient is the delivery process?",
      "What factors influence customer review scores?",
    ],

    keyFindings: [
      "Sales performance varies significantly across sellers and product categories.",
      "Delivery delays negatively affect customer review scores.",
      "A small number of sellers contribute a disproportionately large share of total revenue.",
      "Customer purchasing behavior differs across geographical regions.",
    ],

    recommendations: [
      "Improve logistics performance to reduce delivery delays.",
      "Support high-performing sellers with strategic business programs.",
      "Optimize inventory for high-demand product categories.",
      "Use customer purchasing behavior to personalize marketing campaigns.",
    ],

    limitations:
      "The analysis relies on historical transactional data and does not incorporate external factors such as promotions, economic conditions, or competitor activities that may influence purchasing behavior.",

    featured: false,
  },
  {
    id: 4,
    slug: "superstore-sales-dashboard",
    title: "Superstore Sales Dashboard",
    subtitle: "Interactive Business Intelligence Dashboard",
    category: "Business Intelligence",

    image: "/images/projects/superstore-dashboard.png",

    technologies: ["Power BI", "DAX", "Power Query", "Excel"],

    github: "",
    dashboard: "",
    report: "",

    overview:
      "This project develops an interactive Power BI dashboard to monitor sales performance, profitability, customer segments, and regional performance using the Superstore dataset. Instead of presenting static reports, the dashboard enables stakeholders to explore business performance dynamically and uncover actionable insights through interactive visualizations.",

    challengeSolution: [
      {
        challenge:
          "Business performance was scattered across thousands of transactional records, making strategic analysis difficult.",
        solution:
          "Designed an interactive Power BI dashboard that consolidates sales, profit, customer, and regional performance into a single executive view.",
      },
      {
        challenge:
          "Decision-makers needed faster access to key business metrics without manually analyzing raw data.",
        solution:
          "Developed dynamic KPIs, DAX measures, slicers, and drill-down visualizations for real-time business exploration.",
      },
      {
        challenge:
          "Hidden sales trends and profitability issues were difficult to identify using traditional reports.",
        solution:
          "Built interactive visualizations highlighting regional performance, product categories, customer segments, and profit distribution.",
      },
    ],

    purpose:
      "Transform transactional sales data into an interactive business intelligence solution that supports strategic decision-making.",

    objective:
      "Develop an executive dashboard that enables stakeholders to monitor sales performance, profitability, customer segmentation, and regional trends through interactive visual analytics.",

    outcome:
      "Delivered a comprehensive Power BI dashboard that provides real-time business insights, improves reporting efficiency, and supports data-driven decision-making through intuitive visualizations.",

    businessQuestions: [
      "Which regions generate the highest sales and profit?",
      "Which product categories contribute the most to business performance?",
      "How does profitability vary across customer segments?",
      "Which products consistently underperform?",
      "What business areas should be prioritized for improvement?",
    ],

    keyFindings: [
      "Sales and profitability vary considerably across regions and customer segments.",
      "Several high-sales products generate relatively low profit margins.",
      "Regional analysis reveals significant differences in business performance.",
      "Interactive dashboards enable faster identification of business opportunities than static reports.",
    ],

    recommendations: [
      "Prioritize high-profit product categories while reviewing low-margin products.",
      "Develop region-specific sales strategies based on performance differences.",
      "Continuously monitor KPIs through interactive dashboards.",
      "Utilize customer segmentation insights to optimize marketing campaigns.",
    ],

    limitations:
      "The dashboard is built using historical sales transactions and does not incorporate external factors such as market trends, competitor activities, or promotional campaigns that may influence business performance.",

    featured: false,
  },
  {
    id: 5,
    slug: "ab-testing-analysis",
    title: "A/B Testing Analysis",
    subtitle: "Statistical Experimentation for Business Decision Making",
    category: "Experimentation & Statistics",

    image: "/images/projects/ab-testing-analysis.png",

    technologies: ["Python", "Pandas", "SciPy", "Jupyter Notebook"],

    github: "",
    dashboard: "",
    report: "",

    overview:
      "This project evaluates the effectiveness of two product variants using statistical A/B testing. Rather than relying solely on differences in conversion metrics, the analysis applies hypothesis testing to determine whether observed improvements are statistically significant and suitable for business implementation.",

    challengeSolution: [
      {
        challenge:
          "The business needed to determine whether Variant B genuinely outperformed Variant A or if the observed differences occurred by chance.",
        solution:
          "Performed statistical hypothesis testing to measure the significance of differences between the two variants.",
      },
      {
        challenge:
          "Percentage improvements alone could lead to misleading business decisions without statistical validation.",
        solution:
          "Calculated confidence intervals and p-values to distinguish meaningful improvements from random variation.",
      },
      {
        challenge:
          "The dataset contained synthetic characteristics that could influence statistical interpretation.",
        solution:
          "Validated assumptions, identified dataset limitations, and interpreted experimental results within an appropriate business context.",
      },
    ],

    purpose:
      "Evaluate whether a new product variant delivers measurable business improvements supported by statistical evidence.",

    objective:
      "Compare user behavior between two experimental groups using statistical hypothesis testing and recommend whether the new variant should be deployed.",

    outcome:
      "Successfully identified which business metrics demonstrated statistically significant improvements, enabling evidence-based decision making while minimizing the risk of false conclusions.",

    businessQuestions: [
      "Does Variant B significantly outperform Variant A?",
      "Which business metrics show statistically significant improvements?",
      "Should the company deploy the new product variant?",
      "Are the observed improvements caused by the experiment or random variation?",
    ],

    keyFindings: [
      "Not every improvement in business metrics was statistically significant.",
      "Hypothesis testing successfully differentiated genuine improvements from random fluctuations.",
      "Statistical significance provided stronger evidence for decision making than percentage differences alone.",
      "Proper assumption validation prevented misleading business conclusions.",
    ],

    recommendations: [
      "Deploy the new variant only when primary KPIs demonstrate statistical significance.",
      "Validate statistical assumptions before interpreting experimental results.",
      "Increase sample size when experimental results remain inconclusive.",
      "Continue monitoring business performance after deployment to verify long-term impact.",
    ],

    limitations:
      "The analysis is based on a simulated A/B testing dataset and does not account for external factors such as marketing campaigns, seasonality, or user demographics that may influence real-world experimental outcomes.",

    featured: false,
  },
  {
    id: 6,
    slug: "airline-customer-satisfaction-analysis",
    title: "Airline Customer Satisfaction Analysis",
    subtitle: "Machine Learning for Customer Experience Optimization",
    category: "Machine Learning",

    image: "/images/projects/airline-customer-satisfaction.png",

    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "CatBoost",
      "Matplotlib",
      "Seaborn",
      "Power BI",
    ],

    github: "",
    dashboard: "",
    report: "",

    overview:
      "This project analyzes airline customer satisfaction by combining exploratory data analysis, statistical techniques, and machine learning. The objective is to identify the operational and service factors that most influence passenger satisfaction and provide data-driven recommendations to improve the overall customer experience.",

    challengeSolution: [
      {
        challenge:
          "Customer satisfaction is influenced by multiple operational and service-related factors, making it difficult to identify the true drivers of satisfaction.",
        solution:
          "Performed exploratory data analysis and trained machine learning models to quantify the impact of each service attribute on customer satisfaction.",
      },
      {
        challenge:
          "The dataset contained missing values, skewed numerical distributions, and mixed categorical features that could reduce model performance.",
        solution:
          "Applied business-oriented preprocessing, handled missing values appropriately, encoded categorical variables, and engineered features before model development.",
      },
      {
        challenge:
          "Business stakeholders required actionable recommendations rather than prediction results alone.",
        solution:
          "Analyzed feature importance and simulated service improvement scenarios to prioritize operational initiatives with the greatest potential business impact.",
      },
    ],

    purpose:
      "Identify the key factors driving customer satisfaction and support data-driven improvements to airline service quality.",

    objective:
      "Develop an interpretable machine learning model capable of predicting customer satisfaction while uncovering the operational factors that most influence passenger experience.",

    outcome:
      "Successfully identified the most influential service attributes affecting customer satisfaction and generated business recommendations capable of significantly improving predicted customer satisfaction levels.",

    businessQuestions: [
      "Which airline services contribute most to customer satisfaction?",
      "How do departure and arrival delays affect passenger experience?",
      "Which operational improvements should be prioritized to increase customer satisfaction?",
      "Can machine learning accurately predict customer satisfaction based on service quality?",
    ],

    keyFindings: [
      "Inflight Wi-Fi Service and Online Boarding were the strongest predictors of customer satisfaction.",
      "Flight delays negatively impacted passenger experience, particularly for customers experiencing significant delays.",
      "Operational convenience contributed more to customer satisfaction than supporting services such as baggage handling.",
      "Simulation results indicated that improving high-impact services could substantially increase overall customer satisfaction.",
    ],

    recommendations: [
      "Prioritize improvements to Online Boarding and Inflight Wi-Fi Service.",
      "Reduce operational delays through better scheduling and resource management.",
      "Allocate investments toward services with the highest feature importance.",
      "Continuously monitor customer feedback and retrain predictive models as service quality evolves.",
    ],

    limitations:
      "The analysis is based on historical customer survey and operational data. External factors such as ticket prices, airline competition, passenger expectations, and weather conditions were not included in the predictive model.",

    featured: true,
  },
  {
    id: 7,
    slug: "people-analytics-job-change-prediction",
    title: "People Analytics: Job Change Prediction",
    subtitle: "Predictive Workforce Analytics Using Machine Learning",
    category: "People Analytics",

    image: "/images/projects/people-analytics.png",

    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "CatBoost",
      "SHAP",
      "Matplotlib",
      "Seaborn",
      "Power BI",
    ],

    github: "",
    dashboard: "",
    report: "",

    overview:
      "This project explores employee turnover behavior using People Analytics and Machine Learning. By combining exploratory data analysis, predictive modeling, and business interpretation, the project identifies employees with a high likelihood of changing jobs and uncovers the key factors driving turnover. The findings support HR teams in developing proactive recruitment and retention strategies.",

    challengeSolution: [
      {
        challenge:
          "Employee turnover is influenced by multiple demographic, educational, and career-related factors, making it difficult to identify high-risk candidates using traditional analysis.",
        solution:
          "Performed exploratory data analysis and developed machine learning models to identify turnover patterns and predict employees with a high likelihood of changing jobs.",
      },
      {
        challenge:
          "The HR dataset contained extensive missing values, inconsistent categorical variables, and ordinal features stored as text.",
        solution:
          "Applied business-oriented preprocessing, missing value treatment, categorical encoding, feature engineering, and data transformation to improve analytical quality.",
      },
      {
        challenge:
          "HR stakeholders required interpretable predictions rather than black-box classification results.",
        solution:
          "Analyzed feature importance to explain the key drivers of job change and translated model outputs into actionable HR retention strategies.",
      },
    ],

    purpose:
      "Help organizations proactively identify employees at risk of job change and support data-driven workforce planning.",

    objective:
      "Develop an interpretable machine learning model that predicts employee job change while identifying the most influential factors affecting workforce retention.",

    outcome:
      "Successfully developed a predictive model capable of identifying high-risk employees, revealed the primary drivers of job change, and produced practical business recommendations to strengthen employee retention strategies.",

    businessQuestions: [
      "Which employees are most likely to change jobs?",
      "What factors contribute most to employee turnover?",
      "How do experience, education, and city development influence job change behavior?",
      "How can predictive analytics improve workforce planning and retention strategies?",
    ],

    keyFindings: [
      "Approximately one in four employees demonstrated a high likelihood of changing jobs.",
      "Employees from cities with lower development indices showed a greater tendency to seek new employment opportunities.",
      "Candidates with limited relevant experience and early-career professionals exhibited the highest turnover risk.",
      "City Development Index, Relevant Experience, and Experience were among the most influential predictors of job change.",
    ],

    recommendations: [
      "Develop targeted retention programs for employees identified as high-risk by the predictive model.",
      "Strengthen career development and learning opportunities for early-career professionals.",
      "Incorporate predictive analytics into recruitment, workforce planning, and employee engagement initiatives.",
      "Use model predictions as an early warning system to support HR decision-making rather than replace human judgment.",
    ],

    limitations:
      "The dataset represents participants enrolled in a data science training program and may not fully reflect employee behavior across different industries, countries, or organizational cultures. Additional organizational variables such as salary, employee engagement, and managerial support were not available.",

    featured: true,
  },
  {
    id: 8,
    slug: "fifa-world-cup-match-analysis-prediction",
    title: "FIFA World Cup Match Analysis & Prediction",
    subtitle: "Sports Analytics & Match Outcome Prediction",
    category: "Sports Analytics",

    image: "/images/projects/fifa-world-cup-analysis.png",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "CatBoost",
      "Optuna",
      "SciPy",
      "StatsBomb API",
      "Matplotlib",
      "Seaborn",
      "Power BI",
    ],

    github: "",
    dashboard: "",
    report: "",

    overview:
      "This project analyzes professional football performance data to identify the key factors influencing match outcomes and predict winning probabilities. More than eight million event-level records from the StatsBomb API were transformed into team-level performance metrics through data engineering, statistical analysis, and machine learning, providing data-driven insights into the characteristics of successful teams.",

    challengeSolution: [
      {
        challenge:
          "Football event data consisted of over eight million records distributed across multiple datasets, making direct analysis computationally intensive and difficult to interpret.",
        solution:
          "Designed a data processing pipeline to aggregate event-level records into structured team-level performance metrics suitable for statistical analysis and machine learning.",
      },
      {
        challenge:
          "Key performance indicators such as xG Difference, Shot Accuracy, and Team Performance Metrics were not directly available in the raw data.",
        solution:
          "Performed feature engineering to derive advanced football metrics by combining multiple event attributes into meaningful analytical features.",
      },
      {
        challenge:
          "Traditional match statistics alone could not reliably explain or predict match outcomes.",
        solution:
          "Applied statistical hypothesis testing to identify significant winning factors and developed machine learning models optimized through hyperparameter tuning to predict match results.",
      },
    ],

    purpose:
      "Identify the performance indicators that contribute most to football match victories and develop a predictive model that supports data-driven match analysis.",

    objective:
      "Transform large-scale football event data into analytical features, evaluate statistically significant winning factors, and build machine learning models capable of predicting match outcomes.",

    outcome:
      "Successfully processed more than eight million football events into an analytical dataset, identified the most influential performance indicators associated with winning, and developed an optimized predictive model capable of estimating football match outcomes.",

    businessQuestions: [
      "Which team performance metrics have the greatest influence on winning football matches?",
      "Are there statistically significant differences between winning, drawing, and losing teams?",
      "Can machine learning accurately predict football match outcomes using team performance statistics?",
      "Which advanced metrics provide the strongest predictive power?",
    ],

    keyFindings: [
      "Expected Goals (xG Difference) was the strongest indicator of match outcomes.",
      "Shot Accuracy and Shots on Target demonstrated statistically significant differences between winning and losing teams.",
      "Feature engineering substantially improved model interpretability and predictive performance.",
      "Machine learning models successfully estimated match outcomes using advanced football performance metrics.",
    ],

    recommendations: [
      "Prioritize improving chance creation (xG) and shooting efficiency rather than focusing solely on possession.",
      "Use advanced performance indicators for tactical evaluation and opponent analysis.",
      "Continuously retrain predictive models with recent tournament data to maintain predictive performance.",
      "Incorporate player-level statistics and tactical formations in future analyses to further improve model accuracy.",
    ],

    limitations:
      "The predictive model is based on historical football event data and does not account for injuries, player availability, tactical adjustments, weather conditions, or other real-time factors that may influence match outcomes.",

    featured: true,
  },
];
