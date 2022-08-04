import { Home } from "./MyComponents/Home";
import { useState } from "react";
import { Showdata } from "./MyComponents/Showdata";
import { Display } from "./MyComponents/Display";
import { Team } from "./MyComponents/Team";
import { Teaminput } from "./MyComponents/Teaminput";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  const [player, setPlayer] = useState([
    {
      id: 1,
      name: "Rohit Sharma",
      scores: 200,
      balls: 123,
      dismissal: "catch out"
    },
    {
      id: 2,
      name: "Virat Kohli",
      scores: 200,
      balls: 123,
      dismissal: "catch out"
    },
    {
      id: 3,
      name: "MS Dhoni",
      scores: 200,
      balls: 123,
      dismissal: "catch out"
    },
  ])

  const onAdd = (fpass) => {

    const id = player.length + 1
    const neww = { id, ...fpass }
    setPlayer([...player, neww])

  }


  return (
    <div className="App">
      {/* <Home /> */}

      <Switch>
        <Route exact path="/" >

          <Home />
        </Route>

        <Route path="/team">
          <Team onAdd={onAdd} />
          <Teaminput/>
          <Display />
          {
            player.map(player => (
              <Showdata id={player.id} name={player.name} scores={player.scores} balls={player.balls} dismissal={player.dismissal} />
            ))}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
