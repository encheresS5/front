import React from 'react';

import { useItems } from '../models/sendRequest';
import HistoriqueEnchere from '../components/HistoriqueEnchere';

const HistoriqueEncherePage = ({ }) => {
    const id = sessionStorage.getItem('id');

    var { item, error } = useItems("/encheresgagnant/enchereHistorique/" + id);

    return (

        <div>
            <HistoriqueEnchere histoHistoriqueEnchere={item} />
        </div>
    );
}

export default HistoriqueEncherePage;