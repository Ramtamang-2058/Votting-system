import {useState,useEffect} from 'react';

const fetchURL = async(URL) => {
    let data,loading,dataIndex;
    try{
        let response = await fetch(URL);
        let newData = await response.json();
        if(!response.ok){
                throw Error('Failed fetch no such URL found!');
        }
        console.log(newData);
                
        dataIndex=newData.count;           
        data=newData;
        loading=false;
    }catch(err){
        alert(err.message);
    }

    return {data,loading,dataIndex};
}
const postFetchURL = (URL,data) => {
    
    const fetchData=async()=>{
        try {
            const config = {
                method: 'POST',
                body: data
            }
            const response = await fetch(URL, config);
            //const json = await response.json()
            if (response.ok) {
                alert('Success!');
                return response;
            } else {
                alert('Could not connect to server!');
            }
        }catch(err){
            alert(err.message);
        }
    }
    fetchData();

}
 
export {fetchURL,postFetchURL};