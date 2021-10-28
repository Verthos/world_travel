import { useEffect, useState } from "react";
import styles from "./currency.module.scss";

export function UpdatedCurrency(){



    const [currency, setCurrency] = useState(
        {
            EURBRL: {
                code: "",
                codein: "",
                name: "",
                high: "",
                low: "",
                varBid: "",
                pctChange: "",
                bid: "",
                ask: "",
                timestamp: "",
                create_date: ""
            },
            USDBRL: {
                code: "",
                codein: "",
                name: "",
                high: "",
                low: "",
                varBid: "",
                pctChange: "",
                bid: "",
                ask: "",
                timestamp: "",
                create_date: ""
            },
        }
    );

    useEffect(() => {
    const fetchData = async () => {
      try {
       const result = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL");
       const data = await result.json();
       setCurrency(data) 
      
      } catch(err) {
        console.log("ERRO FETCH CURRENCY")
      } 
    }

    fetchData()
    
  },[])


  return(
    <div class={styles.container}>
        <div className="coin">
            <span>{currency.USDBRL.code + " / " + currency.USDBRL.codein}</span>
            <h3>{currency.USDBRL.low}</h3>
        </div>
        <div className="coin">
            <span>{currency.EURBRL.code + " / " + currency.EURBRL.codein}</span>
            <h3>{currency.EURBRL.low}</h3>
        </div>
    </div>
  )

}


