import React, { useState } from "react";

const Button = () => {

  const [initial, final] = useState(0);
  const update_inc = () => {
  final(initial + 1);
  }

  //const [first, last] = useState(initial);
  const update_dec = () => { 
      
    if ((initial)>0) {
       final(initial - 1);
    } else {
       alert("Cannot Decrement Further, You have reached the endpoint 🎌");
    }
  }


    return (
        <>
            <h1 > {initial} </h1>         
            <div className="btn_div">   
                <button onClick={update_inc}> Inc(+) </button>
                <button onClick={update_dec}> Dec(-) </button>         
            </div>
        </>
    )
}


export default Button;