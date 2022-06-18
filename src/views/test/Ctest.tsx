import React, { useContext } from 'react'
import { TestContent } from '../Summary'


const Ctest = () => {
  const testc = useContext(TestContent)


  return (
    <div>
      <p>Componet C</p>
      <p>{testc.num}</p>

    </div>
  )
}

export default Ctest