import { useState } from "react";

function GrandTotalCalculator() {
	let [total, setTotal] = useState(0);
	let [ppn, setPpn] = useState(0);
	let [discount, setDiscount] = useState(0);
	let [grandTotal, setGrandTotal] = useState(null);

	const hitung = () => {
		setGrandTotal(+total - (+total * (+discount / 100)) + (+total * (+ppn / 100)))
	}

	return (
		<div>
			<h1 className="font-bold uppercase">Grand Total Calculator</h1>
			<div className="mt-4">
				<div className="flex items-center justify-between mb-2">
					<label htmlFor="total" className="w-2/5 text-sm">
						Total (Rp)
					</label>
					<input
						value={total}
						onChange={(event) => setTotal(event.target.value)}
						id="total"
						type="number"
						className="px-4 py-1 rounded-xl border bg-white w-full"
					/>
				</div>
				<div className="flex items-center justify-between mb-2">
					<label htmlFor="ppn" className="w-2/5 text-sm">
						PPN (%)
					</label>
					<input
                    value={ppn}
                    onChange={(event) => setPpn(event.target.value)}
                    id="ppn"
                    type="number"
                    className="px-4 py-1 rounded-xl border bg-white w-full"
                />
            </div>
            <div className="flex items-center justify-between mb-4">
                <label htmlFor="discount" className="w-2/5 text-sm">
                    Diskon (%)
                </label>
                <input
                    value={discount}
                    onChange={(event) => setDiscount(event.target.value)}
                    id="discount"
                    type="number"
                    className="px-4 py-1 rounded-xl border bg-white w-full"
                />
            </div>
            <button onClick={() => hitung()} className="px-4 py-2 rounded-xl bg-blue-500 w-full text-sm uppercase font-bold text-white">
                Hitung
            </button>
        </div>
        <div className="mt-4 p-4 border rounded-xl text-sm font-mono whitespace-pre-wrap">
            <p>Grand Total : Rp. {Number(grandTotal).toLocaleString()}</p>
        </div>
    </div>
);
}

export default GrandTotalCalculator;