import { useState } from "react";

function BmiCalculator() {
	let [berat, setBerat] = useState(0);
	let [tinggi, setTinggi] = useState(0);
	let [result, setResult] = useState(null);

	const hitung = () => {
		const index = berat / ((tinggi / 100) ** 2);
		console.log(index);
		if (index <= 18.5) setResult('Underweight');
		else if (index <= 24.9) setResult('Ideal');
		else if (index <= 29.9) setResult('Overweight');
		else setResult('Obesity')
	}

	return (
        <div>
			<h1 className="font-bold uppercase">Body Mass Index</h1>
			<div className="mt-4">
				<div className="flex items-center justify-between mb-2">
					<label htmlFor="berat" className="w-2/5 text-sm">
						Berat (Kg)
					</label>
					<input
						value={berat}
						onChange={(event) => setBerat(event.target.value)}
						id="berat"
						type="number"
						className="px-4 py-1 rounded-xl border bg-white w-full"
					/>
				</div>
				<div className="flex items-center justify-between mb-4">
					<label htmlFor="tinggi" className="w-2/5 text-sm">
						Tinggi (Cm)
					</label>
					<input
						value={tinggi}
						onChange={(event) => setTinggi(event.target.value)}
						id="tinggi"
						type="number"
						className="px-4 py-1 rounded-xl border bg-white w-full"
					/>
				</div>
				<button onClick={() => hitung()} className="px-4 py-2 rounded-xl bg-blue-500 w-full text-sm uppercase font-bold text-white">
					Hitung
				</button>
                </div>
			<div className="mt-4 p-4 border rounded-xl text-sm font-mono whitespace-pre-wrap">
				<p>Status: {result}</p>
			</div>
		</div>
	);
}

export default BmiCalculator;