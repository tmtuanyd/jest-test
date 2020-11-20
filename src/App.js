import React from "react";
import Header from "./component/header/Header";
import './app.scss'
import HeadLine from "./component/headline/HeadLine";


function App() {
  return (
    <div className="App">
        <Header/>
        <section className={"main"}>
            <HeadLine header={"Post"} desc={"Click the button to render posts!"}/>
        </section>
    </div>
  );
}

export default App;
