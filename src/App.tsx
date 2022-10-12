import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [id, setId] = useState('');
  useEffect(() => {
    fetch('https://shoppinglist-hr13.onrender.com/shoppinglists')
      .then((resp) => resp.json())
      .then((data => console.log(data)
      ))
  }, []);
  return (
    <div className="App">
      <header>
        <h1>Shopping list</h1>
      </header>
      <main>
        <ul>
          <li onChange={() => setId('bla')}>Banana</li>
          <li>Banana</li>
          <li>Banana</li>
          <li>Banana</li>
        </ul>
      </main>
    </div>
  );
}

export default App;