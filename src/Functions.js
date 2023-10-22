import * as React from "react";
import { useState } from 'react';
import axios from 'axios';


export async function apiCall(response, setResponse, muscle){
    const axiosResponse = await axios.request({
      method: "GET",
      url: "https://backend.hamrogpt.repl.co/cooldowns/"+muscle+"/20/65/yes", //"https://cors-anywhere.herokuapp.com/https://backend.hamrogpt.repl.co/",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    console.log("yo" + axiosResponse);
    setResponse(axiosResponse);
}

// function ImageFinderApiCall(){
//     const axiosResponse = await axios.request({
//         method: "GET",
//         url: "https://backend.hamrogpt.repl.co/cooldowns/"+muscle+"/20/10/65/cardio", //"https://cors-anywhere.herokuapp.com/https://backend.hamrogpt.repl.co/",
//         headers: {
//           "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
//           "X-Requested-With": "XMLHttpRequest",
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       })
//       console.log("yo" + axiosResponse);
//       setResponse(axiosResponse);
// }

// export function ImageFinder(prompt) {
    
// }