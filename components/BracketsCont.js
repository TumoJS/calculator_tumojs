const BracketsCont = new Element({
    tag: 'div',
    children: [new Element({
        tag: 'div',
        children: [new Element({
            tag: 'span',
            textContent: '('
        })]
    }), new Element({
        tag: 'div',
        children: [new Element({
            tag: 'span',
            textContent: ')'
        })]
    })],
    attributes: {
        class: 'cont_brackets'
    }
})