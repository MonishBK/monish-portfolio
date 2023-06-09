import './globals.css'
import './CSS/global.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from 'next/font/google'
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
      <title>Home</title>
        <meta name="description" content="monish portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link> */}
       <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
      </head>
      <body className={`${inter.className} main_body`}>{children}</body>
      <Analytics />
    </html>
  )
}
