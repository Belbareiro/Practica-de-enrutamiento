import { useParams } from 'react-router-dom';

function hello() {
    const { hello } = useParams();

    return (
        <div>
            <h1>{hello} Hello</h1>
        </div>
    );
}

export default hello;