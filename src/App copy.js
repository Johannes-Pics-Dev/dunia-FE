import './App.scss';
import Header from './components/Header';
import Video from './components/Video';
import Body from './components/Body';
import Banner from './components/Banner';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Video/>
      <Body/>
      <Banner/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
