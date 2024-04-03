import ColorPallete from "./components/ColorPallete";
import FontsPallets from "./components/FontsPallets";

function App() {
  return (
    <>
      <div className="container mx-auto space-y-5">
        <h1
          className="text-5xl text-center bebas-neue-regular my-5 py-5 rounded-xl shadow-sm
       bg-amber-200 font-bold underline"
        >
          Logo Generator
        </h1>
        <div className="flex justify-center items-center ">
          <button className="bg-amber-300 px-5 py-2 rounded-lg shadow-sm bebas-neue-regular hover:opacity-50 active:bg-slate-300 hover:scale-125 duration-150">
            See Magic !
          </button>
        </div>
      <FontsPallets/>
      <ColorPallete/>
      </div>
    </>
  );
}

export default App;
