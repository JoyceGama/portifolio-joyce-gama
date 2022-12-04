import { Route, Switch } from 'react-router-dom';
import Curriculum from './pages/curriculum/curriculum';
import InitialPage from './pages/initial/initial';
import Playlist from './pages/playlist/playlist';
import Projects from './pages/projects/projects';
import Technologies from './pages/technologies/technologies';

function App() {
  return (
    <Switch>

      <Route exact path="/">
      <InitialPage />
      </Route>

      <Route path="/tecnhologies">
      <Technologies />
      </Route>

      <Route path="/projects">
      <Projects />
      </Route>

      <Route path="/curriculum">
      <Curriculum />
      </Route>

      <Route path="/playlist">
      <Playlist />
      </Route>

    </Switch>


  );
}

export default App;
