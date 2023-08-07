import Image from 'next/image'
import styles from './page.module.css'
import path from 'path'
import fs from 'fs'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Head from 'next/head'

export default function Home() {
  const fullPath = path.join('README.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return (
    <main className='markdown-body'>
      <MDXRemote source={fileContents} />
    </main>
  )
}