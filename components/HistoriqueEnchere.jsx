import React from 'react';
import '../assets/img/apple-icon.png';
import '../assets/img/favicon.ico';
import '../assets/css/bootstrap.min.css';
import '../assets/css/templatemo.css';
import '../assets/css/custom.css';
import '../assets/css/fontawesome.min.css';
import { Link } from 'react-router-dom';

const HistoriqueEnchere = ({histoHistoriqueEnchere}) => {

    return(
        <div>
            <section class="bg-light">
                <div class="container py-5">
                <div class="row text-center py-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Historique des enchères</h1>
                    </div>
            </div>
                <div class="row">
                {histoHistoriqueEnchere.map((e) =>
                
                <div class="col-4 col-md-4 mb-4">
                    <div class="card h-100">
                        <a href="#">
                            <img src="data:image/png;base64,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" class="card-img-top" alt="..."></img>
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i class="text-muted text-left">reference enchere</i>
                                </li>
                                   
                                <li class="text-muted text-right">{e.idenchere}</li>
                            </ul>
                            <a href="shop-single.html" class="h2 text-decoration-none text-dark">{e.nomProduit}</a>
                            <p class="card-text">
                                {e.description}
                            </p>
                             Gagnant: {e.nomgagnant}
                            
                            <p class="card-text">
                              Prix de l'enchere:{e.montant}
                            </p>


                          <Link to={"/detailhistorique/"+e.idenchere}>
                            voir
                          </Link>
                           

                        </div>
                    </div>
                </div>
            
                )}
                </div>
                </div>
            </section>
        </div>
    );
}

export default HistoriqueEnchere;

