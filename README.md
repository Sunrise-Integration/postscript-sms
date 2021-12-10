# Postscript SMS

Postscript SMS integration for Shogun Frontend.

> SMS marketing for growing Shopify stores

<table>
  <tbody>
    <tr>
      <td>⚠️</td>
      <td>This package runs on Shogun Frontend and is in customer Beta. It might not currently support all ecommerce platforms or cover all use cases.</td>
    </tr>
  </tbody>
</table>

[Postscript SMS website →](https://www.postscript.io/)


## Installation

`yarn add @frontend-sdk/postscript-sms`

`npm install @frontend-sdk/postscript-sms`

## Usage

1. Find your Postscript Shop ID [here](https://app.postscript.io/account/settings)

2. Use `usePostscriptSms` hook to add Postscript functionality

```jsx
import { usePostscriptSms } from '@frontend-sdk/postscript-sms'

const App = () => {
  usePostscriptSms('00000');
  return <>...</>
}
```
