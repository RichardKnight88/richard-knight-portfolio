import React from 'react'
import axios from 'axios'

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/endpoint') // * <-- replace with your endpoint
      console.log(res.data)
    }
    getData()
  })

  return <h1>Hello World</h1>
}

export default App
