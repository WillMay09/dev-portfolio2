import React from 'react'
import ThemeToggle from '@/components/theme-toggle'
import  Link  from 'next/link'
export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            WM
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground'>
          <li className='hover:text-forground transition-colors'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='hover:text-forground transition-colors'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='hover:text-forground transition-colors'>
            <Link href='/contact'>Projects</Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
