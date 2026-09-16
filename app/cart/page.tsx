import Link from 'next/link'
import { ArrowLeft, ShoppingBag } from 'lucide-react'
export default function Cart(){return <main className="grid min-h-screen place-items-center px-5 text-center"><div><ShoppingBag className="mx-auto mb-5" size={44}/><h1 className="font-display text-5xl font-bold uppercase">Your bag is empty</h1><p className="mt-4 text-[#77736d]">A rare piece will not stay around forever.</p><Link href="/#shop" className="mt-7 inline-flex items-center gap-2 bg-[#2a2a2a] px-6 py-3 font-bold text-white"><ArrowLeft size={16}/> Browse the archive</Link></div></main>}
