import logo from './logo.svg';
import './App.css';
import QRcode from "react-qr-code";
import { useState } from 'react';

function App() {
  const [data, setData] = useState("https://www.instagram.com/ugly_flynn/?hl=en");
  return (
    <div className="App">

      <div>
        <h1>My Instagram Account</h1>
        <QRcode value={data} />
        <div style={{ marginTop: "2em" }}>

        </div>

      </div>

    </div>
  );
}

export default App;
