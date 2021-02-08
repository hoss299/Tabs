import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./App.css";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { title, dates, duties, company } = jobs[value];
  return (
    <section>
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <article>
        <div className="side-bar">
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                className={`company-btn ${
                  index === value ? "active-co-btn" : ""
                }`}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <div className="content">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="date">{dates}</p>
          <p className="duties">
            {duties.map((duty, index) => {
              return (
                <div key={index} className="duty-box">
                  <FaAngleDoubleRight className="arrow" />
                  <p className="duty">{duty}</p>
                </div>
              );
            })}
          </p>
        </div>
      </article>
    </section>
  );
}

export default App;
