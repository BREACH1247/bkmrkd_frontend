import './App.css'
import CardGrid from './components/CardGrid'
import Reference from './components/Reference/Reference'

function App() {
  return (
    <div className='min-h-screen bg-[#EDE5C9]'>
      <div>
        <Reference />
        <CardGrid/>
      </div>
    </div>
  )
}

export default App
