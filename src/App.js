import React from 'react';

const App = () => {
    const profiles = [
        { name: "Taro", age: 20 },
        { name: "Hanako", age: 25 },
        { name: "Unknown" }
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

User.defaultProps = {
    age: 1
}

export default App;
