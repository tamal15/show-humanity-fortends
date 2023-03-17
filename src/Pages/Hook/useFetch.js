import { useEffect, useState } from 'react';

const useFetch = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('https://show-humanity-front-production.up.railway.app/')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [foods])
    return [foods, setFoods]
}

export default useFetch