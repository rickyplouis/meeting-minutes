import { Button } from 'semantic-ui-react'

import Router from 'next/router'
import Container from '../components/container'
import UrlForm from '../components/urlForm'

const handler = () =>
  Router.push({
    pathname: '/room',
    query: { name: 'Test' }
  })

export default class JoinRoom extends React.Component {

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
      <Container>
        <h1>Join A Room</h1>
        <UrlForm/>
      </Container>
    )
  }
}
