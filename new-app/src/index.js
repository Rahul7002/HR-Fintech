//  const colors = ['red', 'green','blue'];
// const items =colors.map(color => '<li>kk<li>');

const person ={
  talk() {
    var self =this;
    setTimeout((function){
    console.log("self", self);
    },1000;
  }
};
person.talk();