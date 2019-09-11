import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Coming Soon</p>
                <div className="footer">
                    <span>Presented by Eric R. Kock - Sep. 2019 |
                        <a href="https://about.me/erickock" rel="noopener noreferrer" target="_blank">{" "}About Me</a>{" "}-
                        <a href="https://codepen.io/EricRKock/" rel="noopener noreferrer" target="_blank">{" "}CodePen{" "}</a>{" "}-
                        <a href="https://github.com/ericrkock/" rel="noopener noreferrer" target="_blank">{" "}GitHub</a>
                    </span>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


