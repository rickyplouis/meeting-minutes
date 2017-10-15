import { Button } from 'semantic-ui-react'
import Link from 'next/link'
import ImageExample from '../components/imageexample'
import Example from '../components/example.js'
import InputComponent from '../components/input'
import Head from 'next/head'
import Container from '../components/container'

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
        <Head>
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
        </Head>
        <Container>
        <h1><ImageExample/>meeting minutes</h1>
        <InputComponent/>
        <h2>
        <Link href="/index">
        <Button primary>Back</Button>
        </Link>
        <Link href="/makeform">
        <Button primary>Create</Button>
        </Link></h2>
        </Container>
      </div>
    )
  }
}
