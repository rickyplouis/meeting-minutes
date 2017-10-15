import React from 'react'
import { Input } from 'semantic-ui-react'
import Router from 'next/router'

const handler = () =>
  Router.push({
    pathname: '/room',
    query: { name: 'Test' }
  })


export default class UrlForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'Hello World'
    }
  }

  joinRoom(){
    return handler();
  }

  render(){
    return(
      <Input action='Submit' placeholder='http://bestroom.com' onClick={this.joinRoom} />
    )
  }
}
