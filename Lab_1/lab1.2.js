const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Matinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schuls',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze'
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1. Lặp mảng game.secored và in ra cầu thủ cùng số bàn thắng đã ghi
for (let i = 0; i < game.scored.length; i++) {
    console.log(`Goals ${i + 1}: ${game.scored[i]}`);
}

// 2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw': `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}