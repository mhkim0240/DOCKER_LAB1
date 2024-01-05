import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { useEffect } from 'react';

function App() {

  const [products, setProducts] = useState([]);

  async function onLoad(){
    let response = await fetch("/api/products");
    //let response = await fetch("http://localhost:8080/products");
    let responseBody = await response.json();
    console.log("onLoad", responseBody);
    setProducts(responseBody);
  }

  useEffect(()=>{
    onLoad();
  }, []);

  return (
    <div>
      <h1>Product List Page</h1>
      <hr/>
      <div>
        {products.map((product)=> <Card product={product}/>)}
      </div>
    </div>
  );
}

export default App;
