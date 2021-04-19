const symbarr = ['+', '-', '/', '*', '.', '=', '**']
let count = 0
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
            class: `symbelem ${elemClass}`
        },
        children: [new Element({ tag: 'p', textContent: i })],
        events: {
            onclick: () => {
                const vallen = CalcInput.data.children[0].data.attributes.value.length - 1
                if (CalcInput.data.children[0].data.attributes.value[vallen] !== i && !symbarr.includes(CalcInput.data.children[0].data.attributes.value[vallen]) && i != '=') {
                    ++count
                    CalcInput.data.children[0].setData({
                        attributes: { class: 'input', type: 'text', disabled: '', value: CalcInput.data.children[0].data.attributes.value + i.toString() }
                    })
                }
                if (i == '=') {
                	let ev = 0
                	try {
                		ev = eval(CalcInput.data.children[0].data.attributes.value)
                	} catch (err) {
                		ev = false
                	}
                	let val
                	if (typeof(ev) == 'boolean') {
                		val = CalcInput.data.children[0].data.attributes.value
                	} else {
                		val = ev
                	}
                	CalcInput.data.children[0].setData({
                        attributes: { class: 'input', type: 'text', value: val.toString(), disabled: ''}
                    })
                } else if (i == '.') {
        			if (validate2(CalcInput.data.children[0].data.attributes.value + '.')) {
        				val = CalcInput.data.children[0].data.attributes.value.toString() + '.'
        			} else {
        				val = CalcInput.data.children[0].data.attributes.value.toString()
        			}
        		}
            }
        }
    }))
})