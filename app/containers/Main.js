import React from 'react';
import classnames from 'classnames';

function Main(props){
    var classes = classnames('main-component')
    return(
        <div className={classes}>
            <div>This is main</div>
            {props.children}
        </div>
    )
}

export default Main;