import { useState } from "react";

export const Skills = ({ theme }) => {
  const [skills, setSkills] = useState(theme.skills);

  const getStatus = (validation) => {
    if (validation === "OK") return "Acquis";
    if (validation === "PROGRESS") return "En cours";
    if (validation === "KO") return "Pas acquis";
    return"";
  };

  return (
    <ul>
      {theme.skills.map((skill, index) => (
        <li key={index}>{skill.label}
        <button>{getStatus(skill.validation)}</button>
        </li>
      ))}
    </ul>
  );
};
