import './index.css'
import TopBar from './components/TopBar';
import Middle from './components/Middle';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div style={{ width: '100%', height: '100%', padding: '11%' }} className="App  bg-yellow-100">
        <TopBar />
        <Middle />
        <Footer />

      </div>
    </>

  );
}

export default App;
