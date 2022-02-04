import '../styles/App.css';


function App() {
    // loading state

    // jokes state

  return (
    <div className="App">
      <h1>Use Effect Review: DadJokes API</h1>
      <div>
        {/* our content goes here... */}
      </div>
    </div>
   
  );
}

export default App;

  /*
     0. import react + hooks
     1. Setup component state - useState (loading, jokes)
     2. Create onLoad handler - test Code is executing without error
     3. test async handler - useEffect
     4. Refactor onLoad() - add fetch and test before modifying JSX
     5. Verify local state is being updated 
     6. Refactor JSX to display new joke content
     7. verify page refresh displays new joke
     8. Add button + getNewJoke handler
     9. Update state and display new joke
  */ 