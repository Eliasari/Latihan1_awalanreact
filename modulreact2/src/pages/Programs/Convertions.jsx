import { useState } from "react";

function Convertions() {
	let [value, setValue] = useState('');
	let [valueType, setValueType] = useState('decimal');
	let [convertTo, setConvertTo] = useState('biner');
	let [result, setResult] = useState('');

	const type = {
		biner: 2,
		octal: 8,
		decimal: 10,
		hexadecimal: 16
	}

	const hitung = () => {
		setResult(parseInt(value, type[valueType]).toString(type[convertTo]));
	}

	return (
		<div>
			<h1 className="font-bold uppercase">Convertions</h1>
			<div className="mt-4">
				<div className="flex items-center justify-between mb-2">
					<label htmlFor="value" className="w-2/5 text-sm">
						Value
					</label>
					<input
						value={value}
						onChange={(event) => setValue(event.target.value)}
						id="value"
						type="text"
						className="px-4 py-1 rounded-xl border bg-white w-full"
					/>
				</div>
                <div className="flex items-center justify-between mb-4">
					<label htmlFor="value-type" className="w-2/5 text-sm">
						Value Type
					</label>
					<select
						value={valueType}
						onChange={(event) => setValueType(event.target.value)}
						id="value-type"
						className="px-4 py-1 rounded-xl border bg-white w-full"
					>
						<option value="biner">Biner</option>
						<option value="octal">Octal</option>
						<option value="decimal">Decimal</option>
						<option value="hexadecimal">Hexadecimal</option>
					</select>
				</div>
				<div className="flex items-center justify-between mb-4">
					<label htmlFor="convert-to" className="w-2/5 text-sm">
						Convert To
					</label>
					<select
						value={convertTo}
						onChange={(event) => setConvertTo(event.target.value)}
						id="convert-to"
						className="px-4 py-1 rounded-xl border bg-white w-full"
					>
						<option value="biner">Biner</option>
						<option value="octal">Octal</option>
						<option value="decimal">Decimal</option>
						<option value="hexadecimal">Hexadecimal</option>
					</select>
                    </div>
				<button onClick={() => hitung()} className="px-4 py-2 rounded-xl bg-blue-500 w-full text-sm uppercase font-bold text-white">
					Hitung
				</button>
			</div>
			<div className="mt-4 p-4 border rounded-xl text-sm font-mono whitespace-pre-wrap">
				<p>Result : {result}</p>
			</div>
		</div>
	);
}

export default Convertions;