import React from "react";

function Button(props) {
    let buttonName = props.Name;
    console.log(buttonName)
    function handleClick() {
        console.log('button clicked')
      }

  return <button onClick={handleClick}>{buttonName}</button>;
}

export default Button;