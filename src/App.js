import Search from "./components/Search/Search";
import "./App.css";

const App = () => {
  const handleOnSearchChange = (SearchData) => {
    console.log(SearchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
};

export default App;
