import { ChevronRight } from "lucide-react";
import { useState } from "react";


export default function TrackerInput({setIsSearching, setSearchingInfo}) {
    
    const [searchValue, setSearchValue] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()

        setIsSearching(true)
        setSearchingInfo(searchValue)
    }
  
    return (
    <form action="" className="flex items-center w-full p-2 max-w-[50rem]" onSubmit={handleSubmit}>
        <input type="search" placeholder="Search for any IP address or domain" className="border rounded-l-lg p-2 w-full" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        <button className="border h-full rounded-r-lg bg-black text-white">
            <ChevronRight
                size={40}
                className="p-[0.65rem] font-bold"
            />
        </button>
    </form>
  )
}
