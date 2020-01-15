import React from 'react';

const FollowerCards = props => {
return (
    <div>
        <img src={props.image} alt='Hello'/>
        <h3>{props.name} </h3>
        <p>Location: {props.location}</p>
        <p>Profile: {props.profile}</p>
        <p>Followers: {props.followers}</p>
        <p>Following: {props.following}</p>
        <p>Bio: {props.bio}</p>
    </div>    
)
};
export default FollowerCards