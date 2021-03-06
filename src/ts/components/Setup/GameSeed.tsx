import * as React from 'react';
import * as Styles from '../../styles';

export interface IGameSeedProps {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLElement>) => void,
  onGenerate: () => void,
}

export class GameSeed extends React.Component<IGameSeedProps, {}> {
  render() {
    return(
      <p key='game-seed'>
        Seed:
        <input type='text' id='game-seed' style={Styles.gameSeedInput}
          value={this.props.value} onChange={this.props.onChange}/>
        <img src='/img/dice.png' style={Styles.gameSeedGenerate}
          onClick={this.props.onGenerate} title='Generate new seed!'
          alt='generate new seed'/>
      </p>
    );
  }
}