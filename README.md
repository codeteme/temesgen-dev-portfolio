# Temesgen Portfolio
Data Science Portfolio

<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="temesgen-tewolde" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://qa.linkedin.com/in/temesgen-tewolde?trk=profile-badge">Temesgen Tewolde</a></div>

---

## [Project 1: Book Sale Prediction](https://github.com/codeteme/goodreads_sales_prediction)
#### Tags: *Deep Learning*, *Natural Language Processing*, *Web Scraping*

Machine Learning has been used widely to make predictions of consumer products, especially music and movies. However, it has not been widely used to make book related predictions, even though books are widely sold consumer products. In this notebook, we make use of machine learning to predict book sales using several book attributes. We believe this model can be useful for many including publishers, authors, and book shops.

In our literature review, we came across two papers that examined other aspects of the whole book ecosystem i.e. users and reviewers. Both papers made use of Goodreads, the most popular book review platform. We also chose the website because of the sheer number of books it tracks and are discussed. Getting the data, however, was a very challenging task and might also explain lack of interest in building book related models. Goodreads officially retired its API service two years ago, so we had to resort to scraping the page in a very inconvenient way. Fortunately, we succeeded.

Book sale records are not publicly available. There are companies that have the data but they sell it at very high prices. In this project, we want to develop proxy items that can indicate the true book sale record of books in the English language so further researchers can use these proxies. Additionally, we would touch on almost every topic covered in the course, including web scraping, data cleaning, data visualization, data analysis, data modeling, NLP and so on.

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
