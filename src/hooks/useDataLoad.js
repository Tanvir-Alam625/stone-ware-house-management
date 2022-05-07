import { useEffect, useState } from "react";

const useDataLoad = () => {
  const [stones, setStones] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/manageInventory";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStones(data));
  }, []);
  return { stones, setStones };
};
export default useDataLoad;
