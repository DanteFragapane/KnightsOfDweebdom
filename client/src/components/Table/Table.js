import React from 'react'
import { Table } from 'reactstrap'
import './Table.css'
import { Button } from 'reactstrap'
import Knob from '../Knob'

export default class Example extends React.Component {
  render () {
    return (
      <div className='mesa'>
        <Table dark>
          <thead>
            <tr className='mesa' >
              <th align='center'>BUZZ</th>
              <th align='center' >BLAMO</th>
              <th align='center' >WHAMO</th>
              <th align='center' >ZAP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='mesa' scope='row'>1</th>
              <td>
                <Button color='primary'>WUUUUUB!</Button>
                <Knob />
                {' '}</td>
              <td>
                <Button color='warning'>WUUUUUB!</Button>
                <Knob />
                {' '}</td>
              <td>
                <Button color='danger'>WUUUUUB!</Button>
                <Knob />
                {' '}</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>
                <Button color='primary'>WUUUUUB!</Button>
                <Knob />
                {' '}</td>
              <td>
                <Button color='warning'>WUUUUUB!</Button>
                <Knob />
                {' '}</td>
              <td>
                <Button color='danger'>WUUUUUB!</Button>
                <Knob />
                {' '}</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>
                <Button color='primary'>WUUUUUB!</Button>
                <Knob />
                {' '}</td>
              <td>
                <Button color='secondary'>WUUUUUB!</Button>
                <Knob />
                {' '}</td>
              <td>
                <Button color='danger'>WUUUUUB!</Button>
                <Knob />
                {' '}</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>
                <Button color='primary'>WUUUUUB!</Button>
                <Knob />
                {' '}</td>
              <td>
                <Button color='secondary'>WUUUUUB!</Button>
                <Knob />
                {' '}</td>
              <td>
                <Button color='danger'>WUUUUUB!</Button>
                <Knob />
                {' '}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}
