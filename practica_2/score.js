function createScoreBoard() {
    let puntuacion = {
        'The Best Ever': 1000000
    }
    return puntuacion
}

function addPlayer(a, b, c) {
    a[b] = c;
    return a;
}

function removePlayer(a, b) {
    delete a[b]
    return a
}

function updateScore(a, b, c) {
    a[b] = a[b] + c
    return a
}

function applyMondayBonus(a) {
    for (const key in a) {
        a[key] = a[key] + 100
    }
    return a
}

function normalize(score) {
    return 2 * score + 10;
}

const params = { score: 400, normalizeFunction: normalize };

function normalizeScore(a) {
    a['score'] = a.normalizeFunction(a['score'])
    return a['score']
}