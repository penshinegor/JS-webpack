import '../styles/main.scss';

for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log('Кратное 15: ' + i);
    }
    else if (i % 5 == 0) {
        console.log('Кратное 5: ' + i);
    }
    else if (i % 3 == 0) {
        console.log('Кратное 3: ' + i);
    }
}