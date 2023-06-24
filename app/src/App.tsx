import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";

function App() {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=006cc26591aa4683a8161611232705&q=${city}&aqi=no`
    ).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="apptest">
      <Title />
      <Form getWeather={getWeather} setCity={setCity} />
    </div>
  );
}

export default App;
