import { useState } from "react";
import ColorPallete from "./components/ColorPallete";
import FontsPallets from "./components/FontsPallets";
import LogoViews from "./components/LogoViews";
import { conceptGenerator } from "./utils/conceptGenerator";
function App() {
  const [title, setTitle] = useState("");
  const [slogan, setSlogan] = useState("");
  const [logoConcepts, setLogoConcepts] = useState([]);
  const [loading,setLoading] = useState(false)
  const generateLogos = () => {
    setLoading(true)
    const generatedConcepts = [];
    for (let i = 0; i < 9; i++) {
      const concept = conceptGenerator();
      const singleConcept = {
        ...concept,
        title: title, // Assuming title and slogan are defined somewhere
        slogan: slogan,
      };
      generatedConcepts.push(singleConcept);
      console.log(singleConcept);
    }
    setLogoConcepts([...logoConcepts, ...generatedConcepts]);
    setTimeout(()=>{
      setLoading(false)
    },2000)
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
        {loading && 
        <>
        <div className="flex justify-center flex-col items-center
          my-5">
            <p className="my-5 text-4xl text-white bebas-neue-regular">Generating Logos...</p>
          <img src="/ai.png" className="w-20 animate-bounce "/>
          </div>
        </>
          }
        { logoConcepts.length > 0 && <LogoViews logoConcepts={logoConcepts} />}
         <h1
          className="text-5xl text-center bebas-neue-regular my-5 py-5 rounded-xl shadow-sm
       bg-amber-200 font-bold underline"
        >Available Fonts</h1>
        <FontsPallets />
         <h1
          className="text-5xl text-center bebas-neue-regular my-5 py-5 rounded-xl shadow-sm
       bg-amber-200 font-bold underline"
        >Color Pallete Generate</h1>
        <ColorPallete />
      </div>
    </>
  );
}

export default App;
