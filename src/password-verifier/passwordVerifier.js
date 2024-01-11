export class PasswordVerifier {
	#minimumConditions = 3;
	#requiredConditionsCounter = 0;
	#conditionsChecked = 0;

	verify(password) {
		this.#passwordNotNull(password);
		this.#passwordLength(password);
		this.#passwordUpperCase(password);
		this.#passwordLowerCase(password);
		this.#passwordNumber(password);

		return 'Password is correct';
	}

	// #passwordNotNull(password) {
	// 	try {
	// 		this.#conditionsChecked++;

	// 		if (!password) throw new Error('Password should not be null');
	// 		else this.#requiredConditionsCounter++;
	// 	} catch (error) {
	// 		if (this.#requiredConditionsCounter <= this.#minimumConditions)
	// 			this.#requiredConditionsCounter++;
	// 	}
	// }

	#passwordNotNull(password) {
		if (!password) throw new Error('Password should not be null');
		else this.#requiredConditionsCounter++;
	}

	#passwordLength(password) {
		if (password.length <= 8) throw new Error('Password should have more than 8 characters');
	}

	#passwordUpperCase(password) {
		if (!/[A-Z]/.test(password))
			throw new Error('Password should have at least one uppercase letter');
	}

	#passwordLowerCase(password) {
		if (!/[a-z]/.test(password))
			throw new Error('Password should have at least one lowercase letter');
	}

	#passwordNumber(password) {
		if (!/[0-9]/.test(password)) throw new Error('Password should have at least one number');
	}
}
