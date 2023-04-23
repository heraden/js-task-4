function suggestTable(numGuests) {
  let tableSize;
  if (numGuests <= 2) {
     tableSize = "small table";
  } else if (numGuests <= 4) {
     tableSize = "medium table";
   } else if (numGuests <= 8) {
     tableSize = "large table ";
  } else {
     return "Sorry, we are not able to accommodate your group in one table.";
   }
   return ${tableSize};
 }
