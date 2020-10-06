import React, { useState } from 'react'
import ReactFlow, { Controls } from 'react-flow-renderer'
import styled from '@emotion/styled'
import { Circle, Square, Triangle, Base } from './Shapes'

const OverLay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #7367f0;
  z-index: 10;
`

const style = {
  background: 'none',
  borderStyle: 'none'
}

const Board = () => {
  const elementsMap = [
    {
      form: true,
      id: '1',
      type: 'input', // input node
      data: { label: <Circle id='1' title='Inicio' /> },
      position: { x: 5, y: 40 },
      sourcePosition: 'right',
      style
    },
    {
      form: true,
      id: '2',
      // you can also pass a React component as a label
      data: { label: <Square id='2' title='Agendar Cita' /> },
      position: { x: 240, y: 40 },
      targetPosition: 'left',
      sourcePosition: 'right',
      style
    },
    {
      form: true,
      id: '3',
      // you can also pass a React component as a label
      data: { label: <Square id='3' title='Confirmacion' /> },
      position: { x: 480, y: 40 },
      targetPosition: 'left',
      style
    },
    {
      form: true,
      id: '4',
      type: 'output',
      data: { label: <Base id='3' title='Aprobacion Comar' /> },
      position: { x: 10, y: 250 },
      style
    },
    {
      form: true,
      id: '5',
      type: 'output',
      data: { label: <Triangle id='3' title='' /> },
      position: { x: 480, y: 250 },
      style
    },
    // animated edge
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3' },
    { id: 'e3-4', source: '3', target: '4' }
  ]

  const [elements, setElements] = useState(elementsMap)

  function handleAdd() {
    const idNumber = elements.reduce((a, b) => {
      if (b.form) {
        return a + 1
      }
      return a
    }, 0)
    const id = idNumber + 1
    const element = {
      form: true,
      id,
      // you can also pass a React component as a label
      data: { label: <Square id='3' title='nuevo' /> },
      position: { x: 40, y: -40 },
      style
    }
    setElements([...elements, element])
    console.log(id)
  }

  return (
    <div>
      <OverLay>
        <button onClick={handleAdd}>+</button>
        <ReactFlow elements={elements}>
          <Controls />
        </ReactFlow>
      </OverLay>
    </div>
  )
}

export default Board
