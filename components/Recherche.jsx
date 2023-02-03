import React, { Component } from 'react';
import '../assets/img/apple-icon.png';
import '../assets/img/favicon.ico';
import '../assets/css/bootstrap.min.css';
import '../assets/css/templatemo.css';
import '../assets/css/custom.css';
import '../assets/css/fontawesome.min.css';
import { useItems } from '../models/sendRequest';

const Recherche = () => {
    
    const {item, error} = useItems("/categories");

    function rechercher(e){
    e.preventDefault();
    let form = new FormData(document.getElementById("form"));
    if(form.get("prix") == ""){
        form.set("prix",0);
    }
    let data = Object.fromEntries(form.entries());
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://gestionencherews-production.up.railway.app/encheres/search"+"?motcle="+data.motcle+"&daty="+data.daty+"&prix="+data.prix+"&status="+data.status+"&categorie="+data.categorie);
    xhr.setRequestHeader("Accept","application/json");
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.onreadystatechange = function(){

        if(this.readyState === 4 && this.status === 200){
            let response = this.responseText;

            if(response != null){
                //alert(response);
                
                var val = JSON.parse(response);
                document.getElementById("val").innerHTML = "";
                //console.log(val);
                for( var i=0; i<val.data.length; i++){
                    var prix = val.data[i].prix_min_enchere;
                    var nomProduit = val.data[i].produit.nomProduit;
                    var description = val.data[i].description;
                    console.log(description);
                    document.getElementById("val").innerHTML += "<div style={{ background: 'white' }}>"+"<div class='card h-100'>"+"<a href='shop-single.html'>"+"</a>"+"<ul class='list-unstyled d-flex justify-content-between'>"+"<li><i class='text-warning fa fa-star'>"+"</i><i class='text-warning fa fa-star'></i></li><li class='text-muted text-right'>"+prix+" ar</li></ul><a href='shop-single.html' class='h2 text-decoration-none text-dark'>"+nomProduit+"</a> <p class='card-text'>"+description+"</p>   </div></div>";

                }
                
            } else {
                alert("tsy mety");
            }
        }
    };
    xhr.send();
    }
    
    return(
        <div>
            <section class="bg-light">
                <div class="container py-5">
                <div class="row text-center py-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Recherche avancée</h1>
                    </div>
            </div>

            <div class="nav-icon position-relative text-decoration-none">
                            <div class="modal-dialog modal-lg" role="document">
                                <form action="http://localhost:1234/encheres/search" method="get" class="modal-content modal-body border-0 p-0" id="form">
                                    <div class="input-group mb-2" >
                                        <input type="text" class="form-control" id="inputModalSearch" name="motcle" placeholder="mot clé..." ></input>
                                        <button onClick={(e) => rechercher(e)} type="submit" class="input-group-text bg-success text-light">
                                            <i class="fa fa-fw fa-search text-white"></i>
                                        </button>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: "10px", gridRowGap: "10px", height: "10vh" }}>
             
                                    <div>
                                        Date: <input type="date"  name="daty"></input>
                                    </div>
                                    <div>
                                        Prix: <input type="text"  name="prix" ></input>
                                    </div>
                                    <div>
                                    Status:
                                    <select name="status">
                                    
                                            <option value="true">Terminé</option>
                                            <option value="false">En cours</option>
                                        
                                    </select>
                                    </div>
                                    <div>
                                    Categorie:
                                    <select name="categorie">
                                    {item.map((e) =>
                                        <option value={e.idCategorie} >{e.libelle}</option>
                                    )}
                                    </select>
                                    </div>
                                    </div>
                                </form>
                            </div>
                            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridColumnGap: "100px", gridRowGap: "100px", height: "100vh" }} id="val">
             
            </div>
                </div>
            </section>
        </div>
    );
}

export default Recherche;