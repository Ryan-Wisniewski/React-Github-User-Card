import React, { useState, useEffect } from 'react'
// name: Ryan-Wisniewski
// api: https://api.github.com/users/

class UserCard extends React.Component{
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
        fetch(`https://api.github.com/users/Ryan-Wisniewski`)
        .then(res => {
            // console.log(res)
            return res.json()
        })
        .then(user => this.setState({ users: user }, console.log(user)))        
        .catch(err => console.log(err))
    }

    render() {
        // this.fetchUsers()
        return(
        <div className='box'>
        <p>aba di aba die</p> 
        <p>{this.state.users.name} </p>
        <p>{this.state.users.followers}</p>
        <p>{this.state.users.public_repos}</p>
        {/* {this.state.users.map(user=> {
            return <p>{user.usercard}</p>
        })} */}
        </div>
    )}
}

export default UserCard