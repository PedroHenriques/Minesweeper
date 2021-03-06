import * as React from 'react';
import * as Styles from '../../styles';

export interface INumberLivesProps {
  value: number,
  onChange: (event: React.ChangeEvent<HTMLElement>) => void,
}

export class NumberLives extends React.Component<INumberLivesProps, {}> {
  render() {
    return(
      <p key='number-lives'>
        Number of lives:
        <input type='number' id='number-lives' style={Styles.numLivesInput}
          value={this.props.value} onChange={this.props.onChange}/>
      </p>
    );
  }
}