import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div className="border-b-2 flex flex-row">
            <h1 className=" py-4 px-2 text-lg">Decentralised Raffle Powered by Chainlink</h1>
            <div className=" ml-auto py-3 px-2">
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}
