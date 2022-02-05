// App imports
import '../styles/App.css';
import { useState, useEffect } from 'react';
import Card from './Card'

// API config
let API_URL = "https://icanhazdadjoke.com/"

const fetchOptions = {
  method: "GET",
  headers: {
    "Accept": "application/json",
    "User-Agent": "John Doe j.doe@generalassemb.ly"
  }
}

function App() {
  const [jokes, setJokes] = useState([])
  const [loading, setLoading] = useState(true)

  const getJoke = () => {
    fetch(API_URL, fetchOptions)
      .then(res => {
        return res.json()
        // res.json() returns a resolves asynchronous 'promise' 
      })
      .then(jokeData => {
        // data from the returned promise is passed to the next .then() as a parameter
        setJokes([jokeData, ...jokes])
        setLoading(false)
        // anytime a then call back returns a promise, one can chain a then
      })
      .catch(err => console.log(err))
      // .catch() captures any errors thrown by the preceeding promises
      // .finally() can be called after all promises are resolved/rejected
  }


  useEffect(() => {
    console.log('render is complete, ready to make fetch call')
    // adds an artificial delay to the intial load state after the component mounts
      setTimeout(() => getJoke(), 1000)
  }, [])


  const jokeCard = loading ? <div className="card">retrieving next joke...</div> : <Card joke={jokes[0]} />
  return (
    <div className="App">
      <nav><h1>Dad Jokes</h1></nav>
      <div className="container">
        {jokeCard}
        <button className="button" onClick={getJoke}>Get Next Joke</button>
      </div>
    </div>

  );
}

export default App;

/*
   0. import react + hooks
   1. Setup component state - useState (loading, jokes)
   2. Create onLoad handler - test Code is executing without error ***
   3. test async handler - useEffect 
   4. Refactor onLoad() - add fetch and test before modifying JSX
   5. Verify local state is being updated 
   6. Refactor JSX to display new joke content
   7. verify page refresh displays new joke
   8. Add button + getNewJoke handler
   9. Update state and display new joke
*/

/*
Fetch Async/Await Example

async function onLoad(){
    try {
      const resp = await fetch(URL, options)
      const data = await resp.json()
      console.log(data)
    }catch(err){
      console.log(err)
    }
    // wait until the promise is resolved -> and store the returned value in the variable (resp)
  }
*/