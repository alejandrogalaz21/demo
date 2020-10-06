import React from 'react'
import ReactFlow from 'react-flow-renderer'
import styled from '@emotion/styled'
import { Circle, Square, Triangle } from './Shapes'

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
  const elements = [
    {
      id: '1',
      type: 'input', // input node
      data: { label: <Circle id='1' title='Inicio' /> },
      position: { x: 40, y: 40 },
      style
    },
    // default node
    {
      id: '2',
      // you can also pass a React component as a label
      data: { label: <Square id='2' title='Entrevista' /> },
      position: { x: 280, y: 40 },
      style
    },
    {
      id: '3',
      // you can also pass a React component as a label
      data: { label: <Square id='3' title='Aprobacion Comar' /> },
      position: { x: 480, y: 40 },
      style
    },
    {
      id: '4',
      type: 'output', // output node
      data: { label: <Triangle id='3' title='' /> },
      position: { x: 250, y: 250 },
      style
    }
    // animated edge
    // { id: 'e1-2', source: '1', target: '2', animated: true },
    // { id: 'e2-3', source: '2', target: '3' }
  ]

  return (
    <div>
      <OverLay>
        <ReactFlow elements={elements} />
      </OverLay>
    </div>
  )
}

export default Board
