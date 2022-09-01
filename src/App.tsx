import "./App.css";
import { Searcher, PokemonList } from "./Components";
import { temporalItems } from "../interface/interfaces";

const items: temporalItems = [
  {
    name: "poke1",
    content:
      "In ultricies nulla eget nulla fringilla, nec malesuada odio ultricies. Nullam et finibus libero, sit amet sollicitudin augue. Fusce sem velit, lacinia nec egestas quis, scelerisque vitae urna. Aenean sed mi mollis, dictum odio sed, finibus leo. In hac habitasse platea dictumst. Proin placerat odio ac lectus efficitur molestie. Suspendisse id urna fermentum, vehicula lacus sed, dignissim elit. Vivamus ultrices velit id purus euismod, eu faucibus augue dictum. Ut auctor gravida luctus. Praesent lacinia augue dapibus, accumsan velit non, maximus leo. Nulla varius ac nisl quis venenatis. In in risus nec dolor vehicula volutpat ultricies at ipsum. Nulla tempus turpis sed lectus lacinia, sed bibendum elit bibendum. Nulla non metus at diam porttitor dignissim. Donec posuere dolor eu sapien blandit iaculis.",
  },
  {
    name: "poke2",
    content:
      "In ultricies nulla eget nulla fringilla, nec malesuada odio ultricies. Nullam et finibus libero, sit amet sollicitudin augue. Fusce sem velit, lacinia nec egestas quis, scelerisque vitae urna. Aenean sed mi mollis, dictum odio sed, finibus leo. In hac habitasse platea dictumst. Proin placerat odio ac lectus efficitur molestie. Suspendisse id urna fermentum, vehicula lacus sed, dignissim elit. Vivamus ultrices velit id purus euismod, eu faucibus augue dictum. Ut auctor gravida luctus. Praesent lacinia augue dapibus, accumsan velit non, maximus leo. Nulla varius ac nisl quis venenatis. In in risus nec dolor vehicula volutpat ultricies at ipsum. Nulla tempus turpis sed lectus lacinia, sed bibendum elit bibendum. Nulla non metus at diam porttitor dignissim. Donec posuere dolor eu sapien blandit iaculis.",
  },
  {
    name: "poke3",
    content:
      "In ultricies nulla eget nulla fringilla, nec malesuada odio ultricies. Nullam et finibus libero, sit amet sollicitudin augue. Fusce sem velit, lacinia nec egestas quis, scelerisque vitae urna. Aenean sed mi mollis, dictum odio sed, finibus leo. In hac habitasse platea dictumst. Proin placerat odio ac lectus efficitur molestie. Suspendisse id urna fermentum, vehicula lacus sed, dignissim elit. Vivamus ultrices velit id purus euismod, eu faucibus augue dictum. Ut auctor gravida luctus. Praesent lacinia augue dapibus, accumsan velit non, maximus leo. Nulla varius ac nisl quis venenatis. In in risus nec dolor vehicula volutpat ultricies at ipsum. Nulla tempus turpis sed lectus lacinia, sed bibendum elit bibendum. Nulla non metus at diam porttitor dignissim. Donec posuere dolor eu sapien blandit iaculis.",
  },
  {
    name: "poke3",
    content:
      "In ultricies nulla eget nulla fringilla, nec malesuada odio ultricies. Nullam et finibus libero, sit amet sollicitudin augue. Fusce sem velit, lacinia nec egestas quis, scelerisque vitae urna. Aenean sed mi mollis, dictum odio sed, finibus leo. In hac habitasse platea dictumst. Proin placerat odio ac lectus efficitur molestie. Suspendisse id urna fermentum, vehicula lacus sed, dignissim elit. Vivamus ultrices velit id purus euismod, eu faucibus augue dictum. Ut auctor gravida luctus. Praesent lacinia augue dapibus, accumsan velit non, maximus leo. Nulla varius ac nisl quis venenatis. In in risus nec dolor vehicula volutpat ultricies at ipsum. Nulla tempus turpis sed lectus lacinia, sed bibendum elit bibendum. Nulla non metus at diam porttitor dignissim. Donec posuere dolor eu sapien blandit iaculis.",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Pokedux</h1>
      <div className="searcher">
        <Searcher />
      </div>
      <PokemonList temporalArray={items} />
    </div>
  );
}

export default App;
