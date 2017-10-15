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
        <Link href="/makeRoom">
          <Button primary>Make Room</Button>
        </Link>
        <Link href="/joinRoom">
          <Button secondary>Join Room</Button>
        </Link>
        <Link href="componentList">
          <Button secondary> List of All Components</Button>
        </Link>
      </Container>
  </div>
)
