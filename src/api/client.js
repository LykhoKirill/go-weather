import axios from 'axios'

class RequestError extends Error {
  constructor ({ response }) {
    super()
    this.response = response
  }
}

export class API {
  constructor (domain, options = {}) {
    this.axios = axios.create({
      baseURL: domain,
      ...options
    })

    const createMethod = method => {
      this[method] = this._createRequest(method)
    }

    ['get', 'post', 'patch', 'put', 'delete']
      .forEach(createMethod)
  }

  _createRequest (method) {
    return async function (url, body = {}) {
      try {
        const key = this.queryApiKey
        if (key) {
          body.params = { ...body.params, key }
        }

        const response = await this.axios[method](url, body)
        return (response && response.data) || null
      } catch (err) {
        throw new RequestError(err)
      }
    }
  }

  setQueryApiKey (key) {
    this.queryApiKey = key
  }
}
