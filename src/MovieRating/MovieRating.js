import React from 'react';
import './MovieRating.css';

const MovieRating=()=>{
  return(//defaultChecked 
    <fieldset className="rating">
    <input type="radio" id="5" name="rating" value="5" /><label className = "full" title="Awesome - 5 stars"></label>
    <input type="radio" id="4" name="rating" value="4" /><label className = "full" title="Pretty good - 4 stars"></label>
    <input type="radio" id="3" name="rating" value="3" /><label className = "check"  title="Meh - 3 stars"></label>
    <input type="radio" id="2" name="rating" value="2" /><label className = "full"  title="Kinda bad - 2 stars"></label>
    <input type="radio" id="1" name="rating" value="1" /><label className = "full" title="Sucks big time - 1 star"></label>
</fieldset>
  )

}


/*const MovieRating=()=>{
  return(
    <fieldset className="rating">
    <input  type="radio" id="5" name="rating" value="5" /><label className = "full" title="Awesome - 5 stars"></label>
    <input defaultChecked type="radio" id="4" name="rating" value="4" /><label className = "full" title="Pretty good - 4 stars"></label>
    <input  type="radio" id="3" name="rating" value="3" /><label className = "check"  title="Meh - 3 stars"></label>
    <input  type="radio" id="2" name="rating" value="2" /><label className = "full"  title="Kinda bad - 2 stars"></label>
    <input  type="radio" id="1" name="rating" value="1" /><label className = "full" title="Sucks big time - 1 star"></label>
</fieldset>
  )

}

*/
export default MovieRating;