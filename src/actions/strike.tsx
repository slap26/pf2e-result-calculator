import { useEffect, useState } from "react";
import { monsterArmorClass } from "../tables";
import { MonsterDifficultyType, MonsterLevelType } from "../tables";
import { results, secondAndThirdResults } from "../functions";

interface StrikeProps {
	monsterLvl: MonsterLevelType;
	monsterDifficulty: MonsterDifficultyType;
	strength: number;
	dexterity: number;
	playerLvl: number;
	playerBonus: number;
	monsterBonus: number;
}

function Strike({
	monsterLvl,
	monsterDifficulty,
	strength,
	dexterity,
	playerLvl,
	playerBonus,
	monsterBonus,
}: StrikeProps) {
	const [strikeType, setStrikeType] = useState<string>("melee");
	const [finesse, setFinesse] = useState<boolean>(false);
	const [agile, setAgile] = useState<boolean>(false);
	const [monsterDC, setMonsterDC] = useState<number>(
		monsterArmorClass[monsterLvl].moderate + monsterBonus
	);
	const [proficiency, setProficiency] = useState<number>(2);
	const [playerModifier, setPlayerModifier] = useState<number>(
		strength + proficiency + playerLvl + playerBonus
	);
	const [strikeModifier, setStrikeModifier] =
		useState<number>(playerModifier);
	const [potencyRune, setPotencyRune] = useState<number>(0);
	const [strikingRune, setStrikingRune] = useState<number>(0);
	const [critFail, setCritFail] = useState<number>(0);
	const [fail, setFail] = useState<number>(0);
	const [success, setSuccess] = useState<number>(0);
	const [critSuccess, setCritSuccess] = useState<number>(0);
	const [secondCritFail, setSecondCritFail] = useState<number>(0);
	const [secondFail, setSecondFail] = useState<number>(0);
	const [secondSuccess, setSecondSuccess] = useState<number>(0);
	const [secondCritSuccess, setSecondCritSuccess] = useState<number>(0);
	const [thirdCritFail, setThirdCritFail] = useState<number>(0);
	const [thirdFail, setThirdFail] = useState<number>(0);
	const [thirdSuccess, setThirdSuccess] = useState<number>(0);
	const [thirdCritSuccess, setThirdCritSuccess] = useState<number>(0);

	console.log("strike modifier", strikeModifier);
	console.log("monsterDC", monsterDC);
	useEffect(() => {
		setMonsterDC(
			monsterArmorClass[monsterLvl]?.[monsterDifficulty] + monsterBonus ||
				0
		);
	}, [monsterLvl, monsterDifficulty, monsterBonus]);

	useEffect(() => {
		if (strikeType === "melee") {
			if (finesse === false) {
				setPlayerModifier(
					strength + proficiency + playerLvl + playerBonus
				);
			} else {
				if (dexterity >= strength) {
					setPlayerModifier(
						dexterity + proficiency + playerLvl + playerBonus
					);
				} else {
					setPlayerModifier(
						strength + proficiency + playerLvl + playerBonus
					);
				}
			}
		} else if (strikeType === "ranged") {
			setPlayerModifier(
				dexterity + proficiency + playerLvl + playerBonus
			);
		}
	}, [
		strength,
		dexterity,
		playerLvl,
		playerBonus,
		proficiency,
		finesse,
		strikeType,
	]);

	useEffect(() => {
		setStrikeModifier(playerModifier + potencyRune);
	}, [playerModifier, potencyRune]);

	const handleAnalyze = () => {
		const [cf, f, s, cs] = results(monsterDC, strikeModifier);
		const [scf, sf, ss, scs, tcf, tf, ts, tcs] = secondAndThirdResults(
			monsterDC,
			strikeModifier,
			agile
		);
		setCritFail(cf);
		setFail(f);
		setSuccess(s);
		setCritSuccess(cs);
		setSecondCritFail(scf);
		setSecondFail(sf);
		setSecondSuccess(ss);
		setSecondCritSuccess(scs);
		setThirdCritFail(tcf);
		setThirdFail(tf);
		setThirdSuccess(ts);
		setThirdCritSuccess(tcs);
	};
	return (
		<div className="flex flex-col place-items-center mt-6">
			<h1 className="text-violet-700 text-2xl font-bold">Weapon</h1>
			<div className="flex flex-row place-content-evenly  w-full">
				<div className="flex flex-col place-items-center">
					<h1>Type</h1>
					<select
						className="bg-slate-700 rounded-md"
						id="stikeType"
						value={strikeType}
						onChange={(e) => setStrikeType(e.target.value)}
					>
						<option value={"melee"}>Melee</option>
						<option value={"ranged"}>Ranged</option>
					</select>
				</div>
				<div className="flex flex-col place-items-center">
					<h1>Proficency</h1>
					<select
						className="bg-slate-700 rounded-md"
						id="proficent"
						value={proficiency}
						onChange={(e) =>
							setProficiency(parseInt(e.target.value))
						}
					>
						<option value={2}>Trained</option>
						<option value={4}>Expert</option>
						<option value={6}>Master</option>
						<option value={8}>Legendary</option>
					</select>
				</div>
				<div className="flex flex-col place-items-center">
					<h1>Potency</h1>
					<select
						className="bg-slate-700 rounded-md"
						id="potencyRune"
						value={potencyRune}
						onChange={(e) =>
							setPotencyRune(parseInt(e.target.value))
						}
					>
						<option value={0}>None</option>
						<option value={1}>+1</option>
						<option value={2}>+2</option>
						<option value={3}>+3</option>
					</select>
				</div>

				<div className="flex flex-col items-start">
					<div>
						<input
							type="checkbox"
							id="agile"
							name="agile"
							onChange={() => setAgile(!agile)}
						/>
						<label className="" htmlFor="agile">
							Agile
						</label>
					</div>
					<div
						className={`${
							strikeType === "ranged" ? "invisible" : ""
						}`}
					>
						<input
							type="checkbox"
							id="finesse"
							name="finesse"
							onChange={() => setFinesse(!finesse)}
						/>
						<label className="" htmlFor="finesse">
							Finesse
						</label>
					</div>
				</div>
			</div>
			<button
				className="border border-red-600 pr-2 hover:border-blue-600"
				onClick={() => {
					handleAnalyze();
				}}
			>
				Analyze
			</button>
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
			<div className="flex w-full justify-evenly">
				<div className="flex flex-col place-items-center text-red-700">
					<h2>Crit Fail</h2>
					<h3>{secondCritFail * 5}%</h3>
				</div>
				<div className="flex flex-col place-items-center text-red-700">
					<h2>Fail</h2>
					<h3>{secondFail * 5}%</h3>
				</div>
				<div className="flex flex-col place-items-center text-green-700">
					<h2>Success</h2>
					<h3>{secondSuccess * 5}%</h3>
				</div>
				<div className="flex flex-col place-items-center text-green-700">
					<h2>Crit Success</h2>
					<h3>{secondCritSuccess * 5}%</h3>
				</div>
			</div>
			<div className="flex w-full justify-evenly">
				<div className="flex flex-col place-items-center text-red-700">
					<h2>Crit Fail</h2>
					<h3>{thirdCritFail * 5}%</h3>
				</div>
				<div className="flex flex-col place-items-center text-red-700">
					<h2>Fail</h2>
					<h3>{thirdFail * 5}%</h3>
				</div>
				<div className="flex flex-col place-items-center text-green-700">
					<h2>Success</h2>
					<h3>{thirdSuccess * 5}%</h3>
				</div>
				<div className="flex flex-col place-items-center text-green-700">
					<h2>Crit Success</h2>
					<h3>{thirdCritSuccess * 5}%</h3>
				</div>
			</div>
		</div>
	);
}

export default Strike;
