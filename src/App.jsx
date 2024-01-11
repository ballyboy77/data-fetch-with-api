import { useState } from "react";

export default function App() {
  const [activity, SetActivity] = useState("");
  async function fetchData() {
    try {
      const response = await fetch("https://www.boredapi.com/api/activity");
      const data = await response.json();
      SetActivity(data.activity);
    } catch (err) {
      console.error("error fetching data :", err);
    }
  }
  return (
    <>
      <h1>{activity}</h1>
      <>
        <button onClick={fetchData}>FETCH</button>
      </>
    </>
  );
}
