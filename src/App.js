import './index.css'
import TopBar from './components/TopBar';
import Body from './components/Body';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div className="App  bg-indigo-400 selection:bg-yellow-200 ">
        <TopBar />
        <Body />
        <Footer />

      </div>
    </>

  );
}

export default App;
