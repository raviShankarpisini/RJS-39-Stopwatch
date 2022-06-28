// Write your code here

import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {minutes: 0, seconds: 0, isRunning: false}

  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  tickTime = () => {
    const {seconds} = this.state
    if (seconds > 59) {
      this.setState(prevState => ({minutes: prevState.minutes + 1, seconds: 0}))
    }
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  start = () => {
    const {isRunning} = this.state
    if (!isRunning) {
      this.timeID = setInterval(this.tickTime, 1000)
    }
  }

  stop = () => {
    clearInterval(this.timeID)
    this.setState({isRunning: false})
  }

  reset = () => {
    clearInterval(this.timeID)
    this.setState({isRunning: false, minutes: 0, seconds: 0})
  }

  minuteAndSecondInRequiredFormat = () => {
    const {minutes, seconds} = this.state
    const minutesString = minutes > 9 ? minutes : `0${minutes}`
    const secondsString = seconds > 9 ? seconds : `0${seconds}`
    return {minutesString, secondsString}
  }

  render() {
    const {
      minutesString,
      secondsString,
    } = this.minuteAndSecondInRequiredFormat()
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">StopWatch</h1>
          <div className="card-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1 className="heading">
              {minutesString}:{secondsString}
            </h1>
            <div className="buttons-container">
              <button
                className="button start-button"
                type="button"
                onClick={this.start}
              >
                Start
              </button>
              <button
                className="button stop-button"
                type="button"
                onClick={this.stop}
              >
                Stop
              </button>
              <button
                className="button reset-button"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
