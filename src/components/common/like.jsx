import React from 'react';

//input: liked booolean
// output: onClick

const Like = (props) => {
    return ( 
        <React.Fragment>
            {props.movie.liked ? (
            <i className="fa fa-heart"></i>
          ) : (
            <i className="fa fa-heart-o"></i>
          )}
        </React.Fragment>
     );
}
 
export default Like;