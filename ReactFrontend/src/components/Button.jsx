import React from "react";


function Button(props) {
    let buttonName = props.Name;
    console.log(buttonName)

    let jobber = props.jobber
    console.log(jobber)
    function handleClick() {
        console.log('button clicked')
      }

  return <button onClick={handleClick}>{buttonName}</button>;
}

export default Button;