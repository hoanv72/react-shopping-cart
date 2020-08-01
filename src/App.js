	import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Section from './Components/Section';
import Header from "./Components/Header";
import Routes from "./Routes";
import {DataProvider} from './Components/Context';
function App() {
  return (
    <DataProvider>
      <div className="app">
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;