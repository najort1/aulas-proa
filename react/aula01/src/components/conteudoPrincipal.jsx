import { useState, useEffect } from 'react';

const Primeiro = () => {
    const [currentTime, setCurrentTime] = useState(dataAtual());

    function dataAtual() {
        const atual = new Date();
        const dia = atual.getDate();
        const mes = atual.getMonth() + 1;
        const ano = atual.getFullYear();
        const hora = atual.getHours();
        const min = atual.getMinutes();
        const seg = atual.getSeconds();
        return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(dataAtual());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1 className='horarioAtual'>{currentTime}</h1>
        </div>
    );
}

export default Primeiro;