class Stack {
	constructor () {
		this._array = [];
	}

	push (argument) {
		this._array.push(argument);
	}

	pop () {
		return this._array.pop();
	}
}

function main () {
	var st = new Stack();
	st.push('Hello World!');
	st.push(1223);
	st.push('last one');
	console.log(st.pop());
	console.log(st.pop());
	console.log(st.pop());
	console.log(st.pop());
}

main();
