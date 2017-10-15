import Head from 'next/head'

export default class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'Hello World'
    }
  }

  render(){
    return(
      <div style={{width: '80vw', marginLeft: '10vw', marginTop: '10vh', textAlign: 'center'}}>
        <Head>
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
        </Head>
        {this.props.children}
      </div>
    )
  }
}
