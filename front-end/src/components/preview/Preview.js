import React, { useState, useEffect } from "react";
import TemplateOne from "../templateone/TemplateOne";
import TemplateTwo from "../templatetwo/TemplateTwo";
import "./Preview.css";

const Preview = () => {
  const selectedTemplate = localStorage.getItem("selectedTemplate");

  //Arrays
  const [formData, setFormData] = useState({
    location: "",
    fullName: "",
    deliveryNote: "",
    phoneNumber: "",
    jobTitle: "",
    portfolio: "",
    professionalSummary: "",
    skills: "",
    achievements: "",
  });

  const [educations, setEducation] = useState([
    {
      id: Date.now(),
      institution: "",
      qualifications: "",
      startDate: "",
      endDate: "",
      present: false,
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      id: Date.now(),
      jobTitle: "",
      startDate: "",
      endDate: "",
      present: false,
      description: "",
    },
  ]);

  const [projects, setProjects] = useState([
    { id: 1, name: "", link: "", tools: "", description: "" },
  ]);

  const [showDetails, setShowDetails] = useState(true);
  const [showProfessional, setShowProfessional] = useState(true);
  const [showWorkExperience, setShowWorkExperience] = useState(true);
  const [showSkills, setShowSkills] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showProject, setShowProject] = useState(true);
  const [showAchievements, setShowAchievements] = useState(true);

  //hangle changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleDetails = () => setShowDetails(!showDetails);
  const toggleProfessional = () => setShowProfessional(!showProfessional);
  const toggleWorkExperience = () => setShowWorkExperience(!showWorkExperience);
  const toggleSkills = () => setShowSkills(!showSkills);
  const toggleEducation = () => setShowEducation(!showEducation);
  const toggleProject = () => setShowProject(!showProject);
  const toggleAchievements = () => setShowAchievements(!showAchievements);

  //Experience
  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: Date.now(),
        jobTitle: "",
        startDate: "",
        endDate: "",
        present: false,
        description: "",
      },
    ]);
  };

  const removeExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const handleExperienceChange = (e, id, field) => {
    const value = field === "present" ? e.target.checked : e.target.value;
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  //Education
  const addEducation = () => {
    setEducation([
      ...educations,
      {
        id: Date.now(),
        degree: "",
        startDate: "",
        endDate: "",
        present: false,
        description: "",
      },
    ]);
  };

  const removeEducation = (id) => {
    setEducation(educations.filter((edu) => edu.id !== id));
  };

  const handleEducationChange = (e, id, field) => {
    const value = field === "present" ? e.target.checked : e.target.value;
    setEducation(
      educations.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  //Projects
  const handleProjectChange = (e, id, field) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === id) {
        return { ...project, [field]: e.target.value };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  const addProject = () => {
    const newProject = {
      id: projects.length + 1,
      name: "",
      link: "",
      tools: "",
      description: "",
    };
    setProjects([...projects, newProject]);
  };

  const removeProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "1":
        return <TemplateOne formData={formData} />;
      case "2":
        return <TemplateTwo formData={formData} />;
      default:
        return <p>Please select a template.</p>;
    }
  };

  return (
    <div className="preview-section">
      <div className="input-column">
        <div className="contact-details">
          <button onClick={toggleDetails}>
            {showDetails ? "Hide Contact Details" : "Show Contact Details"}
          </button>
          {showDetails && (
            <>
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="deliveryNote">Email Address:</label>
                <input
                  type="text"
                  id="deliveryNote"
                  name="deliveryNote"
                  value={formData.deliveryNote}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Address:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="portfolio">Portfolio:</label>
                <input
                  type="text"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="jobTitle">Job Title:</label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </div>

        {/*************Professional-Summary ***********/}
        <div className="professional-summary">
          <button onClick={toggleProfessional}>
            {showProfessional
              ? "Hide Professional Summary"
              : "Show Professional Summary"}
          </button>
          {showProfessional && (
            <div className="form-group">
              <label htmlFor="professionalSummary">Professional Summary:</label>
              <textarea
                id="professionalSummary"
                name="professionalSummary"
                value={formData.professionalSummary}
                onChange={handleChange}
              />
            </div>
          )}
        </div>

        {/************* Experience ***********/}
        <div className="work-experience">
          <button onClick={toggleWorkExperience}>
            {showWorkExperience
              ? "Hide Work Experience"
              : "Show Work Experience"}
          </button>
          {showWorkExperience && (
            <>
              {experiences.map((experience) => (
                <div key={experience.id} className="form-group">
                  <label>Company Name:</label>
                  <input
                    type="text"
                    value={experience.companyName}
                    onChange={(e) =>
                      handleExperienceChange(e, experience.id, "companyName")
                    }
                  />

                  <label>Job Title:</label>
                  <input
                    type="text"
                    value={experience.jobTitle}
                    onChange={(e) =>
                      handleExperienceChange(e, experience.id, "jobTitle")
                    }
                  />

                  <label>start Date</label>
                  <div className="date-inputs">
                    <select
                      value={experience.startDate.split("-")[1] || ""}
                      onChange={(e) =>
                        handleEducationChange(
                          {
                            target: {
                              value: `${
                                experience.startDate.split("-")[0] || ""
                              }-${e.target.value}`,
                            },
                          },
                          experience.id,
                          "startDate"
                        )
                      }
                    >
                      <option value="">Month</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i} value={String(i + 1).padStart(2, "0")}>
                          {new Date(0, i).toLocaleString("default", {
                            month: "long",
                          })}
                        </option>
                      ))}
                    </select>
                    <select
                      value={experience.startDate.split("-")[0] || ""}
                      onChange={(e) =>
                        handleEducationChange(
                          {
                            target: {
                              value: `${e.target.value}-${
                                experience.startDate.split("-")[1] || ""
                              }`,
                            },
                          },
                          experience.id,
                          "startDate"
                        )
                      }
                    >
                      <option value="">Year</option>
                      {Array.from({ length: 50 }, (_, i) => (
                        <option key={i} value={2024 - i}>
                          {2024 - i}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label>End Date:</label>
                  <div className="date-inputs">
                    <select
                      value={experience.endDate.split("-")[1] || ""}
                      onChange={(e) =>
                        handleEducationChange(
                          {
                            target: {
                              value: `${
                                experience.endDate.split("-")[0] || ""
                              }-${e.target.value}`,
                            },
                          },
                          experience.id,
                          "endDate"
                        )
                      }
                      disabled={experience.present}
                    >
                      <option value="">Month</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i} value={String(i + 1).padStart(2, "0")}>
                          {new Date(0, i).toLocaleString("default", {
                            month: "long",
                          })}
                        </option>
                      ))}
                    </select>
                    <select
                      value={experience.endDate.split("-")[0] || ""}
                      onChange={(e) =>
                        handleEducationChange(
                          {
                            target: {
                              value: `${e.target.value}-${
                                experience.endDate.split("-")[1] || ""
                              }`,
                            },
                          },
                          experience.id,
                          "endDate"
                        )
                      }
                      disabled={experience.present}
                    >
                      <option value="">Year</option>
                      {Array.from({ length: 50 }, (_, i) => (
                        <option key={i} value={2024 - i}>
                          {2024 - i}
                        </option>
                      ))}
                    </select>
                  </div>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      checked={experience.present}
                      onChange={(e) =>
                        handleEducationChange(e, experience.id, "present")
                      }
                    />
                    <span className="checkmark"></span>
                    <p>Present:</p>
                  </label>

                  <label>Description:</label>
                  <textarea
                    value={experience.description}
                    onChange={(e) =>
                      handleExperienceChange(e, experience.id, "description")
                    }
                  />

                  <div
                    className="remove-button"
                    type="button"
                    onClick={() => removeExperience(experience.id)}
                  >
                    <img src="removeBtn.png" alt="Remove Button" />
                  </div>
                </div>
              ))}
              <div className="add-button" type="button" onClick={addExperience}>
                <img src="addButton.png" alt="add button" />
              </div>
            </>
          )}
        </div>

        {/************* Skills ***********/}
        <div className="skills">
          <button onClick={toggleSkills}>
            {showSkills ? "Hide Skills" : "Show Skills"}
          </button>
          {showSkills && (
            <div className="form-group">
              <label htmlFor="skills">Skills:</label>
              <textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>
          )}
        </div>

        {/************* Education ***********/}
        <div className="education">
          <button onClick={toggleEducation}>
            {showEducation ? "Hide Education" : "Show Education"}
          </button>
          {showEducation && (
            <>
              {educations.map((edu) => (
                <div key={edu.id} className="form-group">
                  <label>Institution:</label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) =>
                      handleEducationChange(e, edu.id, "institution")
                    }
                  />

                  <label>Qualifications:</label>
                  <input
                    type="text"
                    value={edu.qualifications}
                    onChange={(e) =>
                      handleEducationChange(e, edu.id, "qualifications")
                    }
                  />

                  <label>Start Date:</label>
                  <div className="date-inputs">
                    <select
                      value={edu.startDate.split("-")[1] || ""}
                      onChange={(e) =>
                        handleEducationChange(
                          {
                            target: {
                              value: `${edu.startDate.split("-")[0] || ""}-${
                                e.target.value
                              }`,
                            },
                          },
                          edu.id,
                          "startDate"
                        )
                      }
                    >
                      <option value="">Month</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i} value={String(i + 1).padStart(2, "0")}>
                          {new Date(0, i).toLocaleString("default", {
                            month: "long",
                          })}
                        </option>
                      ))}
                    </select>
                    <select
                      value={edu.startDate.split("-")[0] || ""}
                      onChange={(e) =>
                        handleEducationChange(
                          {
                            target: {
                              value: `${e.target.value}-${
                                edu.startDate.split("-")[1] || ""
                              }`,
                            },
                          },
                          edu.id,
                          "startDate"
                        )
                      }
                    >
                      <option value="">Year</option>
                      {Array.from({ length: 50 }, (_, i) => (
                        <option key={i} value={2024 - i}>
                          {2024 - i}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label>End Date:</label>
                  <div className="date-inputs">
                    <select
                      value={edu.endDate.split("-")[1] || ""}
                      onChange={(e) =>
                        handleEducationChange(
                          {
                            target: {
                              value: `${edu.endDate.split("-")[0] || ""}-${
                                e.target.value
                              }`,
                            },
                          },
                          edu.id,
                          "endDate"
                        )
                      }
                      disabled={edu.present}
                    >
                      <option value="">Month</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i} value={String(i + 1).padStart(2, "0")}>
                          {new Date(0, i).toLocaleString("default", {
                            month: "long",
                          })}
                        </option>
                      ))}
                    </select>
                    <select
                      value={edu.endDate.split("-")[0] || ""}
                      onChange={(e) =>
                        handleEducationChange(
                          {
                            target: {
                              value: `${e.target.value}-${
                                edu.endDate.split("-")[1] || ""
                              }`,
                            },
                          },
                          edu.id,
                          "endDate"
                        )
                      }
                      disabled={edu.present}
                    >
                      <option value="">Year</option>
                      {Array.from({ length: 50 }, (_, i) => (
                        <option key={i} value={2024 - i}>
                          {2024 - i}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      checked={edu.present}
                      onChange={(e) =>
                        handleEducationChange(e, edu.id, "present")
                      }
                    />
                    <span className="checkmark"></span>
                    <p>Present:</p>
                  </label>

                  <div
                    className="remove-button"
                    type="button"
                    onClick={() => removeEducation(edu.id)}
                  >
                    <img src="removeBtn.png" alt="Remove Button" />
                  </div>
                </div>
              ))}
              <div className="add-button" type="button" onClick={addEducation}>
                <img src="addButton.png" alt="Add Button" />
              </div>
            </>
          )}
        </div>

        {/************* Project ***********/}
        <div className="project">
          <button onClick={toggleProject}>
            {showProject ? "Hide Project" : "Show Project"}
          </button>
          {showProject && (
            <>
              {projects.map((project) => (
                <div key={project.id} className="form-group">
                  <label htmlFor={`projectName-${project.id}`}>
                    Project Name:
                  </label>
                  <input
                    id={`projectName-${project.id}`}
                    name="name"
                    value={project.name}
                    onChange={(e) => handleProjectChange(e, project.id, "name")}
                  />

                  <label htmlFor={`projectLink-${project.id}`}>
                    Project Link:
                  </label>
                  <input
                    id={`projectLink-${project.id}`}
                    name="link"
                    value={project.link}
                    onChange={(e) => handleProjectChange(e, project.id, "link")}
                  />

                  <label htmlFor={`projectTools-${project.id}`}>
                    Tools Used:
                  </label>
                  <input
                    id={`projectTools-${project.id}`}
                    name="tools"
                    value={project.tools}
                    onChange={(e) =>
                      handleProjectChange(e, project.id, "tools")
                    }
                  />

                  <label htmlFor={`projectDescription-${project.id}`}>
                    Description:
                  </label>
                  <textarea
                    id={`projectDescription-${project.id}`}
                    name="description"
                    value={project.description}
                    onChange={(e) =>
                      handleProjectChange(e, project.id, "description")
                    }
                  />

                  <button
                    className="remove-button"
                    type="button"
                    onClick={() => removeProject(project.id)}
                  >
                    Remove Project
                  </button>
                </div>
              ))}
              <button className="add-button" type="button" onClick={addProject}>
                Add Project
              </button>
            </>
          )}
        </div>

        {/************* Achivements ***********/}
        <div className="achievements">
          <button onClick={toggleAchievements}>
            {showAchievements ? "Hide Achievements" : "Show Achievements"}
          </button>
          {showAchievements && (
            <div className="form-group">
              <label htmlFor="achievements">Achievements:</label>
              <textarea
                id="achievements"
                name="achievements"
                value={formData.achievements}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      </div>

      <div className="display-column">
        <h2>Preview</h2>
        {renderTemplate()}
      </div>
    </div>
  );
};

export default Preview;
