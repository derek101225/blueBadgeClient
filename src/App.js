import './App.css';
import SearchMovie from './Componets/SearchMovie/Search'
import Top6 from './Componets/Top6/Top6';

function App() {
  return (
    <div className="container">
    <h1 className='title'>MovieView Search</h1>
    <SearchMovie/>
    <Top6 />
    </div>
  );
}

export default App;
