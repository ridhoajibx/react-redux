import React from 'react'
import './App.css';

const Card = props => {
    console.log(props, 'props card')
    return (
        <div className="card">
            <img src={props.avatar} alt="Avatar" style={{ width: '100%' }} />
            <div className="container">
                <h4><b>{props.name}</b></h4>
                <p>{props.title}</p>
                <input type="text" name='name' value={ props.name } onChange={ props.onChange } />
                <p><button className="button button-red" onClick={props.onDelete}>Change Name</button></p>
                <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Card
