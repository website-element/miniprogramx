# MiniProgramX

## Installation

```sh
$ npm install miniprogramx
```

## Example

+ MiniProgramStore
```js
import MiniProgramX from "miniprogramx"

export default new MiniProgramX.Store({
  modules: {
    auth: {
       state: {
         loginInfo: undefined
       },
       mutations: {
         updateLoginInfo: (state, loginInfo) => {
           state.loginInfo = loginInfo;
         },     
       },
       actions: {
         updateLoginInfo: ({ commit }, loginInfo) => {
           commit("updateLoginInfo", loginInfo);
         }
       }
    },
  }
});
```
+ app.js
```js
import store from "store"

App({
  store
})
```

## License

[MIT](LICENSE)
