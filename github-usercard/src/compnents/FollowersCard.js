import React from 'react'

import Followers from './Followers'

export default class FollowersCard extends React.Component{
    constructor(){
        super()
        this.state = {
            users: []
            
        }
    }
    
    componentDidMount(){
        this.fetchUser()     
    }

    fetchUser = () => {
        fetch(`https://api.github.com/users/Ryan-Wisniewski/followers`)
            .then(res => {
                return res.json()
            })
            .then(user => this.setState({ users: user }))
            .catch(err => console.log(err))
    }
    
    render() {
        
        return (
            <div className='flex'>
                {this.state.users.map(users=> {
                    return ( 
                        <Followers login={users.login}/>
                    // <div className='box'>
                    //     <p className='yuh'>{users.login}</p>                        
                    //     <p className='yuh'>{users.id}</p>
                    //     <p>{users.type}</p>
                    // </div>
                    )
                })}
            </div>
        )
    }
}

