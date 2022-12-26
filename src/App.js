import { Route, Switch } from 'react-router-dom';
import harvardArt from "./data/hardvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import ArtDescription from './components/ArtDescription';

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation records={harvardArt.records}/>

      <Switch>
        <Route exact path="/">
            <h2>Harvard Art Museum</h2>
            <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
        </Route>

        <Route exact path="/galleries/:galleryid">
            <GalleryView galleries={harvardArt.records}/>
        </Route>

        <Route path="/galleries/:galleryid/art/:artid">
            <ArtDescription galleries={harvardArt.records}/>
        </Route>

        <Route>
            <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
