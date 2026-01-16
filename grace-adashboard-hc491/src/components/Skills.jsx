import { useState } from "react";

export const Skills = ({ theme }) => {
  const [skills, setSkills] = useState(theme.skills);

  const getStatus = (validation) => {
    if (validation === "KO") return "Pas acquis";
    if (validation === "PROGRESS") return "En cours";
    if (validation === "OK") return "Acquis";
  };

  const changeStatus =  async (index, newStatus) => {
    //mise à jour UI
    setSkills((prevSkills) => {
      const newSkills = [...prevSkills];
      newSkills[index] = { ...newSkills[index], validation: newStatus };
      return newSkills;
    });

    //Appel API
     await fetch(
      `http://localhost:3000/themes/${theme.id}/skills/${index}/${newStatus}`,
      { method: "PUT" }
    );
  };

  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>
          {skill.label}

          <select
            value={skill.validation}
            onChange={(e) => changeStatus(index, e.target.value)}
          >
            <option value="KO">Pas acquis</option>
            <option value="PROGRESS">En cours</option>
            <option value="OK">Acquis</option>
          </select>
        </li>
      ))}
    </ul>
  );
};
