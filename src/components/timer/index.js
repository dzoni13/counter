import React, { Component } from "react";
import "./index.css";

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 10
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            const { timer } = this.state;
            this.setState({
                timer: timer - 1
            });
        }, 1000);
    }

    componentDidUpdate() {
        if (this.state.timer === 0) {
            this.clear();
        }
    }

    clear = () => {
        clearInterval(this.intervalId);
    };

    render() {
        return (
            <div className="mt-100 layout-column align-items-center justify-content-center">
                <div className="timer-value" data-testid="timer-value">{this.state.timer}</div>
                <button className="large" data-testid="stop-button" onClick={() => this.clear()}>Stop Timer</button>
            </div>
        );
    }
}

