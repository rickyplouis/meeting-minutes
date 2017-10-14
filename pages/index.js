import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Timer from '../components/timer'

export default () => (
  <div>
    <Head>
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
    </Head>
    <ul>
      <li><Link href='/b' as='/a'><a>a</a></Link></li>
      <li><Link href='/a' as='/b'><a>b</a></Link></li>
      <li><Link href='/componentList' as='/componentList'><a>List of All UI Compnoents</a></Link></li>
    </ul>
  </div>
)
