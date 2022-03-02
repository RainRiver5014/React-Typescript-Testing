if (recipe == 'SPANISH') {
    sugar = 2 * bottom(base * SPANISH_FUDGE) + top(base * SPANISH_FUDGE) * 1.17;
} else if ((recipe == 'FRENCH') || (recipe == 'ENGLISH')) {
    if (recipe == 'FRENCH') {
        chocolate = 7;
    } else {
        sugar = 2 * bottom(base * ENGLISH_FUDGE) + top(base * ENGLISH_FUDGE) * 1.17;
    }
} else {
    amt = base;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
}
