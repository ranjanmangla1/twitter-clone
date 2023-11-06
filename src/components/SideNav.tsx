import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

const SideNav = () => {
  const session = useSession()
  const user = session.data?.user
  return (
    <nav className='sticky top-0 px-2 py-4'>
        <ul className='flex flex-col items-start gap-2 whitespace-nowrap'>
            <li>
                <Link href="/">Home</Link>
            </li>
            {
                user != null && 
                <li>
                    <Link href={`/profiles/${user.id}`}>Profile</Link>
                </li>
            }
            {
                user == null ? 
                (
                    <li>
                        {/* here void means we don't care about return type of signOut function */}
                        <button onClick={() => void signIn()}>Log In</button>
                    </li>
                ) : 
                (
                    <li>
                        {/* here void means we don't care about return type of signOut function */}
                        <button onClick={() => void signOut()}>Log out</button>
                    </li>
                )
            }
        </ul>
    </nav>
  )
}

export default SideNav