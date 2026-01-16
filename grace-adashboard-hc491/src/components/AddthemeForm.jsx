import { useState } from "react";

export const AddThemeForm = ({ onAdd, onClose }) => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState([{ label: "", validation: "KO" }]);

  const addSkill = () => {
    setSkills([...skills, { label: "", validation: "KO" }]);
  };

  const updateSkill = (index, field, value) => {
    const newSkills = [...skills];
    newSkills[index][field] = value;
    setSkills(newSkills);
  };

  const handleSubmit = async(e)=> {
    e.preventDefault();

    const newTheme = {
      name,
      skills,
    };

    await onAdd(newTheme);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="add-theme-form">
      <h2>Ajouter un thème</h2>

      <input
        type="text"
        placeholder="Nom du thème"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

<div className="skills-section">
      <h2>Compétences</h2>

<div className="skills-list">
      {skills.map((skill, index) => (
        <div className="skill-row" key={index}>

          <input
            type="text"
            placeholder="Compétence"
            value={skill.label}
            onChange={(e) => updateSkill(index, "label", e.target.value)}
            required
          />

          <select
            value={skill.validation}
            onChange={(e) => updateSkill(index, "validation", e.target.value)}
          >
            <option value="KO">Pas acquis</option>
            <option value="PROGRESS">En cours</option>
            <option value="OK">Acquis</option>
          </select>
        </div>
      ))}
      </div>
      </div>

      <button type="button" onClick={addSkill}>
        Ajouter une compétence
      </button>

      <button type="submit">Créer un thème</button>
      <button type="button" onClick={onClose}>
        🗑️
      </button>
    </form>
  );
};
