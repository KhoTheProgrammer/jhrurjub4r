function Event() {
    let computerGuess = 1 + (Math.random() * 3);
    let userGuess = 1 + (Math.random() * 3);

    const handleClick = () => {
        alert("Computer guessed: " + computerGuess + " You guessed: " + userGuess);
    }

  return (
    <div>
      <p>Task: Add a button and handle a click event</p>
      <button onClick={handleClick}>Guess a number between 1 and 3</button>
    </div>
  );
}

export default Event;
