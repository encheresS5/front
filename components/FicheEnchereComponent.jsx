import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { getURL } from "../models/sendRequest";
import { Button, Carousel, Modal } from "react-bootstrap";

const FicheEnchereComponent = (id) => {
    const [enchere, setEnchere] = useState();
    const [gagnant, setGagnant] = useState();
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);

    const [montant, setMontant] = useState();
    const [erreur, setErreur] = useState();
    const [reussi, setReussi] = useState();

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        setLoading(true);
        axios.get(getURL('/encheres/' + id.id.idEnchere))
            .then(response => {
                setEnchere(response.data);
                setLoading(false);
            });
    }, []);

    /* useEffect(() => {
        setLoading(true);
        axios.get(getURL('/encheres/' + id.id.idEnchere + '/photo'))
            .then(response => {
                setPhoto(response.data);
                setLoading(false);
            });
    }, []); */

    useEffect(() => {
        setLoading(true);
        axios.get(getURL('/encheres/' + id.id.idEnchere + '/gagnant'))
            .then(response => {
                if (response.data.data == null) {
                    console.log(response.data.data);
                    setLoading(true);
                } else {
                    setGagnant(response.data.data);
                    setLoading(false);
                }
            });
    }, []);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var surenchere = {
        idEnchere: id.id.idEnchere,
        montant: montant,
        token: localStorage.getItem('user_token')
    }

    const rencherir = (e) => {
        e.preventDefault();
        axios.post(getURL('/mises/miser'), surenchere)
            .then(response => {
                if (response.data.message == null) {
                    setReussi(response.data.data);
                    setMontant(null);
                    handleClose();
                    setTimeout(() => { window.location.reload(); }, 1000);
                } else {
                    setErreur(response.data.message);
                }
            });
    }

    const img1 = "";
    const img2 = "";
    const img3 = "";

    const [img, setImage] = useState(img1);

    const image = (e) => {
        setImage(e.target.src);
    }

    return (
        <div>

            {loading ? (
                <div>
                    <p>Loading...</p>
                    <p>Reload if it take time</p>
                </div>
            ) : (
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">
                            <div className="card mb-3">
                                <img className="card-img img-fluid" src={img} id="product-detail" />
                            </div>
                            <div className="row">
                                {/* <Carousel activeIndex={index} onSelect={handleSelect} indicators="false" variant="dark">
                                    {photos.map((photo) => (
                                        <Carousel.Item>
                                            <div className="row">
                                                <div className="col-4">
                                                    <img onClick={image} className="card-img img-fluid" src={photo.photos[0]} />
                                                </div>
                                                <div className="col-4">
                                                    <img onClick={image} className="card-img img-fluid" src={photo.photos[1]} />
                                                </div>
                                                <div className="col-4">
                                                    <img onClick={image} className="card-img img-fluid" src={photo.photos[2]} />
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    ))}
                                </Carousel> */}
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5">
                            <div className="card text-start">
                                <div className="card-body">
                                    <h1 className="h2"><strong>{enchere.produit.nomProduit}</strong></h1>
                                    <p className="h3 py-2 mt-3">Prix de depart: <strong className="text-primary">{enchere.prix_min_enchere} Ar</strong></p>

                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>Categorie:</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="text-muted"><strong>{enchere.produit.categorie.libelle}</strong></p>
                                        </li>
                                    </ul>

                                    <h5>Description:</h5>
                                    <p>{enchere.description}</p>

                                    <h5>Details:</h5>
                                    <ul className="list-unstyled pb-3 mb-5">
                                        <li><h6><strong>Date Debut:  </strong><i>{enchere.dateenchere}</i></h6></li>
                                        <li><h6><strong>Durée:  </strong><i>{enchere.duree} h</i></h6></li>
                                    </ul>

                                    <p className="h3 py-2">Mise gagnante: <strong className="text-success">{gagnant ? gagnant.montant : ""} Ar</strong></p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>Nom du gagnant actuel:</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p><strong>{gagnant ? gagnant.utilisateur.nom + " " + gagnant.utilisateur.prenoms : ""}</strong></p>
                                        </li>
                                    </ul>
                                    <p className="h4 py-2">Statut: <strong>{enchere.statut ? 'Finie' : 'Active'}</strong></p>
                                    {reussi ? <div className="rounded alert-success mb-4">
                                        Mise réussie</div> : <div></div>}
                                    <div className="row pb-3">
                                        <div className="col d-grid">
                                            <a onClick={handleShow} className="btn btn-success btn-lg"><strong>Rencherir</strong></a>
                                        </div>
                                        <Modal
                                            show={show}
                                            onHide={handleClose}
                                            backdrop="static"
                                            keyboard={false}
                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title><strong>Renchérir</strong></Modal.Title>
                                            </Modal.Header>
                                            <form className="row m-auto">
                                                <Modal.Body>
                                                    <div className="mt-2 text-center">
                                                        <label htmlFor="emailInput">Montant (Ar)</label>
                                                        <input type="number" min={0} className="form-control mt-3 mb-4" id="emailInput" onChange={(e) => setMontant(e.target.value)} placeholder="Saisir le montant de la surenchere" />
                                                    </div>
                                                    {erreur ? <div className="rounded alert-danger mb-4 text-center">
                                                        {erreur}</div> : <div></div>}
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button className="btn btn-secondary btn-lg" onClick={handleClose}>Close</Button>
                                                    <Button onClick={(e) => rencherir(e)} type="submit" className="btn btn-success btn-lg">Rencherir</Button>
                                                </Modal.Footer>
                                            </form>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FicheEnchereComponent;