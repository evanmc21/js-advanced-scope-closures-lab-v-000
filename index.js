function produceDrivingRange(range) {
  return function(blocka, blockb) {
  let distance = parseInt(blockb) - parseInt(blocka);

    if (distance < range){
      return `within range by ${range - distance}`
    } else {
      return `${distance - range} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(amount) {
    return amount * percent;
  }
}
