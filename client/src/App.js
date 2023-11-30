// ** React
import { Routes, Route } from 'react-router-dom'

// ** Theme & layout
import ThemeContextProvider from './context/themeContext'
import Layout from './layouts'

// ** Views
import About from './views/About'
import Home from './views/Home'
import NotFound from './views/NotFound'
import CardCatalog from './views/CardCatalog'
import Packs from './views/Packs'
import Login from './views/Login'
import Register from './views/Register'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cards" element={<CardCatalog/>}/>
            <Route path="/packs" element={<Packs/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </ThemeContextProvider>
    </div>
  )
}

export default App
