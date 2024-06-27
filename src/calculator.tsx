import { useState, useEffect } from "react";
import { armorClass } from "./tables";

function Calculator() {
	const [strength, setStrength] = useState<number>(0);
    const [dexterity, setDexterity] = useState<number>(0)


	return (
		<div className="flex flex-col justify-evenly items-center w-full">
			<div className="flex flex-col">
				<h1>Pathfinder Second Edition Percentage Calculator</h1>
				<div className="flex flex-row">
					<div className="flex flex-col">
						<h2>STR</h2>
						<select
							id="strength"
							value={strength}
							onChange={(e) =>
								setStrength(parseInt(e.target.value))
							}
						>
							<option value={-5}>-5</option>
							<option value={-4}>-4</option>
							<option value={-3}>-3</option>
							<option value={-2}>-2</option>
							<option value={-1}>-1</option>
							<option value={0}>0</option>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
						</select>
					</div>
					<div className="flex flex-col">
						<h2>DEX</h2>
						<select
							id="dexterity"
							value={dexterity}
							onChange={(e) =>
								setDexterity(parseInt(e.target.value))
							}
						>
							<option value={-5}>-5</option>
							<option value={-4}>-4</option>
							<option value={-3}>-3</option>
							<option value={-2}>-2</option>
							<option value={-1}>-1</option>
							<option value={0}>0</option>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
						</select>
					</div>
					<div className="flex flex-col">
						<h2>CON</h2>
						<select
							id="strength"
							value={strength}
							onChange={(e) =>
								setStrength(parseInt(e.target.value))
							}
						>
							<option value={-5}>-5</option>
							<option value={-4}>-4</option>
							<option value={-3}>-3</option>
							<option value={-2}>-2</option>
							<option value={-1}>-1</option>
							<option value={0}>0</option>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
						</select>
					</div>
					<div className="flex flex-col">
						<h2>INT</h2>
						<select
							id="strength"
							value={strength}
							onChange={(e) =>
								setStrength(parseInt(e.target.value))
							}
						>
							<option value={-5}>-5</option>
							<option value={-4}>-4</option>
							<option value={-3}>-3</option>
							<option value={-2}>-2</option>
							<option value={-1}>-1</option>
							<option value={0}>0</option>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
						</select>
					</div>
					<div className="flex flex-col">
						<h2>WIS</h2>
						<select
							id="strength"
							value={strength}
							onChange={(e) =>
								setStrength(parseInt(e.target.value))
							}
						>
							<option value={-5}>-5</option>
							<option value={-4}>-4</option>
							<option value={-3}>-3</option>
							<option value={-2}>-2</option>
							<option value={-1}>-1</option>
							<option value={0}>0</option>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
						</select>
					</div>
					<div className="flex flex-col">
						<h2>CHA</h2>
						<select
							id="strength"
							value={strength}
							onChange={(e) =>
								setStrength(parseInt(e.target.value))
							}
						>
							<option value={-5}>-5</option>
							<option value={-4}>-4</option>
							<option value={-3}>-3</option>
							<option value={-2}>-2</option>
							<option value={-1}>-1</option>
							<option value={0}>0</option>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
