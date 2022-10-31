import './index.css'
import TopBar from './components/TopBar';
import Body from './components/Body';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div style={{ width: '100%', height: '100%', padding: '11%' }} className="App  bg-yellow-100">
        <TopBar />
        <Body />
        <Footer />

      </div>
    </>

  );
}

export default App;
