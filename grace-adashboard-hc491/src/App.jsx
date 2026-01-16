import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Skills } from "./components/Skills";
import { Theme } from "./components/Theme";

function App() {
  const [bases, setBases] = useState([]);
  const [showForm, setShowForm]= useState(false)

  useEffect(() => {
    async function getBases() {
      const res = await fetch("http://localhost:3000/themes");
      const data = await res.json();
      /* console.log(data); */
      setBases(data);
    }

    getBases();
  }, []);

  const remove = async(id) => {
   await fetch(`http://localhost:3000/themes/${id}`, {
      method: "DELETE",
    });
    setBases((value) => value.filter((theme) => theme.id !== id));
  };
  return (
    <>
    <div className="header">
      <button className="add-theme-btn"
      onClick={()=> setShowForm(!showForm)}>Ajouter un thème</button>
    </div>
      <Theme bases={bases} onDelete={remove} />
    </>
  );
}

export default App;
