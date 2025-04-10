export function results(modifier: number, acdc: number, agile: boolean) {
	let critFail = 0;
	let fail = 0;
	let success = 0;
	let critSuccess = 0;

	let secondCritFail = 0;
	let secondFail = 0;
	let secondSuccess = 0;
	let secondCritSuccess = 0;

	let thirdCritFail = 0;
	let thirdFail = 0;
	let thirdSuccess = 0;
	let thirdCritSuccess = 0;

	let secondModifier: number;
	let thirdModifier: number;

	if (agile === true) {
		secondModifier = 4;
		thirdModifier = 8;
	} else {
		secondModifier = 5;
		thirdModifier = 10;
	}

	//handle nat 20
	if (20 + modifier - thirdModifier >= acdc) {
		thirdCritSuccess++;
		secondCritSuccess++;
		critSuccess++;
	} else if (20 + modifier >= acdc) {
		critSuccess++;
		if (20 + modifier - secondModifier >= acdc) {
			secondCritSuccess++;
			if (20 + modifier - thirdModifier <= acdc - 10) {
				thirdFail++;
			} else {
				thirdSuccess++;
			}
		} else if (20 + modifier - secondModifier <= acdc - 10) {
			secondFail++;
			thirdFail++;
		} else {
			secondSuccess++;
			if (20 + modifier - thirdModifier <= acdc - 10) {
				thirdFail++;
			} else {
				thirdSuccess++;
			}
		}
	} else if (20 + modifier <= acdc - 10) {
		fail++;
		secondFail++;
		thirdFail++;
	} else {
		success++;
		if (20 + modifier - secondModifier > acdc - 10) {
			secondSuccess++;
			if (20 + modifier - thirdModifier > acdc - 10) {
				thirdSuccess++;
			} else {
				thirdFail++;
			}
		} else {
			secondFail++;
			thirdFail++;
		}
	}

	// handle nat 1's
	if (1 + modifier < acdc) {
		critFail++;
		secondCritFail++;
		thirdCritFail++;
	} else if (1 + modifier >= acdc + 10) {
		success++;
		if (1 + modifier - secondModifier >= acdc + 10) {
			secondSuccess++;
			if (1 + modifier - thirdModifier >= acdc + 10) {
				thirdSuccess++;
			} else if (1 + modifier - thirdModifier < acdc) {
				thirdCritFail++;
			} else {
				thirdFail++;
			}
		} else if (1 + modifier - secondModifier < acdc) {
			secondCritFail++;
			thirdCritFail++;
		} else {
			secondFail++;
			if (1 + modifier - thirdModifier < acdc) {
				thirdCritFail++;
			} else {
				thirdFail++;
			}
		}
	} else {
		fail++;
		if (1 + modifier - secondModifier < acdc) {
			secondCritFail++;
			thirdCritFail++;
		} else {
			secondFail++;
			if (1 + modifier - thirdModifier < acdc) {
				thirdCritFail++;
			} else {
				thirdFail++;
			}
		}
	}

	//handle 2-19
	for (let i = 2; i <= 19; i++) {
		let roll = modifier + i;
		if (roll - thirdModifier >= acdc + 10) {
			critSuccess++;
			secondCritSuccess++;
			thirdCritSuccess++;
		} else if (roll <= acdc - 10) {
			critFail++;
			secondCritFail++;
			thirdCritFail++;
		} else if (roll >= acdc + 10) {
			critSuccess++;
			if (roll - secondModifier >= acdc + 10) {
				secondCritSuccess++;
				if (roll - thirdModifier >= acdc) {
					thirdSuccess++;
				} else if (roll - thirdModifier <= acdc - 10) {
					thirdCritFail++;
				} else {
					thirdFail++;
				}
			} else if (roll - secondModifier >= acdc) {
				secondSuccess++;
				if (roll - thirdModifier >= acdc) {
					thirdSuccess++;
				} else if (roll - thirdModifier <= acdc - 10) {
					thirdCritFail++;
				} else {
					thirdFail++;
				}
			} else if (roll - secondModifier <= acdc - 10) {
				secondCritFail++;
				thirdCritFail++;
			} else {
				secondFail++;
				if (roll - thirdModifier <= acdc - 10) {
					thirdCritFail++;
				} else {
					thirdFail++;
				}
			}
		} else if (roll >= acdc) {
			success++;
			if (roll - secondModifier >= acdc) {
				secondSuccess++;
				if (roll - thirdModifier >= acdc) {
					thirdSuccess++;
				} else if (roll - thirdModifier <= acdc - 10) {
					thirdCritFail++;
				} else {
					thirdFail++;
				}
			} else if (roll - secondModifier <= acdc - 10) {
				secondCritFail++;
				thirdCritFail++;
			} else {
				secondFail++;
				if (roll - thirdModifier <= acdc - 10) {
					thirdCritFail++;
				} else {
					thirdFail++;
				}
			}
		} else {
			fail++;
			if (roll - secondModifier <= acdc - 10) {
				secondCritFail++;
				thirdCritFail++;
			} else {
				secondFail++;
				if (roll - thirdModifier <= acdc - 10) {
					thirdCritFail++;
				} else {
					thirdFail++;
				}
			}
		}
	}
	return [
		critFail,
		fail,
		success,
		critSuccess,
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
