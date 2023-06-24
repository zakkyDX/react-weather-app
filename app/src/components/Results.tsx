type ResultPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
    windDirection: string;
    windKph: string;
    humidity: string;
  };
};

const Results = (props: ResultPropsType) => {
  return (
    <div>
      {props.results.country && (
        <div className="results-country">{props.results.country}</div>
      )}
      {props.results.cityName && (
        <div className="results-city">{props.results.cityName}</div>
      )}
      {props.results.temperature && (
        <div className="results-temp">{props.results.temperature}</div>
      )}
      {props.results.conditionText && (
        <div className="results-condition">
          <img src={props.results.icon} alt="icon" />
          <span>{props.results.conditionText}</span>
        </div>
      )}
      {props.results.windDirection && (
        <div className="">{props.results.windDirection}</div>
      )}
      {props.results.windKph && <div className="">{props.results.windKph}</div>}
      {props.results.humidity && (
        <div className="">{props.results.humidity}</div>
      )}
    </div>
  );
};

export default Results;
