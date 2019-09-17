import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


  /** 
   * no need for a constructor as this class does not maintain state
   * it merely displays what the parent tells it to
   * 
   * now we don't event need to extend React.Component 
   * OR be a class. Just define a function that returns
   * the desired React Element to be displayed
  */
function Square(props) {
  return (
    /** 
     * 1. onClick() tells React to setup an event listener
     * 2. when btn clicked, React calls the event handler
     * 3. event handler calls function which is a prop specified by Board
     * 4. Square calls this.handleClick(i) when clicked
     * 5. we havent defined that ^^^^ function yet
    */

    // drop the 'this'... why?
    // drop the arrow function and () after expression of props.onClick
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
} 

class Board extends React.Component {
  /**
   * add constructor to initial state to contain an array of 9 nulls
   * corresponding to the 9 squares
   */
  constructor(props){
    super(props);
    this.state = {squares: Array(9).fill(null),xIsNext:true,};
  }
  handleClick(i){
    // creating a copy of squares[] to modify... why?
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? '🍕' : '🌷';
    this.setState({squares: squares,xIsNext:!this.state.xIsNext,});
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
    const status = `Next player: ${this.state.xIsNext ? '🍕' : '🌷'}`;

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
