import Strike from "./actions/strike";
import { act, useState } from "react";
import { MonsterLevelType, MonsterDifficultyType } from "./tables";

function Calculator() {
	const [playerLvl, setPlayerLvl] = useState<number>(1);
	const [strength, setStrength] = useState<number>(0);
	const [constitution, setConstitution] = useState<number>(0);
	const [dexterity, setDexterity] = useState<number>(0);
	const [intelligence, setIntelligence] = useState<number>(0);
	const [charisma, setCharisma] = useState<number>(0);
	const [wisdom, setWisdom] = useState<number>(0);
	const [critFail, setCritFail] = useState<number>(0);
	const [fail, setFail] = useState<number>(0);
	const [success, setSuccess] = useState<number>(0);
	const [critSuccess, setCritSuccess] = useState<number>(0);
	const [action, setAction] = useState<string>("strike");
	const [monsterLvl, setMonsterLvl] = useState<MonsterLevelType>("-1");
	const [monsterDifficulty, setMonsterDifficulty] =
		useState<MonsterDifficultyType>("moderate");

	const monsterLvls = Array.from({ length: 26 }, (_, i) => ({
		value: i - 1,
		label: `${i - 1}`,
	}));

	const playerLvls = Array.from({ length: 20 }, (_, index) => ({
		value: index + 1,
		label: `${index + 1}`,
	}));

	return (
		<main className="flex flex-col flex-grow min-h-screen">
			<div className="flex flex-col justify-evenly items-center w-full mt-10">
				<h1 className="text-violet-700 text-2xl font-bold">
					Player Character
				</h1>
				<div className="flex flex-row place-content-evenly w-full p-1">
					<div className="flex flex-col place-items-center">
						<h2>Lvl</h2>
						<select
							id="playerLvl"
							value={playerLvl}
							onChange={(e) =>
								setPlayerLvl(parseInt(e.target.value))
							}
							className="bg-slate-700 rounded-md"
						>
							{playerLvls.map((plvl) => (
								<option key={plvl.value} value={plvl.value}>
									{plvl.label}
								</option>
							))}
						</select>
					</div>
					<div className="flex flex-col place-items-center">
						<h2>STR</h2>
						<select
							id="strength"
							value={strength}
							onChange={(e) =>
								setStrength(parseInt(e.target.value))
							}
							className="bg-slate-700 rounded-md"
						>
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
							<option value={6}>6</option>
						</select>
					</div>
					<div className="flex flex-col place-items-center">
						<h2>DEX</h2>
						<select
							id="dexterity"
							value={dexterity}
							onChange={(e) =>
								setDexterity(parseInt(e.target.value))
							}
							className="bg-slate-700 rounded-md"
						>
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
							<option value={6}>6</option>
						</select>
					</div>
					<div className="flex flex-col place-items-center">
						<h2>CON</h2>
						<select
							id="constitution"
							value={constitution}
							onChange={(e) =>
								setConstitution(parseInt(e.target.value))
							}
							className="bg-slate-700 rounded-md"
						>
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
							<option value={6}>6</option>
						</select>
					</div>
					<div className="flex flex-col place-items-center">
						<h2>INT</h2>
						<select
							id="intelligence"
							value={intelligence}
							onChange={(e) =>
								setIntelligence(parseInt(e.target.value))
							}
							className="bg-slate-700 rounded-md"
						>
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
							<option value={6}>6</option>
						</select>
					</div>
					<div className="flex flex-col place-items-center">
						<h2>WIS</h2>
						<select
							id="wisdom"
							value={wisdom}
							onChange={(e) =>
								setWisdom(parseInt(e.target.value))
							}
							className="bg-slate-700 rounded-md"
						>
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
							<option value={6}>6</option>
						</select>
					</div>
					<div className="flex flex-col place-items-center">
						<h2>CHA</h2>
						<select
							id="charisma"
							value={charisma}
							onChange={(e) =>
								setCharisma(parseInt(e.target.value))
							}
							className="bg-slate-700 rounded-md"
						>
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
							<option value={6}>6</option>
						</select>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-evenly items-center w-full mt-6">
				<h1 className="text-violet-700 text-2xl font-bold">Monster</h1>
				<div className="flex flex-row w-full justify-evenly p-1">
					<div className="flex flex-col place-items-center">
						<h2>Lvl</h2>
						<select
							className="bg-slate-700 rounded-md"
							id="monsterLvl"
							value={monsterLvl}
							onChange={(e) =>
								setMonsterLvl(
									e.target.value as MonsterLevelType
								)
							}
						>
							{monsterLvls.map((monsterLvl) => (
								<option
									key={monsterLvl.value}
									value={monsterLvl.value}
								>
									{monsterLvl.label}
								</option>
							))}
						</select>
					</div>
					<div className="flex flex-col place-items-center">
						<h2>Difficulty</h2>
						<select
							className="bg-slate-700 rounded-md"
							id="monsterDifficulty"
							value={monsterDifficulty}
							onChange={(e) =>
								setMonsterDifficulty(
									e.target.value as MonsterDifficultyType
								)
							}
						>
							<option value={"low"}>Low</option>
							<option value={"moderate"}>Moderate</option>
							<option value={"high"}>High</option>
							<option value={"extreme"}>Extreme</option>
						</select>
					</div>
				</div>
			</div>
			<div className="flex flex-col place-items-center mt-6">
				<h2 className="text-violet-700 text-2xl font-bold">Action</h2>
				<select
					className=" bg-slate-700 rounded-md p-1"
					id="action"
					value={action}
					onChange={(e) => setAction(e.target.value)}
				>
					<option value={"strike"}>Strike</option>
				</select>
			</div>

			{action === "strike" ? (
				<Strike
					monsterLvl={monsterLvl}
					monsterDifficulty={monsterDifficulty}
					playerLvl={playerLvl}
					strength={strength}
					dexterity={dexterity}
					setCritFail={setCritFail}
					setFail={setFail}
					setSuccess={setSuccess}
					setCritSuccess={setCritSuccess}
				/>
			) : (
				<p>Placeholder</p>
			)}
			<div className="flex w-full justify-evenly">
				<div className="flex flex-col place-items-center text-red-700">
					<h2>Crit Fail</h2>
					<h3>{critFail * 5}%</h3>
				</div>
				<div className="flex flex-col place-items-center text-red-700">
					<h2>Fail</h2>
					<h3>{fail * 5}%</h3>
				</div>
				<div className="flex flex-col place-items-center text-green-700">
					<h2>Success</h2>
					<h3>{success * 5}%</h3>
				</div>
				<div className="flex flex-col place-items-center text-green-700">
					<h2>Crit Success</h2>
					<h3>{critSuccess * 5}%</h3>
				</div>
			</div>
		</main>
	);
}

export default Calculator;
