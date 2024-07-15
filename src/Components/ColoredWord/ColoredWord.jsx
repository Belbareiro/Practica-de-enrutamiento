import { useParams } from 'react-router-dom';

function ColoredWord() {
    const { hello, color1, color2 } = useParams();

    return (
        <div
            style={{
                color: color1,
                backgroundColor: color2,
                padding: '20px',
            }}
        >
            <h1>{hello} the word is: hello</h1>
        </div>
    );
}

export default ColoredWord;