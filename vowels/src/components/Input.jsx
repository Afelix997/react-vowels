function Input(props) {
    
    return (
        <div>
            <input id="input" type="text" placeholder="Enter a Word"></input>
            <br></br>
            <button type="submit" id="my-button" onClick={props.handleClick}>Submit</button>
      </div>
    )
  }
  
  export default Input;