import Link from 'next/link'
import Head from 'next/head'

import { Header, Button } from 'semantic-ui-react'

import Container from '../components/container'

export default () => (
  <div>
    <Head>
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
    </Head>
      <Container>
        <Header as="h1">
          Welcome to Meeting Minutes
        </Header>
        <Button primary>Create Room</Button>
        <Button secondary>Join Room</Button>
        <ul>
          <li><Link href='/b' as='/a'><a>a</a></Link></li>
          <li><Link href='/a' as='/b'><a>b</a></Link></li>
          <li><Link href='/componentList' as='/componentList'><a>List of All UI Compnoents</a></Link></li>
        </ul>
    </Container>
  </div>
)
