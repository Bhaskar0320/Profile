import React from "react";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Analyst",
      company: "HCL Technologies",
      location: "Noida, India",
      period: "Dec 2023 - Present",
      description: [
        "Developed and optimized RESTful APIs using Core Java and Spring Boot, enhancing system performance and scalability.",
        "Followed Agile methodologies and participated in code reviews, improving development efficiency and code quality",
        "Reduced API response time by 40% through optimization and caching strategies",
        "Streamlined software issue resolution processes using ITSM tools (ServiceNow, SAP), achieving a 95% SLA adherence rate.",
      ],
    },
    {
      id: 2,
      role: "Iot Intern",
      company: "NIELIT",
      location: "Haridwar, India",
      period: "June 2021 - July 2021",
      description: [
        "Developed hands-on experience in IoT systems using Arduino and various sensors.",
        "Gained proficiency in embedded C programming and interfacing IoT components like temperature, humidity, and motion sensors.",
        "Designed and implemented real-time projects involving sensor data collection, processing, and cloud integration.",
        "Strengthened knowledge in firmware development, microcontroller programming, and debugging techniques.",
      ],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      institution: "University of Lucknow",
      location: "Lucknow, India",
      period: "2018 - 2022",
      description:
        "Specialized in Electronics and communication. Project: Health Monitoring system using Microcontroller",
    },
    {
      id: 2,
      degree: "Intermediate",
      institution: "Central Academy",
      location: "Lucknow, India",
      period: "2016 - 2017",
      description:
        "Studied core subjects including Mathematics, Physics, Chemistry. Developed strong analytical and problem-solving skills.",
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="bg-indigo-100 text-indigo-600 p-2 rounded-full mr-3">
                <Calendar className="h-5 w-5" />
              </span>
              Work Experience
            </h3>

            <div className="relative border-l-2 border-indigo-200 pl-8 ml-4">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`mb-10 ${
                    index === experiences.length - 1 ? "" : ""
                  }`}
                >
                  <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] mt-1.5"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {exp.role}
                    </h4>
                    <h5 className="text-lg font-medium text-indigo-600 mb-2">
                      {exp.company}
                    </h5>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="mr-4">{exp.location}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="bg-indigo-100 text-indigo-600 p-2 rounded-full mr-3">
                <Calendar className="h-5 w-5" />
              </span>
              Education
            </h3>

            <div className="relative border-l-2 border-indigo-200 pl-8 ml-4">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`mb-10 ${
                    index === education.length - 1 ? "" : ""
                  }`}
                >
                  <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] mt-1.5"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {edu.degree}
                    </h4>
                    <h5 className="text-lg font-medium text-indigo-600 mb-2">
                      {edu.institution}
                    </h5>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="mr-4">{edu.location}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
