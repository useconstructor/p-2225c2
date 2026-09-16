import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
const dm=DM_Sans({subsets:['latin'],variable:'--font-dm'})
const space=Space_Grotesk({subsets:['latin'],variable:'--font-space'})
export const metadata:Metadata={title:'RetroThread | Authenticated Vintage and Streetwear',description:'Shop authenticated vintage clothing and contemporary streetwear from independent collectors.',openGraph:{title:'RetroThread',description:'Own the rarest pieces. Wear the story.',type:'website'}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${dm.variable} ${space.variable}`}>{children}</body></html>}
