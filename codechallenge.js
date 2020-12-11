function addUp(n) {
    if (n < 1000) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
        sum += i;
    } else {
        window.alert("pick a number less than 1000)"
    }
    return sum;
  }