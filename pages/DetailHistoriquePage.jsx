import React, { Component } from 'react';

import { useItems } from '../models/sendRequest';
import DetailHistorique from '../components/DetailHistorique';
import { useParams } from 'react-router-dom';

const DetailHistoriquePage = ({}) => {
    
    let{id} = useParams();

    var { item, error } = useItems("/mises/miseByIdenchere/"+id);

    return(
       
        <div>
            <DetailHistorique detailHistorique={item} />
        </div>
    );
}

export default DetailHistoriquePage;