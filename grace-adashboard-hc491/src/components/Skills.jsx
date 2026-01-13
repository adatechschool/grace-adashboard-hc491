export const Skills = ({ theme }) => {
  return (
    <ul>
      {theme.skills.map((skill, index) => (
        <li key={index}>
          {skill.label},{skill.validation}
        </li>
      ))}
    </ul>
  );
};
