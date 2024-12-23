import {useState } from "react"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function useTracker() {
    const [isSearching, setIsSearching] = useState(false)
    const [searchingInfo, setSearchingInfo] = useState("")
    const [data, setData] = useState(null)


    const [isLoading, setIsLoading] = useState(false)

    const key = import.meta.env.VITE_API_KEY

    // validar busqueda del usuario --> 
    const validateInput = (input) => {  
        if (validIp(input) || validDomain(input)) {
            return validDomain(input) ? `&domain=${input}`: `&ipAddress=${input}` 
        }else{
            notifyError()
            return ''
        }
    }

    const notifyError = () => toast.error("Domain or Ip Address Incorrect.", {
        position: "top-right",
        className: "bg-dark",
        autoClose: 2000,
        theme: "colored"
    });

  
    const validIp = (ip) => {
        return validIpv4(ip) || validIpv6(ip)
    }

    const validIpv4 = (ip) => {
        // ipv4 --> x1.x2.x3.x4 --> 0 <= Xi <= 255
        if (typeof (ip) !== 'string' || ip.split(".").length !== 4) {
            return false
    
        }
        for (let octeto of ip.split(".")) {
            if (0 > octeto || octeto > 255) {
                return false
            }
        }
        return true
    }

    const validIpv6 = (ip) => {
        const pattern = new RegExp(/^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/)
        return pattern.test(ip)
    }

    const validDomain = (domain) => {
        const pattern = new RegExp(/^(((http|https):\/\/|)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?)$/)
        return pattern.test(domain)
    }


  const fetchTrackerInfo = async (isSearching) => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${key}${isSearching ? validateInput(searchingInfo) : ''}`) 
      const data = await response.json()

      setData(data)

    } catch (error) {
      console.log(error) 
    }finally{
      setIsLoading(false)
    }
  }

  return {
    isSearching,
    setIsSearching,
    searchingInfo, 
    setSearchingInfo,
    data, 
    setData,
    isLoading, 
    setIsLoading,
    validateInput, 
    notifyError,
    validIp, 
    validIpv4,
    validIpv6,
    validDomain,
    fetchTrackerInfo
  }
}
