import { Link, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Kalkulator from "./pages/program/Kalkulator";

import './App.css';

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
						<Route path="/program/kalkulator" element={<Kalkulator />}></Route>
					</Routes>
					</div>
			</div>
		</div>
  );
}

export default App;
