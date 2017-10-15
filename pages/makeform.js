import { Button } from 'semantic-ui-react'
import InputComponent from '../components/input'
import Head from 'next/head'
import FormExample from '../components/formexample'
import Container from '../components/container'

export default class MakeForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      text: 'Hello World'
    }
  }

  render(){
    return(
      <div>
        <Head>
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
        </Head>
        <Container>
        <h1>Add Agenda Items</h1>
        <FormExample/>
        </Container>
      </div>
    )
  }
}