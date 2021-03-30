import prompts from "prompts"
import Wallet from "ethereumjs-wallet"
import { Account as SolanaAccount } from "@solana/web3.js"

(async () => {
    const response = await prompts({
        type: "select",
        name: "blockchain",
        message: "Select a blockchain",
        choices: [
            { title: "Ethereum", value: "ethereum" },
            { title: "Solana", value: "solana" },
        ],
    })

    switch (response.blockchain) {
        case "ethereum":
        case "bsc": {

            // Generate Ethereum account
            const account = Wallet.generate()

            const accountDetails = {
                address: account.getAddressString(),
                publicKey: account.getPublicKeyString(),
                privateKey: account.getPrivateKeyString(),
            }

            console.log("===========================")
            console.log("===========================")
            console.log("---------------------------")
            console.log("Address: "+accountDetails.address)
            console.log("---------------------------")
            console.log("Public key: "+accountDetails.publicKey)
            console.log("---------------------------")
            console.log("Private key: "+accountDetails.privateKey)
            console.log("---------------------------")
            console.log("===========================")
            console.log("===========================")

            break
        }

        case "solana": {
            // Generate Solana account
            const account = new SolanaAccount()

            console.log("===========================")
            console.log("===========================")
            console.log("---------------------------")
            console.log("Public key: "+account.publicKey.toString())
            console.log("---------------------------")
            console.log("Secret key: "+account.secretKey.toString("hex"))
            console.log("---------------------------")
            console.log("===========================")
            console.log("===========================")

            break
        }
    }
})()