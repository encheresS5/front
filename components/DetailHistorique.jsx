import React from 'react';
import '../assets/img/apple-icon.png';
import '../assets/img/favicon.ico';
import '../assets/css/bootstrap.min.css';
import '../assets/css/templatemo.css';
import '../assets/css/custom.css';
import '../assets/css/fontawesome.min.css';

const DetailHistorique = ({ detailHistorique }) => {
  return (

    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Reference mise </th>
          <th scope="col">Utilisateur </th>
          <th scope="col">Montant mise</th>
          <th scope="col">Date mise</th>
        </tr>
      </thead>
      <tbody>
        {detailHistorique.map((e) =>
          <>
            <tr>
              <td>{e.idMise}</td>

              <td>{e.utilisateur.nom}</td>
              <td>{e.montant}</td>
              <td>{e.dateMise}</td>
            </tr>
          </>
        )}

      </tbody>
    </table>

  );
}

export default DetailHistorique;

