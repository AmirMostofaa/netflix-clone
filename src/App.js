import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Row from './components/Row';
import Loader from './utility/Loader/Loader';
import requests from './utility/request';

function App() {

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
   }, 5000);
  
  return (
    <div className="App">
          {/* Nav */}
          <Nav/>
          {/* Banner */}

          {
            loading ?
            <Loader/>
            :
            <>
            <Banner/>

            
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
            </>
          }
          

          <Footer/>
          

    </div>
  );
}

export default App;
