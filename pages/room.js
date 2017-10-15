export default class Room extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'Hello World'
    }
  }

  render(){
    return (
      <div>
        {this.state.text}
      </div>
    )
  }
}
