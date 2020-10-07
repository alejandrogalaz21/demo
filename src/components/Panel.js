import React, { useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'

const PanelContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 200px;
  background-color: #ffffff;
  border: 3px solid #fdfdfd;
  padding: 10px;
  z-index: 40;
`

const Panel = ({ add }) => {
  const [error, setError] = useState(false)
  const [type, setType] = useState('')
  const [title, setTitle] = useState('')

  const handleOnSubmit = event => {
    event.preventDefault()
    if (type === '' && title === '') {
      setError(true)
      return
    }
    add({ title, type })
  }
  return (
    <PanelContainer>
      {error && <Error message='Todos los campos son necesarios' />}
      <form onSubmit={handleOnSubmit}>
        <div className='field'>
          <input
            name='title'
            placeholder='Title'
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </div>

        <div className='field'>
          <select name='type' value={type} onChange={event => setType(event.target.value)}>
            <option value=''></option>
            <option value='default'>default</option>
            <option value='input'>Inicio</option>
            <option value='output'>Fin</option>
          </select>
        </div>

        <br />
        <button type='submit'>Agregar</button>
      </form>
    </PanelContainer>
  )
}

export default Panel
