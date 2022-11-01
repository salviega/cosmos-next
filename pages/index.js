import axios from 'axios'
import React from 'react'


export default function Home() {
  async function getName() {
    const response = await axios.get('/api/hello')
    console.log(response)
  }
  return (
    <button onClick={getName}>getName</button>
  )
}
