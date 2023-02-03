import { useEffect, useState } from "react";
import axios from "axios";

function getURL(url_pattern) {
    const URL="https://gestionencherews-production.up.railway.app";
    return URL+url_pattern;
}

function useItems(url)
{
    const [item, setItem] = useState([]);
    const [error, setError] = useState(null);


    useEffect(function ()
    {
        axios.get(getURL(url))
            .then(function (response)
            {
                console.log("success");
                console.log(response);
                setItem(response.data.data);
            })
            .catch(function (err)
            {
                console.log("error");
                console.log(error);
                setError(err);
            })
    }, [getURL(url)]);

    return { item, error };
}

export function usePostItem(url,req_body) {
    const [item, setItem] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        axios.post(getURL(url),req_body).then((response)=>{
            setItem(response.data.data);
        }).catch((err)=>{
            setError(err);
        });
    },[getURL(url),req_body]);

    return {item,error};
}


function checkConnection(callback_success,callback_error,idAvion) {
    console.log("TOKEN="+localStorage.getItem('user_token'));
    let token=localStorage.getItem('user_token');    
    if (token==null) {
        callback_error();
        return;
    }
    
    axios.post(getURL('/users/check'), { token: localStorage.getItem('user_token') })
        .then(response => {
            console.log("YES");
            console.log(response.data);
            if (response.data.data!=null) {
                if (response.data.data==false) {
                    callback_error();    
                }else{
                    console.log("midotra ato foana ang");
                    
                    callback_success(idAvion);
                }
            } else {
                callback_error();
            }
        })
        .catch(error => {
            console.log(error);
        })
}

function deconnect(callback_deconnect) {
    let token=localStorage.getItem('user_token');
    if (token!=null) {
        console.log({ token: token });
        axios.post(getURL('/users/deconnect'), { token: token.toString() })
            .then((response) => {
                localStorage.removeItem('user_token');
                callback_deconnect();
            })
            .catch(error => {
                console.log(error);
            })
    }else{
        callback_deconnect();
    }
};

export {useItems,getURL,checkConnection,deconnect};