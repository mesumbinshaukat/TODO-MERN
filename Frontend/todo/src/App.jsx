import {Outlet} from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home'

const App = () => {
  return (
  <>
  <Header/>
  <Home/>
    <Outlet/>
    </>
  )
}

export default App
