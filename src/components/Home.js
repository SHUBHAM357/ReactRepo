import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Home extends Component {


    print() {
        console.log(this);
    }

    render() {
        return (
            <div>

                <button onClick={this.print}>clickMe</button>

            </div>

        )

    }

}

export default Home