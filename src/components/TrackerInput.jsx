import { ChevronRight } from "lucide-react";
import { useState } from "react";


export default function TrackerInput({setIsSearching, setSearchingInfo}) {
    
    const [searchValue, setSearchValue] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()

        setIsSearching(true)
        setSearchingInfo(searchValue)
        setSearchValue("")
    }
  
    return (
    <form action="" className="flex items-center w-full p-2 max-w-[50rem]" onSubmit={handleSubmit}>
        <input type="search" placeholder="Search for any IP address or domain" className="rounded-l-2xl p-[.7rem] w-full cursor-pointer" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        <button className="h-full rounded-r-2xl bg-black text-white p-[0.231rem] hover:bg-gray-600 transition-all">
            <ChevronRight
                size={40}
                className="p-[0.6rem] font-bold"
            />
        </button>
    </form>
  )
}
