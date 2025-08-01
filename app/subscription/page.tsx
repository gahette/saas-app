import {PricingTable} from "@clerk/nextjs";

// Mark page as dynamic to resolve headers() usage in auth
export const dynamic = 'force-dynamic';

const Subscription = () => {
    return (
        <div>
            <PricingTable/>
        </div>
    )
}

export default Subscription
