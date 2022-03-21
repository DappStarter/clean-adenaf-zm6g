require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword stock rate noble slow great light army general'; 
let testAccounts = [
"0xe297b7e3a255f6d393ec3fec68cc9e9d4b44f5794780c452a62600dedff42cfb",
"0x65af713c83b5cd1b778b4e633c1a511f6d2a96e60611de19f0aadb8bc93970a4",
"0x59e1f7dbcecf19555ae4159fcf397311422f2a6f9122c47c36b6fb6453661ab9",
"0xdff03b47e5d08cee13d7122c2f415cf8e15b63718f3a4308c769cdbe8f2f31c5",
"0x710d8c256ef9a19f73d8db8f29892a72731faaa96e9b603bffa378541c5529db",
"0xe45f1e35cd484fd99145234eb9c82e7d96d59eee6198b1ae242c24b0a40648c1",
"0xf77e4cff65cb834b75454c1a57d2057215b63bb86cf17d7e9cfd9c6335dfb246",
"0x57cf4e7037116d4c40b51a5e19923f367a499e370f9d085669b0aded0f250471",
"0x6df1084e732ae4586cc47b0627971a009262f32ebcd461f64f65eb9fe8a40526",
"0x591251d28655b48d465f2621b413aaaa4587b60791ae13c6404f8c75e290e50b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

