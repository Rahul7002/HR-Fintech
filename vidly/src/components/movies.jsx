import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
// import './App.css';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state ={

    movies : getMovies()
  };
  handleDelete = movie => {
    const movies =this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies :movies});

  };



   render() {
     if(this.state.movies.length === 0)
        return <p> No Movies in Datebase</p>;
     
     
        return (
          <React.Fragment>
          <p> Showing {this.state.movies.length}  movies in DB </p>
     <table className ="table">
     <thead>
       <tr>
         <th>Title </th>
         <th> Genre</th>
         <th> Stock</th>
         <th> Rate </th>
       </tr>
     </thead>
     <tbody>
        {this.state.movies.map(movie =>(
        <tr key = {movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td><button onClick={() => this.handleDelete(movie)} className= "btn btn-danger">Delete</button></td>
        </tr>
        ))}
      </tbody>  
     </table>
     </React.Fragment>
        );  
    }
  
}

export default Movies;