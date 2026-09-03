'use client'

import { useState } from 'react'
import { useRouter } from "next/navigation"
import { toast } from 'sonner'

import { authClient } from "@/lib/auth/auth-client"
import { Button } from "./button"

export const LogOutBtn = ()=>{

    const router = useRouter()
    const [isSigningOut, setIsSigningOut] = useState(false)

    const signOut = async () => {
        try {
            setIsSigningOut(true)
            const result = await authClient.signOut()

            if (result.error) {
                toast.error(result.error.message ?? 'Impossible de se déconnecter.')
                return
            }

            router.replace('/sign-in')
            router.refresh()
        } catch {
            toast.error('Impossible de se déconnecter.')
        } finally {
            setIsSigningOut(false)
        }
    }

    return (
        <Button
            onClick={signOut}
            disabled={isSigningOut}
            className="w-full border border-sidebar-border bg-transparent text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
            {isSigningOut ? 'Déconnexion...' : 'Se déconnecter'}
        </Button>
    )
}
