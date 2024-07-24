export function results(monsterDC: number, playerModifier: number) {
	let critFail = 0;
	let fail = 0;
	let success = 0;
	let critSuccess = 0;
	for (let i = 1; i <= 20; i++) {
		let roll = playerModifier + i;
		if (i > 1 && i < 20) {
			if (roll < monsterDC) {
				if (roll <= monsterDC - 10) {
					critFail++;
				} else {
					fail++;
				}
			} else {
				if (roll >= monsterDC + 10) {
					critSuccess++;
				} else {
					success++;
				}
			}
		} else {
			if (i === 20) {
				if (roll >= monsterDC) {
					critSuccess++;
				} else if (roll <= monsterDC - 10) {
					fail++;
				} else {
					success++;
				}
			} else {
				if (roll >= monsterDC + 10) {
					success++;
				} else if (roll >= monsterDC) {
					fail++;
				} else {
					critFail++;
				}
			}
		}
	}
	return [critFail, fail, success, critSuccess];
}

export function secondAndThirdResults(
	monsterDC: number,
	playerModifier: number,
	agile: boolean
) {
	let secondCritFail = 0;
	let secondFail = 0;
	let secondSuccess = 0;
	let secondCritSuccess = 0;
	let thirdCritFail = 0;
	let thirdFail = 0;
	let thirdSuccess = 0;
	let thirdCritSuccess = 0;
	let secondStrike = -5;
	let thirdStrike = -10;
	if (agile === true) {
		secondStrike = -4;
		thirdStrike = -8;
	}
	for (let i = 1; i <= 20; i++) {
		let secondRoll = playerModifier + i + secondStrike;
		let thirdRoll = playerModifier + i + thirdStrike;
		if (i > 1 && i < 20) {
			if (secondRoll < monsterDC) {
				if (secondRoll <= monsterDC - 10) {
					secondCritFail++;
					thirdCritFail++;
				} else {
					secondFail++;
					if (thirdRoll <= monsterDC - 10) {
						thirdCritFail++;
					} else {
						thirdFail++;
					}
				}
			} else {
				if (secondRoll >= monsterDC + 10) {
					secondCritSuccess++;
					if (thirdRoll < monsterDC) {
						if (thirdRoll <= monsterDC - 10) {
							thirdCritFail++;
						} else {
							thirdFail++;
						}
					} else if (thirdRoll >= monsterDC + 10) {
						thirdCritSuccess++;
					} else {
						thirdSuccess++;
					}
				} else {
					secondSuccess++;
					if (thirdRoll < monsterDC) {
						if (thirdRoll <= monsterDC - 10) {
							thirdCritFail++;
						} else {
							thirdFail++;
						}
					} else if (thirdRoll >= monsterDC + 10) {
						thirdCritSuccess++;
					} else {
						thirdSuccess++;
					}
				}
			}
		} else {
			if (i === 20) {
				if (secondRoll >= monsterDC) {
					secondCritSuccess++;
					if (thirdRoll >= monsterDC) {
						thirdCritSuccess++;
					} else if (thirdRoll <= monsterDC - 10) {
						thirdFail++;
					} else {
						thirdSuccess++;
					}
				} else if (secondRoll <= monsterDC - 10) {
					secondFail++;
					thirdFail++;
				} else {
					secondSuccess++;
					if (thirdRoll >= monsterDC) {
						thirdCritSuccess++;
					} else if (thirdRoll <= monsterDC - 10) {
						thirdFail++;
					} else {
						thirdSuccess++;
					}
				}
			} else {
				if (secondRoll >= monsterDC + 10) {
					secondSuccess++;
					if (thirdRoll >= monsterDC + 10) {
						thirdSuccess++;
					} else if (thirdRoll >= monsterDC) {
						thirdFail++;
					} else {
						thirdCritFail++;
					}
				} else if (secondRoll >= monsterDC) {
					secondFail++;
					if (thirdRoll >= monsterDC) {
						thirdFail++;
					} else {
						thirdCritFail++;
					}
				} else {
					secondCritFail++;
					thirdCritFail++;
				}
			}
		}
	}
	return [
		secondCritFail,
		secondFail,
		secondSuccess,
		secondCritSuccess,
		thirdCritFail,
		thirdFail,
		thirdSuccess,
		thirdCritSuccess,
	];
}
