import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Navbar from "./Component/Navbar"
import NotFound from "./Component/NotFound"
function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="*" element={<NotFound/>}/>

          
        </Routes>
      </BrowserRouter>
    </div>
  )
}
   




// import ClassComponent2 from "./ClassComponent2"


// function App(){
//     return(
//        <div>
//          <ClassComponent/>
//          <ClassComponent2/>
//          <p>learn about react</p>
//           <h1>all the best</h1>
//          <img src="https://blog.logrocket.com/wp-content/uploads/2019/05/create-react-app-getting-started.png"/>
//        </div>

//   )
// }
// export default App*/

// import FuncPropExample from './FuncPropExample'
// import StateExample from './StateExample'
// import Events from './Events'

// function App(){
//     return(
//         <div>
           
//             <h1>This is about Events example</h1>
//             <Events/>
            
//         </div>
//         )
// }
// export default App


export default App