import axios from 'axios'

const apis = {
  bored: 'http://www.boredapi.com/api/activity/',
  jokes: 'https://v2.jokeapi.dev/joke/',
}

export default {
  async callBoredapi(type) {
    let url = apis.bored
    if (type) url += `?type=${type}`
    const response = await axios.get(url)
    if (response.data.error) {
      throw response.data.error
    }
    return response.data
  },
  async callJokesapi(categories, blackList) {
    let url = apis.jokes
    if (categories.length) {
      for (let i = 0; i < categories.length; i++) {
        if (i == categories.length - 1) url += categories[i]
        else url += categories[i] + ','
      }
    } else {
      url += 'any'
    }
    if (blackList.length) {
      url += '?blacklistFlags='
      for (let i = 0; i < blackList.length; i++) {
        if (i == blackList.length - 1) url += blackList[i]
        else url += blackList[i] + ','
      }
    }
    const response = await axios.get(url)
    return response.data
  },
}
