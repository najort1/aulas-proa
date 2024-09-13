// Função genérica para configurar carrossel
const setupCarrossel = (prevBtnId, nextBtnId, carrosselId) => {
    const carrossel = document.querySelector(carrosselId);
    const carrosselItems = carrossel.querySelectorAll('.carrossel-item');
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    
    let currentIndex = 0;
    const itemWidth = carrosselItems[0].offsetWidth + 15; // Largura do item + gap

    // Duplicar o primeiro e último item para o efeito de "espelho"
    const firstClone = carrosselItems[0].cloneNode(true);
    const lastClone = carrosselItems[carrosselItems.length - 1].cloneNode(true);

    carrossel.appendChild(firstClone);
    carrossel.insertBefore(lastClone, carrosselItems[0]);

    const moveToIndex = (index) => {
        carrossel.style.transition = 'transform 0.8s ease-in-out';
        carrossel.style.transform = `translateX(${-index * itemWidth}px)`;
        currentIndex = index;
    };

    // Próximo item
    nextBtn.addEventListener('click', () => {
        console.log(currentIndex)
        
        if (currentIndex > 10) {
            carrossel.style.transition = 'none'; // Desativa a transição para o loop
            currentIndex = 0;
            carrossel.style.transform = `translateX(0px)`;
            setTimeout(() => {
                moveToIndex(currentIndex + 1);
            }, 20); // Pequeno delay para ativar o loop suavemente
        } else {
            moveToIndex(currentIndex + 1);
        }
    });

    // Item anterior
    prevBtn.addEventListener('click', () => {
        console.log(currentIndex)

        if (currentIndex <= 0) {
            return;
        } else {
            console.log(currentIndex + " - 1")
            moveToIndex(currentIndex - 1);
        }
    });
};

// Configurar o primeiro carrossel
setupCarrossel('prevBtn1', 'nextBtn1', '#filmes > div > div:nth-child(1) > div');

// Configurar o segundo carrossel
setupCarrossel('prevBtn2', 'nextBtn2', '#filmes > div > div:nth-child(2) > div');
