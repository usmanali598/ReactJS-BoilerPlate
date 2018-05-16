import React, { Component } from 'react'

export default class App extends Component
{
    constructor( props )
    {
        super( props );
        this.alertTesting = this.alertTesting.bind( this );
    }
    alertTesting()
    {
        alert( "BoilerPlate is totally Functioning." )
    }
    render()
    {
        return (
            <div>
                <h1>My React Application</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque dolore veniam temporibus inventore consequatur ex illo tempora nemo esse sapiente!
                </p>
                <button onClick={ this.alertTesting }>Alert Testing</button>
            </div>
        )
    }
}
