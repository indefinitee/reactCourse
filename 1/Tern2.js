function manyChecks() {
	let a = Math.floor(Math.random() * 20) + 1
	console.log(`a = ${a}`)

	let answer = ''

	switch (true) {
		case a > 10:
			answer += 'a is bigger than 10'

			if (a === 5) {
				answer += ' an example of special case'
			}

			if (a === 15) {
				answer += ' but a is not 15'
			}

			if (a > 5) {
				answer += ' and a is greater than 5'
			} else {
				answer += ' and a is less than or equal to 5'
			}

			if (a % 2) {
				answer += ' and a is odd'
			} else {
				answer += ' and a is even'
			}

			break

		case a <= 10:
			answer += 'a is less than or equal to 10'

			if (a === 5) {
				answer += ' an example of special case'
			}

			if (a === 15) {
				answer += ' but a is not 15'
			}

			if (a > 5) {
				answer += ' and a is greater than 5'
			} else {
				answer += ' and a is less than or equal to 5'
			}

			if (a % 2) {
				answer += ' and a is odd'
			} else {
				answer += ' and a is even'
			}

			break
	}

	return answer
}

let answer = manyChecks()
console.log(answer)
