import { useParams } from "react-router-dom";
import FicheEnchereComponent from "../components/FicheEnchereComponent"

const FicheEnchere = () => {
    const id = useParams();

    return (
        <div>
            <FicheEnchereComponent id={id} />
        </div>
    );
}

export default FicheEnchere;