
import React, { Component } from 'react';
import './checkall.css'


class CheckAll extends Component {

    constructor(props) {
        super(props);

        this.state = {
            info: [
                {
                    cont:'html',
                    def: false
                },
                {
                    cont:'css',
                    def: false
                },
                {
                    cont:'javscript',
                    def: false
                },
                {
                    cont:'react',
                    def: false
                },
                {
                    cont:'redux',
                    def: false
                },
            ],
            def: false
        }
    }

    handleChange = (item) =>  {

        let {  def } = this.state;

        item.def = !item.def;

        let a = this.state.info.every( item => {
           return item.def === true
        } );

        a ? def = true : def = false;

        this.setState({
            info: Object.assign( [], this.state.info, item ),
            def
        });

    };



    handleChangeAll = () => {

       let { def } = this.state;

       def = !def;

       this.setState({
           info: this.state.info.map( item=> Object.assign( {}, item, item.def = def ) ),
           def
       })
    };

    render() {
        return (
            <div className='check'>
                <div>
                    <label htmlFor="checkAll">
                        <input
                            type="checkbox"
                            id='checkAll'
                            ref='input'
                            checked={this.state.def}
                            onChange={this.handleChangeAll}
                        />
                        <span>全选</span>
                    </label>
                </div>
                <div>
                    {
                        this.state.info.map( (item, index) => {
                            return (
                                <label key={index} htmlFor={item.cont}>
                                    <input
                                        type="checkbox"
                                        id={item.cont}
                                        checked={item.def}
                                        onChange={() => this.handleChange(item)}
                                    />
                                    <span>{item.cont}</span>
                                </label>
                            )
                        } )
                    }
                </div>
            </div>
        )
    }
}


export default CheckAll;