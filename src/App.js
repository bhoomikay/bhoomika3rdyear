import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Material from './Components/Material'
import Todolist from './Components/TodoList'


 const App= () => {
  return (
     <div>
       <Router>
         <div>
        <Material/>
        </div>
        <Routes>
         <Route path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Todolist' element={<Todolist/>}/>
        
         </Routes>
       </Router>
      
     </div>
   )
 }

 export default App

