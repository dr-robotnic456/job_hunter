import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import {getSession} from 'next-auth/react'

function Auth(WrappedComponent) {
    return (props) => {
        const router = useRouter()

        useEffect(() => {
            const checkAuth =async () => {
                const session = await getSession()
                if(!session){
                    router.replace("/login")
                }
            }
            checkAuth();
        }, [])
        return (
            <WrappedComponent {...props} /> 
        )
    }
}

export default Auth
