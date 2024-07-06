export function results(monsterDC: number, playerModifier: number) {
	let critFail = 0;
	let fail = 0;
	let success = 0;
	let critSuccess = 0;
	for (let i = 1; i <= 20; i++) {
		let roll = playerModifier + i;
		if (i > 1 && i < 20) {
			if (roll < monsterDC) {
				if (roll < monsterDC - 10) {
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
				} else if (roll < monsterDC - 10) {
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
