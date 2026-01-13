import { Skills } from "./Skills";

export const Theme = ({ bases, onDelete }) => {
  return (
    <>
      {bases.map((theme) => (
        <div key={theme.id}>
          <h2>{theme.name}</h2>
          <button onClick={() => onDelete(theme.id)}>Effacer</button>
          <Skills theme={theme} />
        </div>
      ))}
    </>
  );
};
