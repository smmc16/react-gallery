import GalleryList from "../GalleryList/GalleryList";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';


function App() {
    return (
      <div data-testid="app">
        <header>
          <Typography variant="h3" textAlign="center" margin="10px">React Gallery</Typography>
        </header>

        <GalleryList />
      </div>
    );
}

export default App;
