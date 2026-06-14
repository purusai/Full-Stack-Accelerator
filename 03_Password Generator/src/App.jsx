import './App.css'
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  // useref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_{}~+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)


    
    }
    setPassword(pass)



  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-gray-400 bg-zinc-900'>
      <h1 className='text-pink-500 text-center mb-4'>Password Generator</h1>
     <div className='flex  shadow rounded-lg overflow-hidden bg-zinc-950'>
      <input
     type="text"
     value={password}
     className="outline-none w-full py-1 px-3 selection:bg-zinc-700"
     placeholder="password"
     readOnly
     ref={passwordRef}
     />
     <button 
     onClick={copyPasswordToClipboard}
     className='outline-none text-gray-400 cursor-pointer hover:text-white px-3 py-0.5 shrink-0'
     >copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center py-3 gap-x-1'>
        <input 
          type="range" 
          min={8}
          max={100}
          value={length}
          className='cursor-pointer accent-pink-700'
          onChange={(e) => {setLength(e.target.value)}}
          
        />
        <label>Length: {length} </label>
      </div>
      <div className='flex items-center py-3 gap-x-1'>
         <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className='cursor-pointer accent-pink-500'
              onChange={(e) => {
                   setNumberAllowed((prev) => !prev);
              }}
         
         />
         <label htmlFor='numberInput'>Numbers</label>
      </div>
        
        <div className='flex items-center py-3 gap-x-1'>
         <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              className='cursor-pointer accent-pink-500'
              onChange={(e) => {
                   setCharAllowed((prev) => !prev);
              }}
         
         />
         <label htmlFor='characterInput'>Characters</label>
      </div>

     </div>
    </div>
      
    </>
  )
}

export default App
