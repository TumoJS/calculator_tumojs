class App {
	constructor(data) {
		this.data = data;
		if (this.data.content) {
			this.data.content.data.parentElement = this;
		}
	}
	update() {
		this.render();
	}
	render() {
		const content = this.data.content.createElement();
		const rootEl = document.querySelector(this.data.rootElement);
		rootEl.innerHTML = "";
		rootEl.appendChild(content);
	}
}

class Element {
	constructor(data) {
		this.data = data;
		if (this.data.children) {
			this.data.children.forEach(child => {
				child.data.parentElement = this
			});
		}
	}
	createElement() {
		const element = document.createElement(this.data.tag);
		if (this.data.children) {
			this.data.children.forEach(child => {
				element.appendChild(child.createElement());
			});
		}
		if (this.data.events) {
			for (const [key, value] of Object.entries(this.data.events)) {
				element[key] = value;
			}
		}
		if (this.data.textContent) {
			element.textContent = this.data.textContent;
		}
		if (this.data.style) {
			const borderStyleSheet = document.createElement("style");
			document.head.appendChild(borderStyleSheet);
			const stylesheet = borderStyleSheet.sheet;
			const rnd = '_yxyxxyxxxyx'.replace(/[xy]/g, (c) => {
				var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
				return v.toString(16);
			});
			var newClass
			if (this.data.attributes.class) {
				var newClass = this.data.attributes.class + rnd
				this.data.attributes.class = `${this.data.attributes.class} ${newClass}`
			} else {
				var newClass = rnd
				this.data.attributes.class = newClass
			}
			stylesheet.insertRule(`.${newClass} {${this.data.style}}`, 0)
		}
		if (this.data.attributes) {
			for (let key in this.data.attributes) {
				element.setAttribute(key, this.data.attributes[key]);
			}
		}
		return element;
	}
	update() {
		if (this.data.parentElement) {
			this.data.parentElement.update();
		}
	}
	setData(newData) {
		this.data = { ...this.data, ...newData };
		this.update();
	}
}