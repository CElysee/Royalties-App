import {
  startTransition,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./layout/Layout";

function App() {
  //   const [input, setInput] = useState("");
  //   const [pokemon, setPokemon] = useState([]);
  //   const [filteredPokemon, setFilteredPokemon] = useState([])
  //   const [isPending, startTransition] = useTransition()

  //   useEffect(() => {
  //     const getPokemon = async () => {
  //       const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  //       const data = await res.json();
  //       setPokemon(data.results);
  //     };
  //     getPokemon();
  //   }, []);

  //   const handleChange = (e) => {
  //     setInput(e.target.value.toLowerCase());
  //     startTransition(() => {
  //       setFilteredPokemon(pokemon.filter((poke) => poke.name.includes(input)))
  //     })
  //   };

  return <Layout />;
}

export default App;
