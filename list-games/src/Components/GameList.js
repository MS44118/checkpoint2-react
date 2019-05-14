import React, { Component } from 'react';
import Game from './Game';

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GameObjects: null,
    };
  };
  
  componentDidMount() {
    fetch(`http://www.campus-bordeaux.ovh:3002/joysticks/api/games`)
    .then(res => res.json())
    .then((res) => {
      this.setState({ GameObjects: res })
      // console.log(this.state.GameObjects)
    });
  };

// resultat --> GameObjects: [{},{},{},{},{}]

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card-deck">
            {
              this.state.GameObjects 
              // ? this.state.GameObjects[0].name
              ? this.state.GameObjects.map((game, index) => 
                <Game 
                  title={game.name} 
                  theme={game.theme} 
                  image={game.pochette} 
                  description={game.description} 
                  key={index}
                />
              )
              : 'loading ...'
            }
          </div>  
        </div>
      </div>
    );
  }

};

export default GameList;