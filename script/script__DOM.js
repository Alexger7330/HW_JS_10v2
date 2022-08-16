let DOM = function () {
    this.create = (tagName) => {
        return `<${tagName}></${tagName}>`
    }

    this.attr = (elem, name, value) => {
        if (document.querySelector(elem) === null) {
            console.log(value)
            return value
        } else {
            return document.querySelector(elem).setAttribute(name, value)
        }
    }

    this.html = (elem, value) => {
        if (document.querySelector(elem) === null) {
            console.log(value)
            return value
        } else {
            return document.querySelector(elem).innerHTML = value
        }
    }

    this.search = (element, selector) => {
        switch (true) {
            case (document.querySelector(element) !== null && document.querySelector(selector) !== null):
                console.log(document.querySelector(element))
                console.log(document.querySelector(selector))
                return `Element: ${document.querySelector(element)}
                selector: ${document.querySelector(selector)}
                `;
                break;
            case (document.querySelector(element) !== null):
                console.log(document.querySelector(element));
                return `Element: ${document.querySelector(element)}`
                break;
            case (document.querySelector(selector) !== null):
                console.log(document.querySelector(selector))
                return `selector: ${document.querySelector(selector)}`;
                break;
            default:
                console.log('Таких элементов не найдено')
                return 'Таких элементов не найдено'
        }
    }

    this.addClass = (element, className) => {
        if (document.querySelector(element) !== null) {
            document.querySelector(element).classList.add(className);
        } else {
            console.log('Не найдено такого элемента в DOM')
            return 'Не найдено такого элемента в DOM'
        }
    }

    this.removeClass = (element, className) => {
        if (document.querySelector(element) !== null) {
            document.querySelector(element).classList.remove(className)
        } else {
            console.log('Не найдено такого элемента в DOM')
            return 'Не найдено такого элемента в DOM'
        }
    }

    this.toggleClass = (element, className) => {
        if (document.querySelector(element) !== null) {
            document.querySelector(element).classList.toggle(className)
        } else {
            console.log('Не найдено такого элемента в DOM')
            return 'Не найдено такого элемента в DOM'
        }
    }

    this.hasClass = (element, className) => {
        if (document.querySelector(element) !== null) {
            if (document.querySelector(element).hasAttribute(   className)) {
                console.log(true)
                return true
            } else {
                console.log(false)
                return false
            }
        } else {
            console.log('Не найдено такого элемента в DOM')
            return 'Не найдено такого элемента в DOM'
        }
    }
}

const dom = new DOM;
console.log(dom)
document.body.innerHTML = dom.create('div')
dom.attr('div', 'class', 'div1');
dom.html('div', `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam minima eius ducimus veniam enim est explicabo aspernatur laborum at, quas fuga recusandae aliquid, officiis quibusdam. Ullam ipsa officiis placeat.
Nostrum ex tempore deserunt laborum sunt, nesciunt omnis odio unde accusantium excepturi quam deleniti cum laudantium odit amet consectetur maxime aperiam nihil quia! Voluptates iste aliquid itaque eos consequuntur consequatur.
Facere voluptates recusandae minima rem, fugiat maxime distinctio tempore quae explicabo minus aperiam sapiente corrupti vel sit ab quisquam dicta in ratione quos cumque earum. Consequatur eaque atque nostrum perferendis?
Ipsum nam facere non ad distinctio eveniet iure suscipit dolores ullam sunt asperiores dolorem ipsam natus tempora iste velit est debitis beatae ducimus aperiam voluptates, cum architecto quas! Cumque, hic.
Cupiditate, odit aspernatur quae totam dolores ullam minima quidem debitis voluptates accusamus alias praesentium facilis reiciendis unde dolorum voluptatibus modi aperiam est. Facere quae omnis id corrupti, accusantium iste eius.</p>`)
dom.search('p', '.div1')
dom.addClass('p', 'abz');
dom.removeClass('p', 'abz');
dom.toggleClass('p', 'abz');
dom.hasClass('p', 'abz')