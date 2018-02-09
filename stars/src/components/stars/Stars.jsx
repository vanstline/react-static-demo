import React, { Component } from 'react';
import './stars.css';

class Stars extends Component {

    constructor(props) {
        super(props);

        this.state = {
            info: ['很差', '一般', '不错', '很好', '完美'],
            n: -1,
            m: -1
        }
    }

    handleOver = (n) => {
        console.log("移入", n);
        this.setState({
            n: n
        })
    };

    handleClick = (m) => {
        console.log("点击");
        this.setState({
            m
        })
    };

    handleOut = () => {
        this.setState({
            n: this.state.m
        })
    };



    render() {

        return (
            <div>
                <ul>
                    {
                        this.state.info.map( ( item, index ) => {
                            return (
                                <li key={index}
                                    className={ index <= this.state.n ? 'stars starsOver' : 'stars' }
                                    onMouseOver={() => this.handleOver(index)}
                                    onClick={() => this.handleClick(index)}
                                    onMouseOut={this.handleOut}
                                >
                                </li>
                            )
                        } )
                    }
                </ul>
                <div className="info">
                    {
                        this.state.n >= 0 ? this.state.info[this.state.n] : ''
                    }
                </div>
            </div>
        )
    }
}


export default Stars;