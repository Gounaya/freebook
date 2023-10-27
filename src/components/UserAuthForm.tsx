'use client'
import { cn } from '@/lib/utils'
import { FC, useState } from 'react'
import { Button } from './ui/Button'
import { signIn } from 'next-auth/react'
import { Icons } from './Icons'
import { toast } from '@/hooks/use-toast'

// It will handle all the logic that we will need to sign in 
interface UserAuthFormProps extends React.HtmlHTMLAttributes<HTMLDivElement> {

}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loginWithGoogle = async () => {
        setIsLoading(true);
        try {
            throw new Error();
            await signIn('google')
        } catch (error) {
            console.log(error);
            toast({
                title: "there was a problem",
                description: "There was an error logging in with example",
                variant: 'destructive'
            })
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={cn('flex justify-center', className)} {...props}>
            <Button
                onClick={loginWithGoogle}
                isLoading={isLoading}
                size='sm'
                className='w-full'>
                {isLoading ? null : <Icons.google className='h-4 w-4 mr-2' />}
                Google</Button>
        </div>
    )
}

// 52

export default UserAuthForm