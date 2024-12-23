import { useEffect } from "react"
import TrackerInfo from "./components/TrackerInfo"
import TrackerInput from "./components/TrackerInput"
import './App.css'
import TrackerGeoMap from "./components/TrackerGeoMap"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTracker from "./hooks/useTracker"

function App() {

  const { isSearching, setIsSearching, searchingInfo,  setSearchingInfo, data, setData, isLoading, setIsLoading, validateInput, notifyError, validIp, validIpv4, validIpv6, validDomain, fetchTrackerInfo} = useTracker()

  useEffect(() => {
    fetchTrackerInfo(isSearching)

  }, [isSearching, searchingInfo])

  return (
    <>
      <section className="border h-full z-10 relative">
        <div className="p-8" id="bg-pattern-top">
          <section className="p-2 max-w-[80rem] flex items-center justify-center flex-col mx-auto gap-3">
            <h1 className="text-3xl font-semibold text-white">IP Address Tracker</h1>
            <TrackerInput 
              setIsSearching={setIsSearching}
              setSearchingInfo={setSearchingInfo}
            />
          </section>
          
          <TrackerInfo
            data={data}
            isLoading={isLoading}
          />
        </div>

      </section>
      <div className="border h-[650px] z-0">
        {isLoading && (
          <div className="w-100 text-center h-full flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )}
        {data && (
          <TrackerGeoMap
            data={data}
          />
        )}
      </div>
      <ToastContainer/>
    </>
  )
}

export default App



