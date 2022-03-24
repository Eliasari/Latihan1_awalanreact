import { useState } from "react";

function BankLoanSimulation() {
	const bunga = 10;

	let [nominal, setNominal] = useState(0);
	let [periode, setPeriode] = useState(12);
	let [cicilan, setCicilan] = useState(0);

	const hitung = () => {
		setCicilan(nominal / periode + ((nominal / periode) * (10 / 100)));
	}

	return (
		<div>
			<h1 className="font-bold uppercase">Bank Loan Simulation</h1>
			<div className="mt-4">
				<div className="flex items-center justify-between mb-2">
					<label htmlFor="nominal" className="w-2/5 text-sm">
						Nominal (Rp)
					</label>
					<input
						value={nominal}
						onChange={(event) => setNominal(event.target.value)}
						id="nominal"
						type="number"
						className="px-4 py-1 rounded-xl border bg-white w-full"
					/>
				</div>
                <div className="flex items-center justify-between mb-2">
					<label htmlFor="bunga" className="w-2/5 text-sm">
						Bunga
					</label>
					<input
						value={bunga}
						id="bunga"
						type="number"
						className="px-4 py-1 rounded-xl border bg-white w-full"
						readOnly={true}
					/>
				</div>
				<div className="flex items-center justify-between mb-4">
					<label htmlFor="periode" className="w-2/5 text-sm">
						Periode
					</label>
					<select
						value={periode}
						onChange={(event) => setPeriode(event.target.value)}
						id="periode"
						type="number"
						className="px-4 py-1 rounded-xl border bg-white w-full"
					>
						<option value={12}>12 Bulan</option>
						<option value={6}>6 Bulan</option>
						<option value={3}>3 Bulan</option>
						<option value={2}>2 Bulan</option>
					</select>
				</div>
                <button
					onClick={() => hitung()}
					className="px-4 py-2 rounded-xl bg-blue-500 w-full text-sm uppercase font-bold text-white"
				>
					Hitung
				</button>
			</div>
			<div className="mt-4 p-4 border rounded-xl text-sm font-mono whitespace-pre-wrap">
				<p>Cicilan : Rp. {Number(cicilan).toLocaleString()}</p>
			</div>
		</div>
	);
}

export default BankLoanSimulation;