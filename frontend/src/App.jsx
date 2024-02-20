import { useEffect, useState } from "react"

function App() {
  const [smt,setSmt] = useState()

  useEffect(()=>{
    const time = setTimeout(()=>{
      console.log("somting")
    },[5000]);
    return{
      clearTimeout(time)
    }
  },[])

  return (
    <div>
        Hello world
    </div>
  )
}

export default App
