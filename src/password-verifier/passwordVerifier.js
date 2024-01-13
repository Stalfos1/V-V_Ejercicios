export class PasswordVerifier {
	#minimumConditions = 3;
	#requiredConditionsCounter = 0;
	#conditionsChecked = 0;

	verify(password) {

		this.#passwordNotNull(password);
		this.#passwordLength(password);
		this.#passwordLowerCase(password);
		// if (this.#conditionsChecked == 0) return 'Pasword is incorrect';
		// if (this.#conditionsChecked >= this.#minimumConditions) return 'Password is correct';
		this.#passwordUpperCase(password);
		// if (this.#conditionsChecked >= this.#minimumConditions) return 'Password is correct';
		this.#passwordNumber(password);
		if (this.#conditionsChecked >= this.#minimumConditions) return 'Password is correct';		
		return 'Password is incorrect';
	}

	#passwordNotNull(password) {
		if (!password) throw new Error('Password should not be null');
		this.#requiredConditionsCounter++;
		this.#conditionsChecked++;
	}

	#passwordLength(password) {
		if (password.length <= 8) throw new Error ('Password should have more than 8 characters');	
		this.#requiredConditionsCounter++;
		this.#conditionsChecked++;		
	}

	#passwordUpperCase(password) {
		if (!/[A-Z]/.test(password)) throw new  Error( 'Password should have at least one uppercase letter');
		this.#requiredConditionsCounter++;
		this.#conditionsChecked++;
	}

	#passwordLowerCase(password) {
		if (!/[a-z]/.test(password)) throw new Error( 'Password should have at least one lowercase letter');
		this.#requiredConditionsCounter++;
		this.#conditionsChecked++;
	}

	#passwordNumber(password) {
		if (!/[0-9]/.test(password)) throw new Error ('Password should have at least one number');
		this.#requiredConditionsCounter++;
		this.#conditionsChecked++;
	}
}
