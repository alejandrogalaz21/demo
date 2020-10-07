import React, { useState } from 'react'
import ReactFlow, {
  removeElements,
  addEdge,
  Controls,
  useStoreState,
  ReactFlowProvider
} from 'react-flow-renderer'
import styled from '@emotion/styled'
import { Circle, Square, Triangle, Base } from './Shapes'
import './board.css'
import Pandel from './Panel'

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

const NodesDebugger = () => {
  const nodes = useStoreState(state => state.nodes)
  console.log(nodes)
  return null
}

const Board = () => {
  const initialElements = [
    {
      form: true,
      id: '1',
      type: 'input', // input node
      data: { label: <Circle id='1' title='nodo 1' /> },
      position: { x: 5, y: 40 },
      sourcePosition: 'right',
      style
    },
    {
      form: true,
      id: '2',
      // you can also pass a React component as a label
      data: { label: <Square id='2' title='nodo 2' /> },
      position: { x: 240, y: 40 },
      targetPosition: 'left',
      sourcePosition: 'right',
      style
    },
    {
      form: true,
      id: '3',
      // you can also pass a React component as a label
      data: { label: <Square id='3' title='nodo 3' /> },
      position: { x: 480, y: 40 },
      targetPosition: 'left',
      style
    },
    {
      form: true,
      id: '4',
      type: 'default',
      data: { label: <Square id='3' title='nodo 4' /> },
      position: { x: 10, y: 250 },
      style
    },
    {
      form: true,
      id: '5',
      type: 'output',
      data: { label: <Circle id='3' title='nodo 5' /> },
      position: { x: 480, y: 250 },
      style
    },
    // animated edge
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3' },
    { id: 'e3-4', source: '3', target: '4' }
  ]

  const [elements, setElements] = useState(initialElements)

  function nextId(elements) {
    const idNumber = elements.reduce((a, b) => {
      if (b.form) {
        return a + 1
      }
      return a
    }, 0)
    return idNumber + 1
  }

  function componentType(id, title, type) {
    switch (type) {
      case 'default':
        return {
          targetPosition: 'left',
          sourcePosition: 'right',
          data: { label: <Square id={id} title={title} /> }
        }
      case 'input':
        return {
          sourcePosition: 'right',
          data: { label: <Circle id={id} title={title} /> }
        }
      case 'output':
        return { data: { label: <Triangle id={id} title={title} /> } }
      default:
        return {
          data: { data: { label: <Square id={id} title={title} /> } }
        }
    }
  }

  function handleAdd({ title, type }) {
    const id = nextId(elements)
    const data = componentType(2, title, type)
    debugger
    const element = {
      ...data,
      form: true,
      id,
      position: { x: 40, y: -40 },
      style
    }
    setElements([...elements, element])
    console.log(id)
  }

  const onLoad = reactFlowInstance => {
    reactFlowInstance.fitView()
  }

  const onElementClick = reactFlowInstance => {
    console.log(reactFlowInstance)
  }

  const onConnect = params => {
    const { source, target } = params
    const edge = { id: `e${source}-${target}`, source, target }
    setElements([...elements, edge])
  }

  const handleOnElementsRemove = elementsToRemove => {
    setElements(els => removeElements(elementsToRemove, els))
  }

  const [show, setShow] = useState(false)
  const handleOnMoveEnd = transform => {
    console.log('zoom/move end', transform)
  }

  function handleOpenPanel() {
    setShow(!show)
  }

  return (
    <div>
      <OverLay>
        <button onClick={handleOpenPanel}>Options</button>

        {show && <Pandel add={handleAdd} />}

        <ReactFlowProvider>
          <ReactFlow
            onLoad={onLoad}
            elements={elements}
            onElementClick={onElementClick}
            onConnect={onConnect}
            onElementsRemove={handleOnElementsRemove}
            onMoveEnd={handleOnMoveEnd}>
            <Controls />
            {/* <NodesDebugger /> */}
          </ReactFlow>
        </ReactFlowProvider>
      </OverLay>
    </div>
  )
}

export default Board
