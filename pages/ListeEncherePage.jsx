import React, { Component } from 'react';

import { useItems } from '../models/sendRequest';
import ListeEnchere from '../components/ListeEnchere';

const ListeEncherePage = ({}) => {
    
    var { item, error } = useItems("/encheres/enchereNonFinished");

    return(
        <div>
            <ListeEnchere encheres={item} />
        </div>
    );
}

export default ListeEncherePage;