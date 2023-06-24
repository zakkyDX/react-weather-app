type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = (props: FormPropsType) => {
  return (
    <form onSubmit={props.getWeather}>
      {/* <select name="" id="">
        <option value="tokyo" selected>
          東京
        </option>
        <option value="osaka">大阪</option>
        <option value="nagoya">名古屋</option>
      </select> */}
      <input
        type="text"
        name="city"
        placeholder="都市名を英語で入力"
        onChange={(e) => props.setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;
