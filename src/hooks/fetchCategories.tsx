import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {
    const [state, setstate] = useState<any>({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        axios.get(url).then((res: any) => {
            const response = res.data;
            setstate({
                loading: false,
                error: null,
                response
            });
        }).catch((error:any) => {
            console.log('ERROR', error)
        });
    }, [url]);
    return state;
}