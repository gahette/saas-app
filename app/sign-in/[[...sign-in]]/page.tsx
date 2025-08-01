import {SignIn} from '@clerk/nextjs'

// Mark page as dynamic to resolve headers() usage in auth
export const dynamic = 'force-dynamic';

export default function Page() {
    return <main className="flex items-center justify-center">
        <SignIn/>
    </main>
}