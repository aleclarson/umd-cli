# umd-cli

Generate a UMD bundle from an NPM package.

Uses [packd.now.sh](https://github.com/Rich-Harris/packd) as the bundler.

```sh
# using npx:
npx umd-cli lodash > lodash.umd.js

# or install directly:
npm install -g umd-cli
umd react@16 > react-16.umd.js
```

## API

```js
import umd from 'umd-cli'

// Fetch the UMD bundle into an in-memory buffer.
let promise = umd.fetch(name)

// Download the UMD bundle into a file.
let promise = umd.download(name, file)
```
