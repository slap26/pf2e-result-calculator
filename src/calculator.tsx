import { useState } from "react";
import { results } from "./functions";

function Calculator() {
	const [modifier, setModifier] = useState<string>("");
	const [acdc, setAcdc] = useState<string>("");
	const [agile, setAgile] = useState<boolean>(false);
	const [strike, setStrike] = useState<string>("1st");

	// State for each result category
	const [critFail, setCritFail] = useState<number>(0);
	const [fail, setFail] = useState<number>(0);
	const [success, setSuccess] = useState<number>(0);
	const [critSuccess, setCritSuccess] = useState<number>(0);
	const [secondCritFail, setSecondCritFail] = useState<number>(1);
	const [secondFail, setSecondFail] = useState<number>(1);
	const [secondSuccess, setSecondSuccess] = useState<number>(1);
	const [secondCritSuccess, setSecondCritSuccess] = useState<number>(1);
	const [thirdCritFail, setThirdCritFail] = useState<number>(2);
	const [thirdFail, setThirdFail] = useState<number>(2);
	const [thirdSuccess, setThirdSuccess] = useState<number>(2);
	const [thirdCritSuccess, setThirdCritSuccess] = useState<number>(2);

	const handleCalculate = () => {
		const result = results(Number(modifier), Number(acdc), agile); // Ensure modifier and acdc are numbers

		// Update the states with the values returned from results
		setCritFail(result[0]);
		setFail(result[1]);
		setSuccess(result[2]);
		setCritSuccess(result[3]);
		setSecondCritFail(result[4]);
		setSecondFail(result[5]);
		setSecondSuccess(result[6]);
		setSecondCritSuccess(result[7]);
		setThirdCritFail(result[8]);
		setThirdFail(result[9]);
		setThirdSuccess(result[10]);
		setThirdCritSuccess(result[11]);
	};

	return (
		<div className="flex flex-col justify-around items-center h-screen w-full font-sans p-8 bg-gray-400">
			<div className="flex flex-col items-center w-full border-4 rounded-3xl p-2">
				<div className="flex flex-col justify-center items-center w-full text-violet-600">
					<h1 className="text-3xl">PF2E AC/DC</h1>
					<h1 className="text-3xl">Calculator</h1>
				</div>
				<div className="flex flex-row justify-around w-full pt-4 text-2xl">
					<div className="flex flex-col items-center p-1">
						<p>Modifier</p>
						<input
							type="number"
							id="modifier"
							value={modifier}
							onChange={(e) => {
								setModifier(e.target.value);
							}}
							className="border max-w-24 text-right p-1"
						/>
					</div>
					<div className="flex flex-col items-center p-1">
						<p>AC/DC</p>
						<input
							type="number"
							id="acdc"
							value={acdc}
							onChange={(e) => {
								setAcdc(e.target.value);
							}}
							className="border max-w-24 text-right p-1"
						/>
					</div>
				</div>
				<div className="flex flex-row justify-around w-full text-2xl pt-4">
					<div className="flex flex-row items-center">
						<p>Agile?</p>
						<input
							type="checkbox"
							id="agile"
							checked={agile}
							onChange={(e) => setAgile(e.target.checked)}
							className="p-1"
						/>
					</div>
					<button
						onClick={handleCalculate}
						className="border text-center rounded-2xl hover:bg-white p-4"
					>
						=
					</button>
				</div>
				<div className="flex flex-col w-full pt-5">
					<div className="flex flex-row justify-around w-full">
						<button
							onClick={() => setStrike("1st")}
							className={`border-2 rounded-md p-1 hover:bg-white ${
								strike === "1st"
									? "border-violet-600"
									: "border-white"
							}`}
						>
							1st
						</button>
						<button
							onClick={() => setStrike("2nd")}
							className={`border-2 rounded-md p-1 hover:bg-white ${
								strike === "2nd"
									? "border-violet-600"
									: "border-white"
							}`}
						>
							2nd
						</button>
						<button
							onClick={() => setStrike("3rd")}
							className={`border-2 rounded-md p-1 hover:bg-white ${
								strike === "3rd"
									? "border-violet-600"
									: "border-white"
							}`}
						>
							3rd
						</button>
					</div>
					<div className="flex flex-row justify-around pt-4 text-xl">
						<div className="flex flex-col items-center justify-center text-red-600">
							<p className="text-center">Crit Fail</p>
							<p className="text-center">
								{strike === "1st"
									? `${5 * critFail}%`
									: strike === "2nd"
									? `${5 * secondCritFail}%`
									: `${5 * thirdCritFail}%`}
							</p>
						</div>
						<div className="flex flex-col items-center justify-center text-red-600">
							<p className="text-center">Fail</p>
							<p className="text-center">
								{" "}
								{strike === "1st"
									? `${5 * fail}%`
									: strike === "2nd"
									? `${5 * secondFail}%`
									: `${5 * thirdFail}%`}
							</p>
						</div>
						<div className="flex flex-col items-center justify-center text-green-600">
							<p className="text-center">Success</p>
							<p className="text-center">
								{" "}
								{strike === "1st"
									? `${5 * success}%`
									: strike === "2nd"
									? `${5 * secondSuccess}%`
									: `${5 * thirdSuccess}%`}
							</p>
						</div>
						<div className="flex flex-col items-center justify-center text-green-600">
							<p className="text-center">Crit Success</p>
							<p className="text-center">
								{" "}
								{strike === "1st"
									? `${5 * critSuccess}%`
									: strike === "2nd"
									? `${5 * secondCritSuccess}%`
									: `${5 * thirdCritSuccess}%`}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
