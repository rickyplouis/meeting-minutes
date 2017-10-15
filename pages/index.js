import Link from 'next/link'
import Head from 'next/head'

import { Header, Button } from 'semantic-ui-react'

import Container from '../components/container'

export default () => (
  <div>

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
      </Container>
  </div>
)
