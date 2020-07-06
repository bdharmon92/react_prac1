import React, { Component } from 'react';
import propTypes from 'prop-types';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css'

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {

        console.log("[Person.js] rendering...");

        return (
            <Auxiliary>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                    ref={this.inputElementRef}
                    // ref={(inputEl) => { this.inputElement = inputEl }}
                />
            </Auxiliary>
        );
    };
};

Person.propTypes = {
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number
};

export default withClass(Person, classes.Person);