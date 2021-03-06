import React, { Component } from 'react';
import Counter from './counter';
 //import Movies from './movies';
class Counters extends React.Component {
    state = {
        counters :[
            {id :1 , value : 4},
            {id :2 , value : 0},
            {id :3 , value : 0},
            {id :4 , value : 0}
            ]};
 handleIncrement = counter =>{
     const counters = [...this.state.counters];
     const index =counters.indexOf(counter);
     counters[index]= {...counter};
     counters[index].value++;
   //  console.log(this.state.counters[0]);
   this.setState({counters});
 };
 handleReset =() =>{
     const counters = this.state.counters.map(c => {
         c.value =0;
         return c;
     });
     this.setState({counters});
 };        
 handleDelete = counterId => {
    //console.log("Event Handler Called", counterId);
     const counters = this.state.counters.filter( c => c.id !== counterId);
     this.setState({counters});
     
 };
    render() { 
        return ( 
        <div>
        <button onClick={this.handleReset} className ="btn btn-primary btn-sm m-2">Reset</button>
        {this.state.counters.map(counter => (
            <Counter 
            key={counter.id} 
            onDelete ={this.handleDelete} 
            onIncrement={this.handleIncrement}
            counter={counter}
            />
            ))}
        // we get each counter and map it to a counter component and also can set some key 
         </div>
        );
    }
} 
export default Counters;