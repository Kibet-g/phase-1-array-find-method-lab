// code your solution here
function superbowlWin(record) {
    // Use find() to look for the object where result is "W"
    let winRecord = record.find(game => game.result === "W");
  
    // If a win is found, return the year, otherwise return undefined
    return winRecord ? winRecord.year : undefined;
  }
  