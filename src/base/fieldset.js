import React from 'react';

function Fieldset(props){
    return (
        <fieldset>
            <legend>{props.title}</legend>
            {props.children}
        </fieldset>
    )
}



export default Fieldset ;