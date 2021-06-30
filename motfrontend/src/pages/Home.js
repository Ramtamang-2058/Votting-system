import React, { useContext } from 'react';
import { LanguageContext } from '../App';
const Home = () => {
    const language = useContext(LanguageContext);

    let homeData={
        'titleen':'eng title',
        'titlenp':'np title'
    }
    return ( 
        <>
        {homeData[`title${language}`]}
        
        </>
     );
}
 
export default Home;