/* eslint-disable @typescript-eslint/no-explicit-any */

export default class Logger {
	constructor(public readonly name: string) {
		this.name = name;
	}

	debug(...args: any[]) {
		console.debug(
			`%c${new Date().toLocaleTimeString()} | ${this.name} | DEBUG |`,
			`color: LimeGreen`,
			...args,
		);
	}

	info(...args: any[]) {
		console.debug(
			`%c${new Date().toLocaleTimeString()} | ${this.name} | DEBUG |`,
			`color: DodgerBlue`,
			...args,
		);
	}

	warn(...args: any[]) {
		console.debug(
			`%c${new Date().toLocaleTimeString()} | ${this.name} | DEBUG |`,
			`color: Tomato`,
			...args,
		);
	}

	error(...args: any[]) {
		console.debug(
			`%c${new Date().toLocaleTimeString()} | ${this.name} | DEBUG |`,
			`color: Red`,
			...args,
		);
	}
}
