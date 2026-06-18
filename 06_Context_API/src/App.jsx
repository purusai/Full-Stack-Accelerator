import './App.css'
import UserContextProvider from './contex/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
     <h1>React State Management with Context API</h1>
    </UserContextProvider>
  )
}

export default App
