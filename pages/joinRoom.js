import {Button} from 'semantic-ui-react'

export default class JoinRoom extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      text: 'Hello World'
    }
  }

  render(){
    return(
      <div>
        <h1> On joinRoom.js</h1>
        <Button>
          Continue
        </Button>
      </div>
    )
  }
}