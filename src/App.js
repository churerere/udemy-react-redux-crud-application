import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
    const profiles = [
        { name: "Taro", age: 20 },
        { name: "Hanako", age: 25 },
        { name: "Unknown", age: 3 }
    ]
    return (
        <div>
            {
                profiles.map((profile, idx) => {
                    return <User name={profile.name} age={profile.age} key={idx} />
                })
            }
        </div>
    );
}

const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old!</div>;
}

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

export default App;
