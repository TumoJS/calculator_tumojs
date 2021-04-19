const validate = (str) => {
	var count = 0
	str.split('').forEach(s => {
		if (s == '.') {
			++count
		}
	})
	return count <= 1 ? true : false
}
const validate2 = (str) => {
	var count = 0
	const arr = str.split(/[\+x/-]/)
	arr.forEach(i => {
		if (validate(i)) {
			++count
		}
	})
	return count == arr.length ? true : false
}

const CalcInput = new Element({
    tag: 'div',
    children: [new Element({ tag: 'input', attributes: {  class: 'input', type: 'text', value: '0', disabled: '' } })]
})
const Main = new Element({
    tag: 'main',
    children: [new Element({ tag: 'div', children: [CalcInput, BracketsCont, GridNums, GridSymbs] })]
})

const AppRoot = new App({
    rootElement: "#app",
    content: Main
}).render()