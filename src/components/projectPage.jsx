import { useParams } from "react-router-dom";

function projectPage() {
    const {name} = useParams();

    return (
        <div>
            <h1>project page</h1>
        </div>
    );
}

export default projectPage;