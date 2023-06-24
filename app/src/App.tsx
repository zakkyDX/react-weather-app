import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";

type ResultStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
  windDirection: string;
  windKph: string;
  humidity: string;
};

function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
    windDirection: "",
    windKph: "",
    humidity: "",
  });
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("getWeather");
    //getWeatherボタンを押した時に画面の再読み込みをしないようにする
    e.preventDefault();

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=006cc26591aa4683a8161611232705&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
          windDirection: data.current.wind_dir,
          windKph: data.current.wind_kph,
          humidity: data.current.humidity,
        });
      })
      .catch(() => window.alert("通信に失敗しました"));
  };
  return (
    <div className="apptest">
      <Title />
      <Form getWeather={getWeather} setCity={setCity} />
      <Results results={results} />
    </div>
  );
}

export default App;
