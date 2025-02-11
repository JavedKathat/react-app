import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button'

function UserLogIn() {
  return (
    <div>
      <SignInButton mode="modal" forceRedirectUrl='/'>
        <Button>Login</Button>
      </SignInButton>
    </div>
  )
}

export default UserLogIn
