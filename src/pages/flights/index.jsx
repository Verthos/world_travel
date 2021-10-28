import styles from "./flights.module.scss"


export default function Flights(props) {
  return (
    <main className={styles.container}>
      <title>Posts - Viajens</title>
      {
        props.flights.map(flight => (
          <div className="flight">
            <span>{flight.flight.airline_name}</span>

            <section className="departure">
              <h1>Origem: {flight.departure.iata}</h1>
              <h2>Data-hora saida: {
              new Date(flight.arrival.scheduled).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: 'numeric',
                minute: 'numeric'
              })}
              </h2>
            </section>
            <section className="arrival">
              <h1> Destino: {flight.arrival.iata}</h1>
              <h2> Data-hora chegada:
                {new Date(flight.arrival.scheduled).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: 'numeric',
                    minute: 'numeric'
                  })}
                </h2>
            </section>

          </div>
        ))
      }


    </main>
  )
}


export const getServerSideProps = async () => {

    let limit = 10
    let departure = "CWB"
    let arrival = "GRU"

    //const result = await fetch(`${process.env.FLIGHT_ENDPOINT}&limit=${limit}&dep_iata=${departure}&arr_iata=${arrival}`);
    const fetchData = await result.json();
    console.log(fetchData) 

    const flights = fetchData.data.map(flight => {
      return{

          flight_date: flight.flight_date,
          flight_status: flight.flight_status,
          departure: {
            airport: flight.departure.airport,
            iata: flight.departure.iata,
            scheduled: flight.departure.scheduled,
          },
          arrival: {
            airport: flight.arrival.airport,
            iata: flight.arrival.iata,
            scheduled: flight.arrival.scheduled,
          },
          flight: {
            number: flight.flight.number,
            airline_name: flight.airline.name      
        }
      }
    })
  return{
    props:{
      flights
    }
  }
}

/*
const [flight, setFlight] = useState(
  {
    "flight_date": "2021-10-28",
    "flight_status": "landed",
    "departure": {
      "airport": "Afonso Pena International Airport",
      "timezone": "America/Sao_Paulo",
      "iata": "CWB",
      "icao": "SBCT",
      "terminal": "",
      "gate": "5",
      "delay": "",
      "scheduled": "2021-10-28T06:30:00+00:00",
      "estimated": "2021-10-28T06:30:00+00:00",
      "actual": "2021-10-28T06:39:00+00:00",
      "estimated_runway": "2021-10-28T06:39:00+00:00",
      "actual_runway": "2021-10-28T06:39:00+00:00"
    },
    "arrival": {
      "airport": "Aeroporto Internacional Guarulhos",
      "timezone": "America/Sao_Paulo",
      "iata": "GRU",
      "icao": "SBGR",
      "terminal": "2",
      "gate": "",
      "baggage": "",
      "delay": "",
      "scheduled": "2021-10-28T07:45:00+00:00",
      "estimated": "2021-10-28T07:45:00+00:00",
      "actual": "2021-10-28T07:27:00+00:00",
      "estimated_runway": "2021-10-28T07:27:00+00:00",
      "actual_runway": "2021-10-28T07:27:00+00:00"
    },
    "airline": {
      "name": "Air Europa",
      "iata": "UX",
      "icao": "AEA"
    },
    "flight": {
      "number": "2640",
      "iata": "UX2640",
      "icao": "AEA2640",
      "codeshared": {
        "airline_name": "gol",
        "airline_iata": "g3",
        "airline_icao": "glo",
        "flight_number": "1127",
        "flight_iata": "g31127",
        "flight_icao": "glo1127"
      }
    },
    "aircraft": "",
    "live": ""
  },
  {
    "flight_date": "2021-10-28",
    "flight_status": "scheduled",
    "departure": {
      "airport": "Afonso Pena International Airport",
      "timezone": "America/Sao_Paulo",
      "iata": "CWB",
      "icao": "SBCT",
      "terminal": "",
      "gate": "",
      "delay": "",
      "scheduled": "2021-10-28T14:10:00+00:00",
      "estimated": "2021-10-28T14:10:00+00:00",
      "actual": "",
      "estimated_runway": "",
      "actual_runway": ""
    },
    "arrival": {
      "airport": "Aeroporto Internacional Guarulhos",
      "timezone": "America/Sao_Paulo",
      "iata": "GRU",
      "icao": "SBGR",
      "terminal": "2",
      "gate": "",
      "baggage": "",
      "delay": "",
      "scheduled": "2021-10-28T15:10:00+00:00",
      "estimated": "2021-10-28T15:10:00+00:00",
      "actual": "",
      "estimated_runway": "",
      "actual_runway": ""
    },
    "airline": {
      "name": "Itapemirim Transportes Aéreos",
      "iata": "8I",
      "icao": "IPM"
    },
    "flight": {
      "number": "5314",
      "iata": "8I5314",
      "icao": "IPM5314",
      "codeshared": ""
    },
    "aircraft": "",
    "live": ""
  }
)*/