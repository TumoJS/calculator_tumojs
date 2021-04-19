const symbarr =  ['+', '-', '/', 'x', '=', '%']

const GridSymbs = new Element({
    tag: 'div',
    children: [],
    attributes: {
        class: 'gridsymbs'
    }
})

symbarr.forEach(i => {
    let elemClass;
    if (i == '=') {
        elemClass = 'equal'
    } else if (i == '+') {
        elemClass = 'plus'
    }
    GridSymbs.data.children.push(new Element({
        tag: 'div',
        attributes: {
            class: `symbelem ${elemClass || ''}`
        },
        children: [new Element({ tag: 'p' , textContent: i})]
    }))
})