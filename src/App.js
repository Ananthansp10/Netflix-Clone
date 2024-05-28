import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './Components/Banner/Banner';
import Movierow from './Components/MoviesRows/Movierow';
import Movieshow from './Components/Movievideo/Movieshow'
import {originals, trending,actionmovies,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries,Adventure,AnimationMovies,CrimeMovies,Drama,FamilyMovies,Fantasy,HistoryMovies,Music,Mystery,ScienceFiction,TvMovie,ThrillerMovie,WarMovies,WesternMovies} from '../src/Components/Config/urls'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Searchmovie from '../src/Components/Searchmovie/Searchmovie'
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
     <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <>
            <Banner url={trending} />
            <Movierow url={originals} title="Netflix Originals" />
            <Movierow url={actionmovies} title="Action Movies" issmall />
            <Movierow url={ComedyMovies} title="Comedy Movies" issmall />
            <Movierow url={HorrorMovies} title="Horror Movies" issmall />
            <Movierow url={RomanceMovies} title="Romance Movies" issmall />
            <Movierow url={Documentaries} title="Documentaries" issmall />
            <Movierow url={Adventure} title="Adventure Movies" issmall />
            <Movierow url={AnimationMovies} title="Animation Movies" issmall />
            <Movierow url={CrimeMovies} title="Crime Movies" issmall />
            <Movierow url={Drama} title="Drama" issmall />
            <Movierow url={FamilyMovies} title="Family Movies" issmall />
            <Movierow url={Fantasy} title="Fantasy Movies" issmall />
            <Movierow url={HistoryMovies} title="History Movies" issmall />
            <Movierow url={Music} title="Music Movies" issmall />
            <Movierow url={Mystery} title="Mystery Movies" issmall />
            <Movierow url={ScienceFiction} title="Science Fiction Movies" issmall />
            <Movierow url={TvMovie} title="TV Movies" issmall />
            <Movierow url={ThrillerMovie} title="Thriller Movies" issmall />
            <Movierow url={WarMovies} title="War Movies" issmall />
            <Movierow url={WesternMovies} title="Western Movies" issmall />
            <Footer/>
          </>
        } />
      </Route>
      <Route path="/movie" element={<Movieshow />} />
      <Route path="/searchmovies" element={<Searchmovie />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
