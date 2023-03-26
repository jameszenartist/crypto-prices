# Crypto-prices CLI

Command line tool written in Node.js to check cryptocurrency prices

If interested, you can register for an API key at https://min-api.cryptocompare.com

This project can also be found at https://syntaxsamurai.com

## Usage

```
npm install

npm link
```

## Commands

```
# Help & Commands
crypto-prices -h

# Version
crypto-prices -V

# API Key Commands
crypto-prices list
crypto-prices key set
crypto-prices key show
crypto-prices key remove

# Crypto Check Commands
crypto-prices check price

# Check Specific Coins (defaults are: BTC,ETH,XRP)
crypto-prices check price --coin=BTC,ETH

# Choose Currency (Default is: USD)
crypto-prices check price --cur=JPY
```

### Version

1.0.0

### License

ISC
