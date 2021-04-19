const numarr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'C']

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
            class: 'numelem'
        },
        children: [new Element({ tag: 'p' , textContent: i})],
        events: {
        	onclick: () => {
        		var val
        		if (i == 'C') {
        			val = '0'
        		}
        		else if (i == '.') {
        			if (!CalcInput.data.children[0].data.attributes.value.includes('.')) {
        				let vallen = CalcInput.data.children[0].data.attributes.value.length - 1
	        			if (CalcInput.data.children[0].data.attributes.value[vallen] == '.') {val = CalcInput.data.children[0].data.attributes.value.toString()}
	        			else if (CalcInput.data.children[0].data.attributes.value[vallen] == '0') {
			        		val = CalcInput.data.children[0].data.attributes.value.toString() + '.'
	        			} else {
	        				val = CalcInput.data.children[0].data.attributes.value.toString() + '.'
	        			}
        			} else {
        				val = CalcInput.data.children[0].data.attributes.value.toString()
        			}
        		} else if (CalcInput.data.children[0].data.attributes.value.toString() == '0') {
	        		val = i.toString()
        		}
        		else {
	        		val = CalcInput.data.children[0].data.attributes.value.toString() + i.toString()
        		}
        		CalcInput.data.children[0].setData({
        			attributes: { class: 'input', type: 'text', value: val}
        		})
        		console.log(CalcInput.data.children[0].data.attributes.value)
        	}
        }
    }))
})

