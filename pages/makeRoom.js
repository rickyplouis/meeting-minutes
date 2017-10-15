import Container from '../components/container'

import RoomForm from '../components/roomForm'

export default class MakeRoom extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      text: 'Hello World'
    }
  }

  render(){
    return(
      <div>
        <Container>
          <h1>On makeRoom.js</h1>
          <RoomForm/>
        </Container>
      </div>

    )
  }
}
