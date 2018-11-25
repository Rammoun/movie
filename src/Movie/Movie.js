import React from 'react';
import MovieBox from '../MovieBox/MovieBox'
import './Movie.css';


var movies=[
  {// img title rat
    link:'https://m.media-amazon.com/images/M/MV5BOTQwZmQyYzEtODk5ZC00OTY3LWExMjAtYzRjNWFhNGM3MzBlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg',
    title: 'Annabelle  |  2014',
//    rat: ['', 'defaultChecked' ,'','',''],
    ratenb: 4
  },
  {
    link: 'https://m.media-amazon.com/images/M/MV5BMjEzNzM2MjgxMF5BMl5BanBnXkFtZTcwNTQ1MTM0Mg@@._V1_.jpg',
    title: 'Angels & Demons  |  2009',
  //  rat: ['', 'defaultChecked' ,'','',''],
    ratenb: 3
  },
  {
    link: 'http://www.tenterfieldcinema.com.au/wp-content/uploads/2017/07/everything-everything-poster.jpg',
    title: 'Everything everything  |  2017',
    //rat: ['defaultChecked' ,'', '','',''],
    ratenb: 5
  },
  {
    link: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg',
    title: 'Avengers: Infinity War  |  2018',
    //rat: ['defaultChecked' ,'', '','',''],
    ratenb: 2    
  }  
]
const list=['Annabelle', 'Angels', 'Everything', 'Avengers'];


class Movie extends React.Component{
  constructor(props){
    super(props);
    this.state={
      search: '',
      movies: movies,
      list: list
    }
  }  
  
  searchChange=(e)=>{
    this.setState({movies: movies});
    this.setState({search: e.target.value});
    var res=[]; var a = this.state.list; var b = this.state.movies
    var c = this.state.search;
    if (e.target.value.length>0){
    let filterItems = (query) => {
      return b.filter((el) =>
        el.title.indexOf(query) > -1
      );
    }
    
    console.log(filterItems(c));
    this.setState({movies: filterItems(c)});}
    else this.setState({movies: movies});
    
  }

  ratChange=(e)=>{
    /*this.setState({search: e.target.value});
    var res=[];var a=this.state.list;var c = this.state.search;*/ 
    this.setState({movies: movies}); var b = this.state.movies; 
    var c = Number(e.target.value); console.log(c);
    if (c>0){ console.log('Ahla');
    let filterItems = () => {
      return b.filter((el) =>
        el.ratenb >= c
      );
    }
    
    console.log(filterItems());
    this.setState({movies: filterItems()});}
    else this.setState({movies: movies});    
  }


  plusClick=(e)=>{
    document.getElementById('add').style.display='flex';
  }

  addClick=(e)=>{
    var title=document.getElementById('title').value;
    var rating=Number(document.getElementById('rating').value);
    var link=document.getElementById('link').value;
    movies.push({link: link, title: title, ratenb: rating});
    this.setState({movies: movies});    
    document.getElementById('add').style.display='none';

  }

  render() { 
    return(
      <div className='mov'>
        <div className='search'>
          <input type='text' placeholder='The movie title' onChange={this.searchChange}/>
          <input type='number' min='1' max='5' placeholder='Choose your rating' onChange={this.ratChange}/>
          <button type='button' className='searchBtn'>Search</button>
        </div>
        <div className='main'>
          {this.state.movies.map((cont,i)=><MovieBox obj={cont} key={i}/>)}          
          <button type='button' className='plusBtn box' onClick={this.plusClick}>+</button>
        </div>
        <div className='add' id='add'>
          <input type='text' id='title' placeholder='The movie title'/>
          <input type='number' id='rating' min='1' max='5' placeholder='The movie rating'/>
          <input type='text' id='link' placeholder='The movie image'/>
          <button type='button' onClick={this.addClick} className='subBtn'>Add</button>
        </div>
      </div>
    );
  }

}


export default Movie;