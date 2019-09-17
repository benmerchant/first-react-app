import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  /** 
   * no need for a constructor as this class does not maintain state
   * it merely displays what the parent tells it to
  */
  render() {
    return (
      /** 
       * 1. onClick() tells React to setup an event listener
       * 2. when btn clicked, React calls the event handler
       * 3. event handler calls function which is a prop specified by Board
       * 4. Square calls this.handleClick(i) when clicked
       * 5. we havent defined that ^^^^ function yet
      */
      <button className="square" onClick={()=>this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
  
class Board extends React.Component {
  /**
   * add constructor to initial state to contain an array of 9 nulls
   * corresponding to the 9 squares
   */
  constructor(props){
    super(props);
    this.state = {squares: Array(9).fill(null),};
  }
  handleClick(i){
    // creating a copy of squares[] to modify... why?
    const squares = this.state.squares.slice();
    squares[i] = '╗';
    this.setState({squares: squares});
  }
  /** 
   * instruct each Square about its value by passing props
   * the square are defined in the immediately preceding constructor
   */
  renderSquare(i) {
    return (<Square
              value={this.state.squares[i]} onClick={()=>this.handleClick(i)}
            />); // add () so JS won't insert a ';' after 'return'
  } // now each square will receive a value prop of either 'X','O',or null

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
  
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
