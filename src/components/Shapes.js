import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const CircleContainer = styled.div`
  margin: 0 auto;
  line-height: 100px;
  text-align: center;
  font-size: 1em;
  background: lightblue;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  word-wrap: break-word;
`
const SquareContainer = styled.div`
  margin: 0 auto;
  line-height: 100px;
  text-align: center;
  font-size: 1em;
  background: lightblue;
  width: 100px;
  height: 100px;
  word-wrap: break-word;
`
const TriangleContainer = styled.div`
  margin: 0 auto;
  line-height: 100px;
  text-align: center;
  font-size: 1em;
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 80px solid lightblue;
  word-wrap: break-word;
`
const BaseContainer = styled.div`
  line-height: 100px;
  text-align: center;
  font-size: 1em;
  float: left;
  width: 150px;
  height: 150px;
  margin: 0 20px;
  shape-outside: polygon(0 0, 100% 0, 100% 51%, 52% 100%, 0% 50%);
  clip-path: polygon(0 0, 100% 0, 100% 51%, 52% 100%, 0% 50%);
  background: lightblue;
`

export const Circle = ({ id, title }) => {
  return (
    <CircleContainer>
      <Link to={`/quiz/${id}`}>{title}</Link>
    </CircleContainer>
  )
}

export const Square = ({ id, title }) => {
  return (
    <SquareContainer>
      <Link to={`/quiz/${id}`}>{title}</Link>
    </SquareContainer>
  )
}

export const Triangle = ({ id, title }) => {
  return (
    <TriangleContainer>
      <Link to={`/quiz/${id}`}>{title}</Link>
    </TriangleContainer>
  )
}

export const Base = ({ id, title }) => {
  return (
    <BaseContainer>
      <Link to={`/quiz/${id}`}>{title}</Link>
    </BaseContainer>
  )
}
