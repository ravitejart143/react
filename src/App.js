/*import ClassComponent from "./ClassComponent"
import ClassComponent2 from "./ClassComponent2"


function App(){
    return(
       <div>
         <ClassComponent/>
         <ClassComponent2/>
         <p>learn about react</p>
          <h1>all the best</h1>
         <img src="https://blog.logrocket.com/wp-content/uploads/2019/05/create-react-app-getting-started.png"/>
       </div>

  )
}
export default App*/

import FuncPropExample from './FuncPropExample'
import StateExample from './StateExample'

function App(){
    return(
        <div>
           
            <h1>This is about props example</h1>
            <FuncPropExample framework="ravi" year="25"/>
            <FuncPropExample framework="ravi" year="25"/>
            <StateExample/>
            
        </div>
        )
}
export default App
   
