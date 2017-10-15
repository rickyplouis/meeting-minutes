import React from 'react'
import Router from 'next/router'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const handler = () =>
  Router.push({
    pathname: '/room',
    query: { name: 'Test' }
  })

export default class RoomForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      text: 'Hello World'
    }
  }

  makeRoom(){
    return handler();
  }

  render(){
    return(
        <Form style={{width: '40vw', marginLeft: '20vw'}}>
          <Form.Field width={10}>
            <label>Room Name</label>
            <Form.Input placeholder="Room Name"/>
          </Form.Field>
          <Form.Field width={5}>
            <label>First Participant</label>
          </Form.Field>
          <Form.Group>
            <Form.Input placeholder='Speaker' width={8} />
            <Form.Input placeholder='Topic' width={4} />
            <Form.Input placeholder='Time' width={4}/>
          </Form.Group>
          <Form.Field width={5}>
            <label>Second Participant</label>
          </Form.Field>
          <Form.Group>
            <Form.Input placeholder='Speaker' width={8} />
            <Form.Input placeholder='Topic' width={4} />
            <Form.Input placeholder='Time' width={4}/>
          </Form.Group>
          <Form.Field width={5}>
            <label>Third Participant</label>
          </Form.Field>
          <Form.Group>
            <Form.Input placeholder='Speaker' width={8} />
            <Form.Input placeholder='Topic' width={4} />
            <Form.Input placeholder='Time' width={4}/>
          </Form.Group>
          <Button type='submit' onClick={this.makeRoom}>Submit</Button>
        </Form>
    )
  }
}
