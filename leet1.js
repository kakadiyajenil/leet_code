function isSquare(n) {
    let root = Math.sqrt(n);
    return (root * root) === n;
  }
  
  function nSquares(n, dp) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (dp[n] !== -1) return dp[n];
    
    let mn = Infinity;
    for (let i = n; i > 0; i--) {
      if (isSquare(i)) {
        mn = Math.min(mn, 1 + nSquares(n - i, dp));
      }
    }
    
    return dp[n] = mn;
  }
  
  function numSquares(n) {
    let dp = new Array(10001).fill(-1);
    return nSquares(n, dp);
  }
  