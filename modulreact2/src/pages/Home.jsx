import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<h1 className="mb-4 text-xl font-semibold">Hello World!</h1>
			<p className="font-light">Choose one of our programs here ...</p>
			<div class="mt-2 p-4 border rounded-xl font-mono text-sm whitespace-pre-wrap">
				<Link
					to="/programs/bmi-calculator"
					className="block mb-2 text-blue-500 hover:text-blue-400"
				>
					+ Body Mass Index Calculator
				</Link>
				<Link
					to="/programs/bank-loan-simulation"
					className="block mb-2 text-blue-500 hover:text-blue-400"
				>
					+ Bank Loan Simulation
				</Link>
				<Link
					to="/programs/grand-total-calculator"
					className="block mb-2 text-blue-500 hover:text-blue-400"
				>
					+ Grand Total Calculator
				</Link>
				<Link
					to="/programs/convertions"
					className="block text-blue-500 hover:text-blue-400"
				>
					+ Convertions
				</Link>
			</div>
		</div>
	);
}

export default Home;