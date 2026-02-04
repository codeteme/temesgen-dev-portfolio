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

## [Project 5: Gebeta](https://github.com/codeteme/Gebeta)
#### Tags: *Graphical UI*, *Imperative Computing*

Gebeta is one of the oldest board games in the world. The project allows two users to play against each other in a single account. The project allows a user to play against the computer. The project might will be extended to allow multiplayer mode.

Algorithmic Plan: I used alpha-beta pruning to allow a user to play against the computer. The static evaluation on the final positions looks at the number of marbles in the big bucket. In other words, the greater the number of marbles, the better the move is for the chosen player. If the number of marbles in the opposition's big bucket is larger than the chosen player's, then the static evaluation will yield a negative result (marbles in the big bucket of chosen player - marbles in big bucket of opposition player).

<img src="/images/index.jpg" width="400" height="400">

---

## [Project 6: Vaccine Hesitancy](https://github.com/codeteme/130422-V2)
#### Tags: *Statistical Analysis* Religious Correlates in Covid-19 Vaccine Hesitancy: Does religion influence vaccine uptake of the US population?

Quantitative and qualitative exploration is required to better comprehend the demographics of groups with the most hesitant individuals and utilize different approaches that cater to these groups with different ideologies. This study explores essential factors that determine individuals’ behaviors towards COVID-19 vaccines. Particularly, we evaluate the difference in vaccination uptake among followers of a religion and non-followers. Additionally, we examine the variance among three popular religious groups - Islam, Christianity, and Judaism - in the US. Identification of the salient factors would be an important insight health communicators and policymakers can use to develop public health communication campaigns and pass vaccine mandate policies, respectively.

<img src="/images/pexels-tara-winstead-7722844.jpg" width="400" height="400">
