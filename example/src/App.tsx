import React from 'react'

import { createBoard } from 'suduko-generator'
import 'suduko-generator/dist/index.css'

const App = () => {
  React.useEffect(() => {
    const {grid , solution} = createBoard('Easy')
    console.log(grid)
    console.log(solution)
  })
  return <></>
}

export default App
