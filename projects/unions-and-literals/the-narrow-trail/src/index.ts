export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let days: number = 1;
	let resource: "Water" | "Food" | undefined;
	let food = 5;
	let water = 5;
	const roll = () => Math.floor(Math.random() * 6) + 1;
	const isEven = (num: number) => num % 2 === 0;

	while (days <= 7) {
		const dice = roll();

		if (dice === 1) resource = "Food";
		else if (dice === 2) resource = "Water";
		else {
			if (resource === "Water") {
				water = water + dice;
				resource = undefined;
			} else if (resource === "Food") {
				food = food + dice;
				resource = undefined;
			} else {
				resource = isEven(dice) ? "Food" : "Water";
			}
		}

		food -= 1;
		water -= 1;
		days += 1;

		if (food === 0 || water === 0) {
			return false;
		}
	}

	return true;
}
