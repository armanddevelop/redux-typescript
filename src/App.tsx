import { useSelector } from "react-redux";
import "./App.css";
import { Searcher, PokemonList, Loading } from "./Components";
import logo from "./statics/logo.svg";
import { usePokemons } from "./hooks/usePokemons";

function App() {
  const { pokemons } = usePokemons();
  const { loadingData } = useSelector((state: any) => state.loading);
  const renderComponent = () => {
    return loadingData ? <Loading /> : <PokemonList pokemons={pokemons} />;
  };

  return (
    <div className="App">
      <div className="image">
        <img src={logo} alt="pokemon" className="poke-ball" />
      </div>
      <h1>Pokedux</h1>
      <div className="searcher">
        <Searcher />
      </div>
      {renderComponent()}
    </div>
  );
}

export default App;
