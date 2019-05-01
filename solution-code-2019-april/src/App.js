import React, { Component } from 'react';
import IdCard from './IdCard'
import Greetings from './Greetings'
import LikeButton from './LikeButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard 
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard 
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <h1>Greetings</h1>
        {/* Render `Greetings` with props.lang="de" and props.children="Ludwig"  */}
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="pt">Miguel</Greetings>
        
        
        <h1>LikeButton</h1>
        <LikeButton /> 
        <LikeButton />

        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default App;