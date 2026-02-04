# Temesgen Portfolio
Data Science Portfolio

<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="temesgen-tewolde" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://qa.linkedin.com/in/temesgen-tewolde?trk=profile-badge">Temesgen Tewolde</a></div>

---

## [Project 1: Goodreads Book Sale Prediction](https://github.com/codeteme/goodreads-ml-model)
#### Tags: *Deep Learning*, *Natural Language Processing*, *Web Scraping*

This project applies machine learning to the publishing industry by predicting book sales through proxy metrics and metadata analysis, addressing the lack of publicly available sales data.

* **Custom Data Pipeline**: Engineered a robust web scraping solution to collect data from Goodreads following the retirement of their official API, capturing a diverse dataset of book attributes and user reviews.
* **Predictive Modeling**: Developed and trained **Deep Learning** models to forecast sales potential, serving as a tool for publishers and authors to evaluate market viability.
* **NLP & Sentiment Analysis**: Utilized Natural Language Processing to extract features from reader reviews and book descriptions, converting unstructured text into predictive signals.
* **End-to-End Lifecycle**: Managed the complete data science workflow, including advanced data cleaning, exploratory data analysis (EDA), feature engineering, and model evaluation.

<img src="/images/pexels-olenka-sergienko-3646172.jpg" width="400" height="400">

---

## [Project 2: TfL Real-Time Streaming Pipeline](https://github.com/codeteme/realtime-transit-pipeline)
#### Tags: *Data Engineering*, *Stream Processing*, *Cloud Infrastructure*

This project ingests live arrival data from Transport for London (TfL) using a modern data engineering stack to move data from raw API feeds to live analytics.

* **Streaming Ingestion**: Continuous data pull from the TfL API published to **Apache Kafka** topics.
* **Medallion Architecture**: Persists raw snapshots to a **Bronze** layer and uses **PySpark** to clean and transform data into curated **Gold** Parquet files.
* **Orchestration**: Managed by **Apache Airflow**, which chains tasks for ingestion, consumption, transformation, and analysis.
* **Real-Time Analytics**: Features a **Streamlit** dashboard with auto-refreshing visualizations, including wait time distributions, station activity heatmaps, and live train positions.
* **Infrastructure**: Fully containerized using **Docker Compose**, including Kafka, Zookeeper, Postgres, and Spark-integrated Airflow.

<img src="screenshots/dashboard_analytics.png" width="400" height="400">

---

## [Project 3: Addis Order - Restaurant Management System](https://github.com/codeteme/addis-order)
#### Tags: *Full-Stack Development*, *Database Management*, *Product Engineering*

Addis Order is a comprehensive restaurant management system tailored for businesses with meat-based menus. It bridges the gap between front-of-house waitstaff and back-of-house butchers and kitchen staff through real-time order and inventory synchronization.

* **Order & Menu Management**: Streamlined CRUD operations for orders and menu items with automatic total calculations and status tracking (active vs. completed).
* **Inventory Tracking**: Sophisticated system to monitor stock quantities, reorder levels, and expiration dates, associated with specific suppliers.
* **Modern UI/UX**: Built with **Bootstrap 5** and **Jinja2 templates**, featuring dynamic table sorting and a responsive design for various devices.
* **Tech Stack**: Powered by a **Flask (Python)** backend and a **PostgreSQL** database, managed with **Docker** and deployed via **Render**.

<img src="/images/restaurant_management.jpg" width="400" height="400">


---

## [Project 4: LinkedIn Demographic Research Tool](https://github.com/codeteme/LinkedInDemoResearch)
#### Tags: *Computational Social Science*, *Automation*, *API Integration*

This project develops an automated methodology for "Digital Census" research by leveraging the LinkedIn Campaign Manager API to retrieve aggregate audience counts for specific demographic segments.

* **Demographic Extraction**: Programmatically queries LinkedIn’s advertising platform to gather population estimates based on locale, geography, gender, age, and professional seniority.
* **Complex Boolean Logic**: Implements a robust query builder supporting nested **AND**, **OR**, and **NOT** operators, allowing researchers to define high-granularity target audiences.
* **Automated Data Collection**: Bypasses the manual effort of the Campaign Manager UI by using Python scripts to iteratively fetch and structure data for large-scale statistical analysis.
* **Research Application**: Provides a scalable way to study professional demographics and workforce trends across different global regions without the need for traditional survey-based sampling.

<img src="/images/index.png" width="400" height="400">

---


## [Project 5: Gebeta (Mancala)](https://github.com/codeteme/Gebeta)
#### Tags: *Artificial Intelligence*, *Python*, *Algorithms*

Gebeta (also known as Mancala) is one of the world's oldest strategy board games. This project is a digital implementation featuring a functional Graphical User Interface (GUI) and an intelligent AI opponent.

* **AI Implementation**: Features a decision-making engine powered by the **Minimax Algorithm with Alpha-Beta Pruning**, allowing the computer to anticipate moves and optimize gameplay.
* **Heuristic Evaluation**: The AI utilizes a static evaluation function that calculates the score differential between players' "big buckets" to determine the most advantageous move in any given state.
* **Game Logic**: Implements complex game rules, including the "sowing" of marbles, capturing mechanics, and bonus turns, all managed through an imperative computing framework.
* **User Experience**: Supports both local 1v1 multiplayer and single-player modes against the computer with a responsive interface built for smooth turn transitions.



<img src="/images/index.jpg" width="400" height="400">

---

## [Project 6: Vaccine Hesitancy - Religious Correlates](https://github.com/codeteme/130422-V2)
#### Tags: *Statistical Analysis*, *Public Health*, *Computational Social Science*

This study investigates the influence of religious affiliation on COVID-19 vaccine uptake in the United States, utilizing quantitative methods to identify salient factors in public health behavior.

* **Comparative Analysis**: Evaluates the variance in vaccination rates between religious followers and non-followers, with a specific focus on Islam, Christianity, and Judaism.
* **Quantitative Exploration**: Employs statistical techniques to comprehend the demographics of hesitant groups and the ideologies driving their health decisions.
* **Policy Insights**: Provides data-driven conclusions intended for health communicators and policymakers to develop targeted communication campaigns and mandate policies.
* **Methodological Rigor**: Combines cross-sectional data analysis with a qualitative understanding of religious doctrines to provide a holistic view of vaccine sentiment.


<img src="/images/pexels-tara-winstead-7722844.jpg" width="400" height="400">
