let Car = function () {

    this.init = () => {
        this.getParams();
        this.chooseColor();
        this.startEngine();
        this.startMoving();
        if(engine === true){
            this.stopEngine();
        }
        this.getInfo();
    }

    this.getParams = () => {
        this.brand = prompt(`Введите марку автомобиля`);
        this.number = prompt(`Ввеедите номер вашего автомобиля`);
        this.hp = prompt(`Введите мощность вашего автомобиля h/p`);
        engine = false;
        moving = false;
        mileage = 0;
        speed = 0;
        color = 'black'
    }

    this.getInfo = () => {
        console.log(`Марка автомобиля: ${this.brand}`)
        console.log(`Номер вашего автомобиля: ${this.number}`)
        console.log(`Количесво лошадиных сил в вашем авто: ${this.hp} h/p`)
        console.log(`Пробег автомобиля: ${mileage} km`)
        console.log(`Цвет автомобиля: ${color}`)
    }

    this.startEngine = () => {
        let a = confirm(`Включить двигатель?`);
        if (a === true && engine === false) {
            alert(`Двигатель включен`);
            engine = true;
        } else {
            alert(`Двигатель выключен`)
        }
    }

    this.stopEngine = () => {
        let a = confirm(`Выключить двигатель?`);
        if (a === true && engine === true) {
            alert(`Двигатель выключен`);
            engine = false;
        } else {
            alert(`Двигатель включен`)
        }
    }

    this.startMoving = () => {
        if (engine === false) {
            alert(`Движение не начато, двигатель выключен`)
        } else {
            let drive = prompt(`Введите передачу: N,R,D`).toUpperCase()
            switch (true) {
                case drive == `N`:
                    speed = 0;
                    alert(`Предача N, speed = ${speed} km/h`);
                    break;
                case drive == `D`:
                    let s = +prompt(`С какой скоростью вы хотите ехать?`);
                    if (s > 200) {
                        speed = 200;
                    } else {
                        speed = s;
                    }
                    mileage += speed / 2;
                    alert(`Предача D, speed = ${speed} km/h`);
                    break;
                case drive == `R`:
                    let d = +prompt(`С какой скоростью вы хотите ехать?`);
                    if (d > 45) {
                        speed = 45;
                    } else {
                        speed = d;
                    }
                    mileage += speed / 2;
                    alert(`Предача R, speed = ${speed} km/h`);
                    break;
                default:
                    speed = 0;
                    alert(`Предача P, speed = ${speed} km/h`);
            }
        }
    }

    this.chooseColor = () => {
        color = prompt('Напишите цвет вашего автомобиля')
    }
}

let car = new Car;

let PassengerCar = function () {

    // this.prototype = car;
    Car.apply(this, arguments)

    let carChooseColor = this.chooseColor;
    carGetInfo = this.getInfo;
    let interiorColor;

    this.chooseColor = () => {
        carChooseColor.call(this);
        interiorColor = prompt('Введите цвет салона вашего автомобиля')
    }

    this.getInfo = () => {
        carGetInfo.call(this);
        console.log(`Цвет салона автомобиля: ${interiorColor}`)
    }

}

let passCar = new PassengerCar
// passCar.init()