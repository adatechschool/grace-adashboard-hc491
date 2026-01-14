import { useState } from "react";

export const Skills = ({ theme }) => {
  const [skills, setSkills] = useState(theme.skills);

  const getStatus = (validation) => {
    if (validation === "KO") return "Pas acquis";
    if (validation === "PROGRESS") return "En cours";
    if (validation === "OK") return "Acquis";
    return "";
  };

  const changeStatus = (index) => {
    setSkills((prevSkills) => {
      const newSkills = [...prevSkills];

      if (newSkills[index].validation === "OK") {
        newSkills[index].validation = "PROGRESS";
      } else if (newSkills[index].validation === "PROGRESS") {
        newSkills[index].validation = "KO";
      } else {
        newSkills[index].validation = "OK";
      }
      return newSkills;
    });
  };

  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>
          {skill.label}
          <button onClick={() => changeStatus(index)}>
            {getStatus(skill.validation)}
          </button>
        </li>
      ))}
    </ul>
  );
};
