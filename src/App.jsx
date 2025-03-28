import Pokemons from "./components/Pokemons";
import Aside from "./components/Aside";

function App() {
  return (
    <section className="bg-[#F6F8FC] h-screen font-outfit overflow-y-auto">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr-350px] ">
        <Pokemons />
        <Aside />
      </main>
    </section>
  );
}

export default App;