import { useState } from "react"

function useFetch(cb) {
  
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);

    const fn = async (...args : never) => {
        setLoading(true);
        setError(null);
        try{
            const response = await cb(...args);
            setData(response);
            setError(null);
            return response;
        }
        catch(err){
            setError(err);
        }
        finally{
            setLoading(false);
        }
    }

    return {fn, loading, data, error};
}

export default useFetch
