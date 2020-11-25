import './App.css';
import SearchMovie from './Componets/SearchMovie/Search'
import Top6 from './Componets/Top6/Top6';
import Footer from './Componets/Footer/Footer';

function App() {
  return (
    <div>
      <div className="container">
        <h1 className='title'>MovieView Search</h1>
        <SearchMovie/>
        <Top6 />

        
        </div>
        <Footer />
    </div>
  );
}

export default App;
