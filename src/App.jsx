import { Route, Routes } from 'react-router-dom'
import Home from './Components/Shared/Home'
import Form from './Components/Shared/Form'


const App = () =>{

  return(
    <div className="App">
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/Form" element= {<Form/>}/>
      </Routes>
    </div>
  )
}

export default App;
