require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name rate stereo home gesture bread slot giant'; 
let testAccounts = [
"0x29b97160942897f84bf398558520def7d29b2daa6f65b8b719835811c7e84b5d",
"0x1a4a7bd76dce007c7709495e73a7eb5e3ae57c0385ef9a7286d082442b88d6b7",
"0x83c42044219acd6b1126feaa672c2ef605a47b98193c14f901f7937fbd029a31",
"0x98c95c19f6217cf14f1494d1bdd7352eb5cb019fc8689c2880b318e2ebd57669",
"0xcbc7e47cc25d44312ecf0e0e461a3e924f09907448d567dc39582349fe18dc4c",
"0x5de12514d01c883e1fd37ea8913d8f8e39ac7d0941bd5523c7b3453134d50bb3",
"0x0d0758849e277278bbe8a4c97ed320031bc5478efe1b6d7349ded7a4a2454756",
"0xd1ef67d2ea035e5a6cf549cb7b41580114f5b517843bac49ce4215ca76911304",
"0xa9665a25637c92ad818529bf3b701b867259d432b3ca073e917d9d1e408828d8",
"0x94d0dc86e8deb249124dc6ea919140c084cea43ca641a17eee59e40065abc323"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

