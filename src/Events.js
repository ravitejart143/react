import {Component} from 'react'

export default class Events extends Component{
state={
    username:""
    
}
handleClick=()=>{
    console.log(this.state.username)
    this.setState({
        username:""
    
    })
}
handleUser=(e)=>{
    this.setState({
        [e.targest.name]:e.target.value
    })
}
render(){
    return(
       <div>
         <input value={this.state.username} name="username" type="text" placeholder="user"
         onChange={this.handleUser}/>
         <h1>events</h1>
         <button onClick={this.handleClick}>Sumbit</button>
         </div>
   )
}
}