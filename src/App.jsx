import { useState } from "react";

import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChart2Line,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";

//Components
import SideBar from "./Components/Shared/SideBar";
import Car from "./Components/Shared/Car";
import Header from "./Components/Shared/Header";
import Card from "./Components/Shared/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <SideBar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />

      {/* menu movil */}

      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>

        <button className="p-2">
          <RiAddLine />
        </button>

        <button onClick={toggleOrders} className="p-2">
          <RiPieChart2Line />
        </button>

        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>

      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />

          {/* Title Content */}
          <div className="flex items-center justify-between mb-16 ">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine />
              Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-col-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
