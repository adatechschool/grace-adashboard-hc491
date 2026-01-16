import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Skills } from "./components/Skills";
import { Theme } from "./components/Theme";
import { AddThemeForm } from "./components/AddthemeForm";

function App() {
  const [bases, setBases] = useState([]);
  const [showForm, setShowForm] = useState(false);

  //fonction pour récupérer tous les thèmes depuis API
  const getBases = async () => {
    const res = await fetch("http://localhost:3000/themes");
    const data = await res.json();
    setBases(data);
  };

  useEffect(() => {
    getBases();
  }, []);

  //supprimer un thème
  const remove = async (id) => {
    await fetch(`http://localhost:3000/themes/${id}`, {
      method: "DELETE",
    });
    // setBases((value) => value.filter((theme) => theme.id !== id));
    await getBases();
  };

  //ajouter nouveau thème
  const addTheme = async (newTheme) => {
    const res = await fetch("http://localhost:3000/themes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTheme),
    });

    //recharge la liste depuis API pour etre sûr que react+base synchronisés
    await getBases();

    setShowForm(false);

    // const createdTheme = await res.json();

    // //mise àn jour du state
    // setBases((prev) => [...prev, createdTheme]);
  };

  return (
    <>
      <div className="header">
        <button className="add-theme-btn" onClick={() => setShowForm(true)}>
          Ajouter un thème
        </button>
      </div>

      {showForm && (
        <AddThemeForm onAdd={addTheme} onClose={() => setShowForm(false)} />
      )}

      <Theme bases={bases} onDelete={remove} />
    </>
  );
}

export default App;
