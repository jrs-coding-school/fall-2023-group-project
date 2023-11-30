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


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/cardCatalog" element={<CardCatalog/>}/>
          </Route>
        </Routes>
      </ThemeContextProvider>
    </div>
  )
}

export default App
