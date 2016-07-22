var React = require('react');

function Main(props){
    return(
        <div>
            <div>This is main</div>
            {props.children}
        </div>
    )
}

module.exports = Main;