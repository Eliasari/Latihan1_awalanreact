import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BmiCalculator from "../src/pages/Programs/BmiCalculator";
import BankLoanSimulation from "./pages/Programs/BankLoadSimulation";
import GrandTotalCalculator from "./pages/Programs/GrandTotalCalculator";
import Convertions from "./pages/Programs/Convertions";

function App() {
  return (
		<div className="flex justify-center p-6 w-screen h-screen bg-gray-200 overflow-y-auto">
			<div className="max-w-md">
				<div className="flex items-center justify-center mb-4 text-xs text-gray-600 font-semibold uppercase tracking-wide">
					<Link
						className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out"
						to="/"
					>
						Home
					</Link>
					<Link
						className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out"
						to="/about"
					>
						About
					</Link>
				</div>
        <div className="p-6 w-full bg-white rounded-xl shadow-lg">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/about" element={<About />}></Route>
						<Route
							path="/programs/bmi-calculator"
							element={<BmiCalculator />}
						/>
						<Route
							path="/programs/bank-loan-simulation"
							element={<BankLoanSimulation />}
						/>
						<Route
							path="/programs/grand-total-calculator"
							element={<GrandTotalCalculator />}
						/>
						<Route
							path="/programs/convertions"
							element={<Convertions />}
						/>
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
