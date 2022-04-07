/*!
 * MiniProgramX v1.0.0
 * (c) 2022 Zhong Li
 * @license MIT
 */
declare function getApp(): any;

class Store {
    _modules: any;
    state: any;

    constructor (options: any) {
      this._modules = options.modules
      this.state = this.getNestedState()
    }

    getNestedState (): object {
      const state: any = {}
      Object.keys(this._modules).forEach((module) => {
        state[module] = this._modules[module].state
      })
      return state
    }

    dispatch (actionName: string, actionData: any): Promise<any> {
      return new Promise((resolve, reject) => {
        const [space, action] = actionName.split('/')
        if (!space || !action) {
          reject(new Error('Action name error: The distribution operation name is incorrect'))
        }
        const $app = getApp()
        resolve($app.store._modules[space].actions[action]({
          commit: (mutationName: string, mutationData: any) => {
            $app.store._modules[space].mutations[mutationName]($app.store._modules[space].state, mutationData)
          }
        }, actionData))
      })
    }
}

export default {
  version: '1.0.0',
  Store
}
