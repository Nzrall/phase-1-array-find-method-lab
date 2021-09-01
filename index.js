const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

//  function superbowlWin(record, year, result) {
//      return (year, result = "1969")
//  }

// function supernowWin (record)



// function superbowlWin (record, ) {
//     record.find(Element => Element === "W");
//     return record.find(result => result === "W" )
// }
function superbowlWin(record) {
    return record.result === "W"
}


console.log(record.find(superbowlWin).year);