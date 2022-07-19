import { useEffect, useState } from "react";

export const useLocalStorage = (kljuc, bazniStejt) => {
  const [open, openSet] = useState(
    JSON.parse(localStorage.getItem(kljuc)) || bazniStejt
  );

  useEffect(() => {
    localStorage.setItem(kljuc, JSON.stringify(open));
  }, [open, kljuc]);
  return [open, openSet];
};

function LocalStorage() {
  const [je, jelJe] = useLocalStorage("open-sesame", false);
  const handleToggle = () => {
    jelJe(!je);
  };

  return (
    <div>
      <button onClick={() => handleToggle}>toggle</button>
      {je && <p>jel {je}</p>}
    </div>
  );
}

export default LocalStorage;
