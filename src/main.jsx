import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './assets/Nav.jsx'
import './index.css'
import Shadow from './assets/Shadow.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './assets/Home.jsx'
import Gradient from './assets/Gradient.jsx'
import Palettes from './assets/Palettes.jsx'
import TrendGradients from './assets/TrendGradients.jsx'
import Palette from './assets/Palette.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shadows' element={<Shadow/>}></Route>
        <Route path='/gradients' element={<Gradient/>}></Route>
        <Route path='/palettes' element={<Palettes/>}></Route>
        <Route path='/popular-gradient' element={<TrendGradients/>}></Route>
        <Route path='/palette' element={<Palette></Palette>}></Route>
      </Routes>
    </BrowserRouter>
,
)
