import { Route, Routes } from 'react-router-dom'
import './App.css'
import InfiniteScroll from './components/InfiniteScroll'
import Login from './components/Login'
import Navbar from './components/Navbar'
import PerformanceOptimization from './components/PerformanceOptimization'
import ProductsPage from './components/ProductsPage'
import Search from './components/Search'
import Todolist from './components/Todolist'
import Cart from './components/Cart'
import Hirent from './components/Hirent'
import JobFeedIntegrationExample from './components/JobFeedIntegrationExample'

function App() {

  return (
    <>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<Todolist />} />
        <Route path="/search" element={<Search />} />
        <Route path="/performance" element={<PerformanceOptimization />} />
        <Route path="/infinite" element={<InfiniteScroll />} />
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/hirent' element={<JobFeedIntegrationExample/>}></Route>
      </Routes>
    </>
  )
}

export default App
