import '../assets/css/bootstrap.min.css'
import '../assets/css/templatemo.css'
import '../assets/css/custom.css'
import '../assets/css/fontawesome.min.css'
import { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { getURL } from '../models/sendRequest'


const LoginComponent = () => {
    const [email, setEmail] = useState('johndoe@example.com');
    const [password, setPassword] = useState('password123');
    
    const [erreur, setErreur] = useState();

    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();
        axios.post(getURL('/utilisateurs/login'),
            {
                email: email,
                password: password
            })
            .then(response => {
                if (response.data.message == null) {
                    localStorage.clear();
                    localStorage.setItem('user_token', response.data.data.token);
                    console.log(response.data.data);
                    sessionStorage.setItem('id', response.data.data.user.idUtilisateur);
                    navigate('/');
                    window.location.reload();
                } else {
                    setErreur(response.data.message);
                }
            }
            );
    }

    return (
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-lg-5 mt-5">
                    <div className="card mt-5">
                        <div className="card-body">
                            <div className="text-center mt-3 mb-3">
                                <h3>Connexion</h3>
                            </div>
                            <form className="row m-auto">
                                <div className="mb-3 text-start">
                                    <label htmlFor="emailInput">Email</label>
                                    <input type="text" className="form-control mt-1" id="emailInput" name="email"
                                        placeholder="Saisir votre adresse email" onChange={(e) => setEmail(e.target.value)} defaultValue="johndoe@example.com" />
                                </div>
                                <div className="mb-4 text-start">
                                    <label htmlFor="passwordInput">Password</label>
                                    <input type="password" className="form-control mt-1" id="passwordInput" name="password"
                                        placeholder="Saisir votre mot de passe" onChange={(e) => setPassword(e.target.value)} defaultValue="password123" />
                                </div>
                                { erreur ? <div className="rounded alert-danger mb-4 text center">
                                {erreur}</div> : <div></div>}
                                <div className="mb-4 text-center">
                                    <button onClick={(e) => login(e)} type="submit" className="btn btn-success btn-lg">Se Connecter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;