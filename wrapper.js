import React from 'react';
function wrapper(props){
    return(
       <div>
        {props.children}
       </div>

    )
}
export default wrapper;