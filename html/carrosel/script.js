const carrossel = document.querySelector('.carrossel');
const carrosselItems = document.querySelectorAll('.carrossel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let itemWidth = carrosselItems[0].offsetWidth + 15; // Largura do item + gap

// Duplicar o primeiro e último item para o efeito de "espelho"
const firstClone = carrosselItems[0].cloneNode(true);
const lastClone = carrosselItems[carrosselItems.length - 1].cloneNode(true);

carrossel.appendChild(firstClone);
carrossel.insertBefore(lastClone, carrosselItems[0]);

const moveToIndex = (index) => {
    carrossel.style.transition = 'transform 0.4s ease-in-out';
    carrossel.style.transform = `translateX(${-index * itemWidth}px)`;
    currentIndex = index;
};

// Próximo item
nextBtn.addEventListener('click', () => {
    if (currentIndex >= carrosselItems.length) {
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
    if (currentIndex <= 0) {
        carrossel.style.transition = 'none'; // Desativa a transição para o loop
        currentIndex = carrosselItems.length - 1;
        carrossel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
        setTimeout(() => {
            moveToIndex(currentIndex - 1);
        }, 20); // Pequeno delay para ativar o loop suavemente
    } else {
        moveToIndex(currentIndex - 1);
    }
});
