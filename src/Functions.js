import axios from 'axios';

export default async function apiCall(muscle){
    const axiosResponse = await axios.request({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://backend.hamrogpt.repl.co/",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    console.log(axiosResponse)
    return "hello";
  }
  