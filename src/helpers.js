export const checkBudget = (budget, rest) => {
  let clase;

  if (budget / 4 > rest) {
    clase = "alert alert-danger"
  } else if (budget / 2 > rest) {
    clase = "alert alert-warning"
  } else {
    clase = "alert alert-success"
  }
  return clase
}