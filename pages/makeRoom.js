import { Button } from 'semantic-ui-react'

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
        <h1>On makeRoom.js</h1>
        <Button>Contineu</Button>
      </div>
    )
  }
}
