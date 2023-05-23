import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch =  (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const res = await makeRequest.get(url);
            
          setData(res.data.data)
        
          } catch (error) {
           setError(true)
          }
          setLoading(false)
        };
        fetchData();
      }, [url]);
      return {data, loading, error}
} 

/* const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true)
          const res = await axios.get(
           "http://localhost:1337/api" + url,
            {
              headers: {
                Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
              },
            }
          );
          
        setData(res.data.data)
      
        } catch (error) {
       setError(error)
        }
        setLoading(false)
      };
      fetchData();
    }, [url]);
} */
export default useFetch 