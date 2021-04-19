const CalcInput = new Element({
    tag: 'div',
    children: [new Element({ tag: 'input', attributes: {  class: 'input', type: 'text', value: '0' } })],
    attributes: {
        class: 'calcinput'
    }
})

const Main = new Element({
    tag: 'main',
    children: [new Element({ tag: 'div', children: [CalcInput, BracketsCont, GridNums, GridSymbs] })]
})

const AppRoot = new App({
    rootElement: "#app",
    content: Main
}).render()