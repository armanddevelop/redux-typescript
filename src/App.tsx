import "./App.css";
import { Searcher, PokemonList } from "./Components";
import logo from "./statics/logo.svg";
import { usePokemons } from "./hooks/usePokemons";

function App() {
  const { pokemons } = usePokemons();

  return (
    <div className="App">
      <div>
        <img src={logo} alt="pokemon" className="poke-ball" />
      </div>
      <h1>Pokedux</h1>
      <div className="searcher">
        <Searcher />
      </div>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
