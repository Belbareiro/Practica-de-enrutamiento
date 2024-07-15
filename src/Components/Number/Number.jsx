import { useParams } from 'react-router-dom';

function Number() {
    const { num } = useParams();

    if (isNaN(num)) {
        return (
            <div>
                <h1>The number is not valid</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>The number is: {num}</h1>
        </div>
    );
}

export default Number;