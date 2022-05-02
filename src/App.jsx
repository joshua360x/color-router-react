import { Switch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  Link,
  Redirect,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import styles from './App.css';

function RGB() {
  // 🚨 Get values for r, g, and b from params
  const { color_R } = useParams()
  const { color_G } = useParams()
  const { color_B } = useParams()
  // 🚨 Uncomment next lines after importing
  console.log('hey i am hit');
  return (
  <div
    className={styles.fill}
    // style={{ background: `rgb(${r}, ${g}, ${b})` }}
    style={{ background: `rgb(${color_R}, ${color_G}, ${color_B})` }}
  >
    <p>{`rgb(${color_R},${color_G},${color_B})`}</p>
  </div>
  );
}

function ScreenColor() {
  return (
    <div>
      {/* Create Route Inside Switch */}
      {/* <h1>lol</h1> */}
      <Switch>
      <Route path="/rgb/:color_R/:color_G/:color_B">
      <RGB />
      </Route>

      </Switch>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <header>
        <Route exact path="/">
          <Redirect to="/rgb/192/192/192" />
        </Route>
        <ul>
          <Link to="/rgb/192/192/192">Silver</Link>
          <Link to="/rgb/220/20/60">Crimson</Link>
          <Link to="/rgb/147/112/219">Purple</Link>
        </ul>
      </header>

      <ScreenColor />
    </Router>
  );
}
