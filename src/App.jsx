
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Defaultlayout from './layout/DefaultLayout'
import SingleProduct from './pages/SingleProduct'

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Defaultlayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
