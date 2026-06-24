import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout/Mainlayout'
import {Home} from "./pages/Home/Home"
import { About } from './pages/About/About'
import { Quests } from './pages/Quests/Quests'
import { Places } from './pages/Places/Places'
import { Start } from './pages/Start/Start'
import { NotFound } from './pages/NotFound/NotFound'
import { QuestsDetail } from './pages/QuestsDetail/QuestsDetail'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About /> } />
      <Route path="quests" element={<Quests /> } />
      <Route path="quests/:id" element={<QuestsDetail/> } />
      <Route path="places" element={<Places /> }>
          <Route path="history" element={<h2>History</h2>}/>
          <Route path="food" element={<h2>Food</h2>}/>
          <Route path="nature" element={<h2>Nature</h2>}/>
      </Route>
      <Route path="start" element={<Start /> } />
      <Route path="*" element={<NotFound /> } />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
