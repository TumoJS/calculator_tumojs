const numarr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'AC', 'C', 'Click to copy the answer']

const GridNums = new Element({
    tag: 'div',
    children: [],
    attributes: {
        class: 'gridnums'
    }
})

numarr.forEach(i => {
    GridNums.data.children.push(new Element({
        tag: 'div',
        attributes: {
            class: i == 'Click to copy the answer' ? 'numelem copybutton' : 'numelem'
        },
        children: [new Element({ tag: 'p' , textContent: i})],
        events: {
        	onclick: () => {
        		var val
        		if (i == 'AC') {
        			val = '0'
				} else if (i == 'C') {
					const vallen = CalcInput.data.children[0].data.attributes.value.length
					if (vallen == 1) {
						val = '0'
					} else {
						val = CalcInput.data.children[0].data.attributes.value.substring(0, vallen - 1);
					}
				} else if (i == 'Click to copy the answer') {
                    val = CalcInput.data.children[0].data.attributes.value
                    CalcInput.data.children[0].setData({
                        attributes: { class: 'input', type: 'text', value: val}
                    })
                    CalcInput.element.childNodes[0].select()
                    document.execCommand("copy")
                } else if (CalcInput.data.children[0].data.attributes.value.toString() == '0') {
	        		val = i.toString()
        		}
        		else {
	        		val = CalcInput.data.children[0].data.attributes.value.toString() + i.toString()
        		}
        		CalcInput.data.children[0].setData({
        			attributes: { class: 'input', type: 'text', value: val, disabled: ''}
        		})
        	}
        }
    }))
})

