import "./App.scss";
import OtherNews from "./components/OtherNews/OtherNews";
import {News} from "./components/News/News"
import response from './assets/response.json'

function App() {
  /*  const url = "https://unified-api.capital-system.com/news";

  let responce = fetch(url, {
    headers: {
      "Authorization": "Bearer H4TNnYslx082e1KpHZJkpgzPzAVSNYEu",
      "instance-token": "beOYHnJwB7mjZ94NJo4lmu-yM1PEcUY5",
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      "Accept": "application/json,",
    },
  });
  console.log(responce); */
  let lastNews = response.slice(0, 2);
  let otherNews = response.slice(2);

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Новости</h1>
        <News news={lastNews} />
        <h1>Другие новости</h1>
        <OtherNews news={otherNews} />
      </div>
    </div>
  );
}

export default App;