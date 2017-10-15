import React from 'react'
import Head from 'next/head'

import Timer from '../components/timer'
import UserList from '../components/userList'
import CurrentUser from '../components/currentUser'
import Participants from '../components/participants'
import Agenda from '../components/agenda'

export default () => (
  <div>
    <Head>
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
    </Head>
    <div style={{height: '10vh', width: '30vw', marginLeft: '30vw', marginRight: '30vw'}}>
      <CurrentUser>
        <Timer/>
      </CurrentUser>
      <UserList/>
      <Participants/>
      <Agenda/>
    </div>
  </div>
)
