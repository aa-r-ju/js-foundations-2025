const france = "france";
const paris = "paris";
const marsielle = france;

const vacationSpots = (spot1, spot2) => {
  if (spot1.length > spot2.length) {
    return spot1;
  }
  return spot2;
};
