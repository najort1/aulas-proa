const manipularCarrosel = (prevBtnId, nextBtnId, carrosselId) => {
    const carrossel = document.querySelector(carrosselId);
    const itensCarrosel = carrossel.querySelectorAll('.carrossel-item');
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    
    let indexAtual = 0;

    // Duplicar o primeiro e último item
    const primeiroItemClone = itensCarrosel[0].cloneNode(true);
    const ultimoItemClone = itensCarrosel[itensCarrosel.length - 1].cloneNode(true);

    carrossel.appendChild(primeiroItemClone);
    carrossel.insertBefore(ultimoItemClone, itensCarrosel[0]);

    const moveToIndex = (index) => {
        // Calcula o deslocamento somando as larguras dos itens anteriores
        let calculoDeslocamento = 0;
        for (let i = 0; i < index; i++) {
            calculoDeslocamento += itensCarrosel[i].offsetWidth + 15;  // Largura do item + gap
        }
    
        carrossel.style.transition = 'transform 0.8s ease-in-out';
        carrossel.style.transform = `translateX(-${calculoDeslocamento}px)`;
    
        indexAtual = index;
    };
    

    nextBtn.addEventListener('click', () => {
        console.log(indexAtual)
        
        if (indexAtual > 10) {
            indexAtual = 0;
            carrossel.style.transform = `translateX(0px)`;
            setTimeout(() => {
                moveToIndex(indexAtual + 1);
            }, 20);
        } else {
            moveToIndex(indexAtual + 1);
        }
    });

    prevBtn.addEventListener('click', () => {
        console.log(indexAtual)

        if (indexAtual <= 0) {
            return;
        } else {
            console.log(indexAtual + " - 1")
            moveToIndex(indexAtual - 1);
        }
    });
};

manipularCarrosel('prevBtn1', 'nextBtn1', '#filmes > div > div:nth-child(1) > div');
manipularCarrosel('prevBtn2', 'nextBtn2', '#filmes > div > div:nth-child(2) > div');
