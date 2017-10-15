import Container from '../components/container'
import CurrentUser from '../components/currentUser'
import UserList from '../components/userList'
import Agenda from '../components/agenda'
import Timer from '../components/timer'
import Participants from '../components/participants'
import { Grid } from 'semantic-ui-react'
import Head from 'next/head'

export default class Room extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      text: 'Hello World'
    }
  }

  render(){
    return (
      <div style={{width: '100vw'}}>
        <Head>
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
        </Head>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Participants/>
            </Grid.Column>
            <Grid.Column>
              <CurrentUser>
                <Timer/>
              </CurrentUser>
              <UserList/>
            </Grid.Column>
            <Grid.Column>
              <Agenda/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    )
  }
}
