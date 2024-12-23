
export default function TrackerInfo({data, isLoading}) {
    return (
      <section className="relative top-24 rounded-xl border max-w-[75rem] bg-white mx-auto p-3 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 shadow-xl gap-4 ">
          {isLoading ? (
              <p>Loading...</p>
          ):(
              data ? (
                  <>
                      <div className="p-1 info-container">
                          <span className="font-semibold">IP ADDRESS</span>
                          {data.ip ? (
                              <p className="break-words">{data.ip}</p>
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
          )
          }
      </section>  
    )
  }
  