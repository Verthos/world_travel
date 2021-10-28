


export default function Flights(props) {
  return (
    <>
      <title>Posts - Viajens</title>
    </>
  )
}


export const getStaticProps = async () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
       const result = await fetch(process.env.FLIGHT_ENDPOINT);
       const data = await result.json();
       console.log(data) 
      
      } catch(err) {
        console.log("ERRO FETCH CURRENCY")
      } 
    }

    fetchData()
  },[])


  return{
    props:{
      data
    }
  }
}

