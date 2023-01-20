// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    textInput: '',
  }

  characterLength = event => {
    const {value} = event.target

    this.setState({textInput: value})
  }

  render() {
    const {textInput} = this.state

    return (
      <div className="bg-container">
        <div>
          <h1 className="title">Calculate the Letters you enter</h1>
          <div className="text-container">
            <label htmlFor="input" className="label-name">
              Enter the phrase
            </label>
            <input
              type="text"
              id="input"
              className="letter-length"
              placeholder="Enter the phrase"
              onChange={this.characterLength}
              value={textInput}
            />
          </div>
          <div>
            <div className="no-of-count">
              <p className="button">No.of letters: {textInput.length}</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="letters-calculator-image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
