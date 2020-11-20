import React from "react";
import Header from "./component/header/Header";
import './app.scss'
import HeadLine from "./component/headline/HeadLine";

const tempArr = [{
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'tmtuanyd@gmail.com',
    age: 24,
    onlineStatus: true
}]

function App() {
  return (
    <div className="App">
        <Header/>
        <section className={"main"}>
            <HeadLine header={"Post"} desc={"Click the button to render posts!"} tempArr={tempArr}/>
        </section>
    </div>
  );
}

export default App;
