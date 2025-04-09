import { useState } from "react";

function Calculator() {
	return (
		<div className="flex flex-col justify-around items-center h-screen w-full font-sans p-8 bg-gray-400">
			<div className="flex flex-col items-center w-full border p-2">
				<div className="flex flex-col justify-center items-center w-full text-violet-600">
					<h1 className="text-3xl">PF2E AC/DC</h1>
					<h1 className="text-3xl">Calculator</h1>
				</div>
				<div className="flex flex-row justify-around w-full">
					<div className="flex flex-col items-center">
						<p>Modifier</p>
						<input type="number" className="border max-w-24" />
					</div>
					<div className="flex flex-col items-center">
						<p>AC/DC</p>
						<input type="number" className="border max-w-24" />
					</div>
				</div>
				<div className="flex flex-row justify-around w-full">
					<div className="flex flex-row">
						<p>Agile?</p>
						<input type="checkbox" />
					</div>
					<button className="border">=</button>
				</div>
				<div className="flex flex-col w-full">
					<div className="flex flex-row justify-around w-full">
						<button className="border">1st</button>
						<button className="border">2nd</button>
						<button className="border">3rd</button>
					</div>
					<div className="flex flex-row justify-around">
						<div className="flex flex-col items-center justify-center text-red-600">
							<p className="text-center">Crit Fail</p>
							<p className="text-center">5%</p>
						</div>
						<div className="flex flex-col items-center justify-center text-red-600">
							<p className="text-center">Fail</p>
							<p className="text-center">10%</p>
						</div>
						<div className="flex flex-col items-center justify-center text-green-600">
							<p className="text-center">Success</p>
							<p className="text-center">70%</p>
						</div>
						<div className="flex flex-col items-center justify-center text-green-600">
							<p className="text-center">Crit Success</p>
							<p className="text-center">15%</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
