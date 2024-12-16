import React from "react";
import "./JobsSection.css";

const JobsSection = () => {
  const jobs = [
    { title: "Software Engineer", company: "Tech Corp", location: "New York", payment: "$50/hr" },
    { title: "Graphic Designer", company: "Creative Studio", location: "San Francisco", payment: "$30/hr" },
    { title: "Data Scientist", company: "DataWorks", location: "Remote", payment: "$60/hr" },
    { title: "Marketing Specialist", company: "Brandify", location: "Chicago", payment: "$40/hr" },
    { title: "Product Manager", company: "Innovate Inc.", location: "Seattle", payment: "$55/hr" },
    { title: "Sales Associate", company: "Retail World", location: "Boston", payment: "$20/hr" },
    { title: "HR Coordinator", company: "PeopleFirst", location: "Austin", payment: "$35/hr" },
  ];

  return (
    <div className="jobs-section">
      <h2>Jobs</h2>
      <div className="jobs-container">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <div className="job-details">
              <h3>{job.title}</h3>
              <p className="company">{job.company}</p>
              <p className="location">{job.location}</p>
              <p className="payment">{job.payment}</p>
            </div>
          </div>
        ))}
        <div className="job-card see-more-jobs" onClick={() => window.open("https://newyork.craigslist.org/search/jjj#search=1~gallery~0~0", "_blank")}>
          <p>See More</p>
        </div>
      </div>
    </div>
  );
};

export default JobsSection;
