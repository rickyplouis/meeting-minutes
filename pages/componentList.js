import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Timer from '../components/timer'
import UserList from '../components/userList'

export default () => (
  <div>
    <Head>
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
    </Head>
    <ul>
      <li><Link href='/b' as='/a'><a>a</a></Link></li>
      <li><Link href='/a' as='/b'><a>b</a></Link></li>
      <li><Link href='/componentList' as='/componentList'><a>b</a></Link></li>
    </ul>
    <div style={{height: '10vh', width: '30vw', marginLeft: '30vw', marginRight: '30vw'}}>
      <Timer/>
      <UserList/>
    </div>
  </div>
)
