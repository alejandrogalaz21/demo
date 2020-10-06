import React from 'react'
import { Link } from 'react-router-dom'
import ReactFlow from 'react-flow-renderer'
import styled from '@emotion/styled'

const OverLay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(51, 51, 51, 0.7);
  z-index: 10;
`

const Board = () => {
  const elements = [
    {
      id: '1',
      type: 'input', // input node
      data: { label: 'Input Node' },
      position: { x: 250, y: 25 }
    },
    // default node
    {
      id: '2',
      // you can also pass a React component as a label
      data: { label: <div>Default Node</div> },
      position: { x: 100, y: 125 }
    },
    {
      id: '3',
      type: 'output', // output node
      data: { label: 'Output Node' },
      position: { x: 250, y: 250 }
    },
    // animated edge
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3' }
  ]

  return (
    <div>
      <h2>Playground</h2>

      <OverLay>
        <ReactFlow elements={elements} />
      </OverLay>
    </div>
  )
}

export default Board
