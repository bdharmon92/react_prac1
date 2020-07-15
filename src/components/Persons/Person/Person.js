import React, { Component } from 'react';
import propTypes from 'prop-types';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css'
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    };

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    };

    render() {

        console.log("[Person.js] rendering...");

        return (
            <Auxiliary>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log In.</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                    ref={this.inputElementRef}
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