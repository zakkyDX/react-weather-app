import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import Spinner from "./components/Spinner";

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
  const [loading, setLoading] = useState<boolean>(false);
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("getWeather");
    //getWeatherボタンを押した時に画面の再読み込みをしないようにする
    e.preventDefault();

    setLoading(true);

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=006cc26591aa4683a8161611232705&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults({
          country: "国名:" + data.location.country,
          cityName: "都市名:" + data.location.name,
          temperature: "気温:" + data.current.temp_c + "℃",
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
          windDirection: "風向き:" + data.current.wind_dir,
          windKph: "風速:" + data.current.wind_kph + "km/h",
          humidity: "湿度:" + data.current.humidity + "%",
        });
        setLoading(false);
      })
      .catch(() => {
        window.alert("通信に失敗しました");
        setLoading(false);
      });
  };
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form getWeather={getWeather} setCity={setCity} />
        {loading ? <Spinner /> : <Results results={results} />}
      </div>
    </div>
  );
}

export default App;
