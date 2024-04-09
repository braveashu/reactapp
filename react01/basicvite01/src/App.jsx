import { useState } from "react"
function App() {
  const [color, setColor] = useState('skyblue')

  return (
      <div className="w-full h-screen duration-500"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
            <button className="bg-red-600 rounded-2xl px-2 py-1" onClick={() => setColor('red')}>Red</button>
            <button className="bg-green-600 rounded-2xl px-2 py-1" onClick={() => setColor('green')}>Green</button>
            <button className="bg-blue-600 rounded-2xl px-2 py-1" onClick={() => setColor('blue')}>Blue</button>
            <button className="bg-yellow-600 rounded-2xl px-2 py-1" onClick={() => setColor('yellow')}>Yellow</button>
          </div>
        </div>
      </div>  
  )
}

export default App
