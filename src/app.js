// @flow
import React, { Component } from "react";
import type { Node } from "react";
import Game from 'Components/game';

type Props = {}
type State = {}

class App extends Component<Props, State> {

    render(): Node {
        return (
            <div className="App">
                <h1>Hello, World</h1>
                <Game />
            </div>
        );
    }
}

export default App;