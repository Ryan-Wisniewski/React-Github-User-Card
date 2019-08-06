import React from 'react'

function Followers(props){
    return(
        <div className='box'>
            <p className='yuh'>{props.login}</p>                        
            <p className='yuh'>{props.id}</p>
            <p className='yuh'>{props.type}</p>

        </div>
    )
}

export default Followers