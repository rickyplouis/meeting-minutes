import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import Link from 'next/link'

const options = [
  { key: '0', text: '5', value: '5' },
  { key: '0', text: '10', value: '10' },
  { key: '0', text: '15', value: '15' },
  { key: '0', text: '20', value: '20' },
  { key: '0', text: '25', value: '25' },
  { key: '0', text: '30', value: '30' },
]

class FormExample extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input label='First name' placeholder='First name' />
          <Form.Input label='Last name' placeholder='Last name' />
          <Form.Select label='Allocated Minutes' options={options} placeholder='Allocated Time' />
        </Form.Group>
        <Form.Button>Add</Form.Button>
      </Form>
    )
  }
}

export default FormExample
