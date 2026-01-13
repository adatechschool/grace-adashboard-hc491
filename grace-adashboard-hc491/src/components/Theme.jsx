import { Skills } from "./Skills";

export const Theme = ( {bases,onDelete} ) => {
  return (
    <>
      {bases.map((theme)=>(
        <div key={theme.id}>
          <h2>{theme.name}</h2>
          <Skills theme={theme} />

         <button onClick={()=>onDelete(theme.id)}>
            Effacer
            </button>
        </div>
      ))}
    </>
  );
};
