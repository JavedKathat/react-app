import { SignInButton } from '@clerk/clerk-react'
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
