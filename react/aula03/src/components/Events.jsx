import { useState } from 'react';

const Challange = () => {

    function capturarNumeros(){
        const num1 = parseInt(document.getElementById('num1').value); 
        const num2 = parseInt(document.getElementById('num2').value);
        return [num1, num2];
    }

    const [numero, setNumero] = useState(0);

    function handleClick(evento) {
        const tipo = evento.target.innerText;
        const [num1, num2] = capturarNumeros();
        switch (tipo) {
            case 'Somar':
                setNumero(num1 + num2);
                break;
            case 'Subtrair':
                setNumero(num1 - num2);
                break;
            case 'Multiplicar':
                setNumero(num1 * num2);
                break;
            case 'Dividir':
                setNumero(num1 / num2);
                break;
            default:
                break;
        }            
    }

    return (
        <>
            <h1>Desafio</h1>
            <div className="inputsNumeros">
                <input type="number" name="numero1" id="num1" placeholder='Digite o primeiro numero'/>
                <input type="number" name="numero2" id="num2" placeholder='Digite o segundo numero'/>
            </div>

            
            <div className="botoesAcoes">
                <button onClick={handleClick}>Somar</button>
                <button onClick={handleClick}>Subtrair</button>
                <button onClick={handleClick}>Multiplicar</button>
                <button onClick={handleClick}>Dividir</button>
                <h2>Resultado: {numero}</h2>
            </div>


        
        </>
    )
}

export default Challange;