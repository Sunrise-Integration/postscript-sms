# Postscript SMS

Postscript SMS integrated for Shogun Frontend.

> SMS marketing for growing Shopify stores

<table>
  <tbody>
    <tr>
      <td>⚠️</td>
      <td>This package runs on Shogun Frontend. </td>
    </tr>
  </tbody>
</table>

[Postscript SMS website →](https://www.postscript.io/)


## Installation

`yarn add @frontend-sdk/postscript-sms`

`npm install @frontend-sdk/postscript-sms`

## Usage

First we need to install the Postscript SMS script - we need to make a call to `usePostscriptSms` with a valid shopId (`00000`) :

```jsx
import { usePostscriptSms } from '@frontend-sdk/postscript-sms'

const App = () => {

    /**
     * shopId: This ID is not your store name, but a numerical number. 
     * You can locate your shop ID in your account settings.
     * Select your Shop Name in the side menu of your Postscript dashboard, then select Settings.
     * @type {string}
     */
    let shopId = '00000';
    usePostscriptSms(shopId);
    
  return <div>...</div>
}
```