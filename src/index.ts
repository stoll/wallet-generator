import prompts from "prompts"
import Wallet from "ethereumjs-wallet";

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
        case "ethereum": {
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
            console.log("Coming soon...")

            break
        }
    }
})()