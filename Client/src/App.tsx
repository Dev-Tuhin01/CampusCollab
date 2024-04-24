import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <div className="flex flex-col-reverse sm:flex-col">
      <Navbar />
      <h1 className='text-3xl bg-pink-200 underline'>
        Hello, World!!!
      </h1>
      
    </div>
  )
}

export default App
