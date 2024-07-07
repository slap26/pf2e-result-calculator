import { useEffect, useState } from "react";
import { monsterArmorClass } from "../tables";
import { MonsterDifficultyType, MonsterLevelType } from "../tables";
import { results } from "../functions";

interface StrikeProps {
	monsterLvl: MonsterLevelType;
	monsterDifficulty: MonsterDifficultyType;
	strength: number;
	dexterity: number;
	playerLvl: number;
	setCritFail: React.Dispatch<React.SetStateAction<number>>;
	setFail: React.Dispatch<React.SetStateAction<number>>;
	setSuccess: React.Dispatch<React.SetStateAction<number>>;
	setCritSuccess: React.Dispatch<React.SetStateAction<number>>;
}

function Strike({
	monsterLvl,
	monsterDifficulty,
	strength,
	dexterity,
	playerLvl,
	setCritFail,
	setFail,
	setSuccess,
	setCritSuccess,
}: StrikeProps) {
	const [finesse, setFinesse] = useState<boolean>(false);
	const [monsterDC, setMonsterDC] = useState<number>(
		monsterArmorClass[monsterLvl].moderate
	);
	const [proficiency, setProficiency] = useState<number>(2);
	const [playerModifier, setPlayerModifier] = useState<number>(
		strength + proficiency + playerLvl
	);
	const [strikeModifier, setStrikeModifier] =
		useState<number>(playerModifier);

	useEffect(() => {
		setMonsterDC(monsterArmorClass[monsterLvl]?.[monsterDifficulty] || 0);
	}, [monsterLvl, monsterDifficulty]);

	useEffect(() => {
		if (finesse === false) {
			setPlayerModifier(strength + proficiency + playerLvl);
		} else {
			if (dexterity >= strength) {
				setPlayerModifier(dexterity + proficiency + playerLvl);
			} else {
				setPlayerModifier(strength + proficiency + playerLvl);
			}
		}
	}, [strength, dexterity, playerLvl, proficiency, finesse]);

	useEffect(() => {
		setStrikeModifier(playerModifier);
	}, [strikeModifier, playerModifier]);

	const handleAnalyze = () => {
		const [critFail, fail, success, critSuccess] = results(
			monsterDC,
			strikeModifier
		);
		setCritFail(critFail);
		setFail(fail);
		setSuccess(success);
		setCritSuccess(critSuccess);
	};
	return (
		<div className="flex flex-col place-items-center mt-6">
			<h1 className="text-violet-700 text-2xl font-bold">Weapon</h1>
			<div className="flex flex-row place-content-evenly  w-full">
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

				<div className="flex flex-col items-start">
					<div>
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
					<div>
						<input type="checkbox" id="agile" name="agile" />
						<label className="" htmlFor="agile">
							Agile
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
		</div>
	);
}

export default Strike;
