const BracketsCont = new Element({
    tag: 'div',
    children: [new Element({
        tag: 'div',
        children: [new Element({
            tag: 'span',
            textContent: '('
        })],
        events: {
            onclick: () => {
                CalcInput.data.children[0].setData({
                    attributes: { class: 'input', type: 'text', value: CalcInput.data.children[0].data.attributes.value + '(' }
                })
            }
        }
    }), new Element({
        tag: 'div',
        children: [new Element({
            tag: 'span',
            textContent: ')'
        })],
        events: {
            onclick: () => {
                CalcInput.data.children[0].setData({
                    attributes: { class: 'input', type: 'text', value: CalcInput.data.children[0].data.attributes.value + ')' }
                })
            }
        }
    })],
    attributes: {
        class: 'cont_brackets'
    }
})