(() => {
    const fs = require('fs');
    const Wallet = require('ethereumjs-wallet');
    const account = Wallet.default.generate();

    const accountDetails = {
        address: account.getAddressString(),
        publicKey: account.getPublicKeyString(),
        privateKey: account.getPrivateKeyString(),
    }

    const date = new Date()
    const currentTime = [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCMilliseconds()].join("");

    fs.writeFile("./wallets/"+currentTime+".json", JSON.stringify(accountDetails), "utf8", function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("Saved...");
    });
})()