"use strict";
/*
    interface는 js가 아니라서 자주는 아니지만 js에 interface를 넣고싶을 때
    어떻게 하냐 -> class!
    매번 클래스 하는게 아니라 어떨 때는 인터페이스만 필요하고 어떤때는 클래스가 필요없는데
    interface로만 하는게 ts측면에서 좀 더 안전하다.
    react, express, node 를 사용한다면 class가 필요하다.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// ts에서는 class가 어떤 속성들을 가져야 하는지 선언해야 해(그리고 속성들의 권한도)
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("Lynn", 18, "female");
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map