import { useState } from "react";
import ColorPallete from "./components/ColorPallete";
import FontsPallets from "./components/FontsPallets";
import LogoViews from "./components/LogoViews";
import { conceptGenerator } from "./utils/conceptGenerator";
function App() {
  const [title, setTitle] = useState("");
  const [slogan, setSlogan] = useState("");
  const [logoConcepts,setLogoConcepts] = useState([])
  const generateLogos = () => {
    const concept = conceptGenerator();
    const singleConcept = {
      ...concept,
      title: title,
      slogan: slogan,
    };
    setLogoConcepts([...logoConcepts,singleConcept])
    console.log(singleConcept);
  };
  return (
    <>
      <div className="container mx-auto space-y-5">
        <h1
          className="text-5xl text-center bebas-neue-regular my-5 py-5 rounded-xl shadow-sm
       bg-amber-200 font-bold underline"
        >
          Logo Generator
        </h1>
        <div className="flex justify-center space-x-3">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Brand Name"
          />
          <input
            type="text"
            name="title"
            value={slogan}
            onChange={(e) => setSlogan(e.target.value)}
            className="bg-gray-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Brand Name"
          />
        </div>
        <div className="flex justify-center items-center ">
          <button
            onClick={generateLogos}
            className="bg-amber-300 px-5 py-2 rounded-lg shadow-sm bebas-neue-regular hover:opacity-50 active:bg-slate-300 hover:scale-125 duration-150"
          >
            See Magic !
          </button>
        </div>
        <LogoViews logoConcepts={logoConcepts} />
        <FontsPallets />
        <ColorPallete />
      </div>
    </>
  );
}

export default App;
