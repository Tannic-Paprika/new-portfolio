import React from 'react';
import './Experience.css';

// Import images directly
import NeuralSpaceImage from '../image/history/NeuralSpace.png';
import HyperspecImage from '../image/history/Hyperspec.png';
import IhubImage from '../image/history/Ihub.png';
import KiwiImage from '../image/history/gokiwinow_logo.jpeg';

const experienceData = [
  {
    role: "Backend Engineer Intern",
    organisation: "Kiwi",
    startDate: "January, 2025",
    endDate: "Now",
    experiences: ["Developed core backend services (card provisioning, vault, Yes Bank adapter, polling) in a Java microservices architecture at Kiwi", "Optimized caching and log streaming in Signoz to reduce logging costs and improve observability."],
    imageSrc: KiwiImage,
  },
  {
    role: "FullStack Engineer Intern",
    organisation: "NeuralSpace Inc.",
    startDate: "June, 2024",
    endDate: "August, 2024",
    experiences: ["Developed the Adjust feature similar to the Subtitle Editor app in Linux", "Quickened the build file of LocAI frontend by 85%"],
    imageSrc: NeuralSpaceImage,
  },
  {
    role: "Software Engineer Intern",
    organisation: "Hyperspec.AI",
    startDate: "Sept, 2023",
    endDate: "April, 2024",
    experiences: ["Developed the HMI, or the human-machine interface", "This interface handled real-time requests from the device used for data visualization and manipulation"],
    imageSrc: HyperspecImage,
  },
  {
    role: "UG Intern",
    organisation: "I-Hub DivyaSampark",
    startDate: "Oct, 2022",
    endDate: "August, 2023",
    experiences: [
      "Built a prototype to measure the speed of upcoming vehicles and generate centralized data for over-speeding of vehicles",
      "Their number plate was detected using the ANPR technique"
    ],
    imageSrc: IhubImage,
  }
];

function Experience() {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-list">
        {experienceData.map((item, index) => (
          <div key={index} className="experience-item">
            <div className="experience-logo-container">
              <img src={item.imageSrc} alt={item.organisation} className="experience-logo" />
            </div>
            <div className="experience-details">
              <h3 className="experience-role">{item.role}</h3>
              <h4 className="experience-organisation">{item.organisation}</h4>
              <p className="experience-dates">{item.startDate} - {item.endDate}</p>
              <ul className="experience-tasks">
                {item.experiences.map((exp, idx) => (
                  <li key={idx} className="experience-task">{exp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
