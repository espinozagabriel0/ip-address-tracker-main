
export default function TrackerInfo({data, isLoading}) {
  return (
    <section className="relative p-5 top-20 rounded-md max-w-[75rem] bg-white mx-auto grid lg:grid-cols-4 shadow-xl gap-4 grid-cols-1 md:grid-cols-2">
        {isLoading ? (
            <p>Loading...</p>
        ):(
            data ? (
                <>
                    <div className="p-1 info-container">
                        <span className="font-semibold">IP ADDRESS</span>
                        {data.ip ? (
                            <p>{data.ip}</p>
                        ):(
                            <p>Not found</p>
                        )}
                    </div>

                    <div className="p-1  info-container">
                        <span className="font-semibold">LOCATION</span>
                        
                        {data.location ? (
                            <>
                                <p>{data.location?.city}, <span className="location-region">{data.location?.region}</span></p>
                                <p>{data.location?.postalCode}</p>
                            </>
                        ):(
                            <p>Not found</p>
                        )}
                    </div>
                    <div className="p-1  info-container">
                        <span className="font-semibold">TIMEZONE</span>
                        {data.location ? (
                            <p>UTC {data.location?.timezone}</p>
                        ):(
                            <p>Not found</p>
                        )}

                    </div>
                    <div className="info-container-last p-[1rem]">
                        <span className="font-semibold">ISP</span>
                        {data.isp ? (
                            <p>{data.isp}</p>
                        ):(
                            <p>Not found</p>
                        )}
                    </div>
                </>
            ):(
                <p>No se ha podido cargar información.</p>
            )
        )}
    </section>  
  )
}
