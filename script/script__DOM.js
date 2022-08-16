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

    this.search = (elem, selector) => {
        switch (true) {
            case (document.querySelector(elem) !== null && document.querySelector(selector) !== null):
                console.log(document.querySelector(elem))
                console.log(document.querySelector(selector))
                return `elem: ${document.querySelector(elem)}
                selector: ${document.querySelector(selector)}
                `;
                break;
            case (document.querySelector(elem) !== null):
                console.log(document.querySelector(elem));
                return `elem: ${document.querySelector(elem)}`
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

    this.addClass = (elem, className) => {
        if (document.querySelector(elem) !== null) {
            document.querySelector(elem).classList.add(className);
        } else {
            console.log('Не найдено такого элемента в DOM')
            return 'Не найдено такого элемента в DOM'
        }
    }

    this.removeClass = (elem, className) => {
        if (document.querySelector(elem) !== null) {
            document.querySelector(elem).classList.remove(className)
        } else {
            console.log('Не найдено такого элемента в DOM')
            return 'Не найдено такого элемента в DOM'
        }
    }

    this.toggleClass = (elem, className) => {
        if (document.querySelector(elem) !== null) {
            document.querySelector(elem).classList.toggle(className)
        } else {
            console.log('Не найдено такого элемента в DOM')
            return 'Не найдено такого элемента в DOM'
        }
    }

    this.hasClass = (elem, className) => {
        if (document.querySelector(elem) !== null) {
            const elemArr = document.querySelector(elem).classList;
            let bool = false;

            for (let i = 0; i < elemArr.length; i++) {
                if (elemArr[i] === className) {
                    bool = true;
                    break;
                }
            }
            if (bool) {
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

    this.append = (elem, newElem, beforeElem) => {
        const newelem = document.createElement(newElem)

        if (document.querySelector(elem) !== null) {
            if (beforeElem !== undefined && beforeElem !== '') {
                if (document.querySelector(beforeElem) !== null) {
                    document.querySelector(elem).insertBefore(newelem, document.querySelector(beforeElem))
                } else if (document.querySelector(beforeElem) === null) {
                    console.log('Не найдено такого элемента в DOM')
                    return 'Не найдено такого элемента в DOM'
                }
            }
            else {
                document.querySelector(elem).appendChild(newelem)
            }
        } else {
            console.log('Не найдено такого элемента в DOM')
            return 'Не найдено такого элемента в DOM'
        }
    }

    this.on = (elem, eventName, funcName) => {
        let funcElem = document.querySelector(elem);
        funcElem.addEventListener(eventName, () => {
            this.name = funcName;
            console.log(this.name)
            console.log('hello')
        })
    }
}

const dom = new DOM;
console.log(dom)

document.body.innerHTML = dom.create('div');

dom.attr('div', 'class', 'div1');

dom.html('div', `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam minima eius ducimus veniam enim est explicabo aspernatur laborum at, quas fuga recusandae aliquid, officiis quibusdam. Ullam ipsa officiis placeat.
Nostrum ex tempore deserunt laborum sunt, nesciunt omnis odio unde accusantium excepturi quam deleniti cum laudantium odit amet consectetur maxime aperiam nihil quia! Voluptates iste aliquid itaque eos consequuntur consequatur.
Facere voluptates recusandae minima rem, fugiat maxime distinctio tempore quae explicabo minus aperiam sapiente corrupti vel sit ab quisquam dicta in ratione quos cumque earum. Consequatur eaque atque nostrum perferendis?
Ipsum nam facere non ad distinctio eveniet iure suscipit dolores ullam sunt asperiores dolorem ipsam natus tempora iste velit est debitis beatae ducimus aperiam voluptates, cum architecto quas! Cumque, hic.
Cupiditate, odit aspernatur quae totam dolores ullam minima quidem debitis voluptates accusamus alias praesentium facilis reiciendis unde dolorum voluptatibus modi aperiam est. Facere quae omnis id corrupti, accusantium iste eius.</p>`)

dom.search('p', '.div1');

dom.addClass('p', 'abz');

dom.removeClass('p', 'abz');

dom.toggleClass('p', 'abz');

dom.hasClass('p', 'a')
dom.hasClass('p', 'abz')

dom.append('.div1', 'a', '');

dom.on('p', 'click', 'funcName')

// dom.on('html', 'mousemove', 'moving')
