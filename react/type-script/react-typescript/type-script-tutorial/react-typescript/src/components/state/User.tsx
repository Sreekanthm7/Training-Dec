import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState(null)
    const handleLogin = () => {}
    
    const handleLogOut = () => {}

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}></button>
        </div>
    )
}