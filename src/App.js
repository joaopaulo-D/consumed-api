import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/php/Back-end/api.php').then(function(res){
      setAnimais(res.data);
    })
  }, []);

  return (
    <div className="App">
      {
        animais.map(function(val){
          return(
            <div className="containerImage">
              <img src={val.imagem}/>
              <p>{val.animal}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
