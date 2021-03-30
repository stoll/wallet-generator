const fs = require("fs")
const prompts = require("prompts")
const wallet = require("ethereumjs-wallet")

const generateWallet = async () => {
    const account = wallet.default.generate();

    const accountDetails = {
        address: account.getAddressString(),
        publicKey: account.getPublicKeyString(),
        privateKey: account.getPrivateKeyString(),
    }

    fs.writeFile("./wallets/"+accountDetails.address+".json", JSON.stringify(accountDetails), "utf8", function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    });
}

(async () => {
    const response = await prompts({
        type: 'number',
        name: 'value',
        message: 'How many wallet addresses do you wish to generate?'
    });

    const amount = response.value

    for (let i = 0; i < amount; i++) {
        await generateWallet()
    }
})();