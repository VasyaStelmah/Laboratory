// Context
// Стрелочная функция не создает своего контекста
function log() {
  console.log(this);
}
const arrowLog = () => console.log(this.name);

const person = {
  name: "Elena",
  age: 20,
  log: log,
  arrowLog: arrowLog,
  delayLog: function () {
    const self = this;
    setTimeout(function () {
      console.log(`${self.name} ${self.age}`);
    }, 1000);
  },
  contextArrow: () => {
    console.log(this.name, this.age);
  },
  arrowDelay: () => {
    setTimeout(() => {
      console.log(`${this.name} ${this.age}`);
    });
  },
};
person.log();
person.arrowLog();
person.delayLog();
person.arrowDelay();
person.contextArrow();
