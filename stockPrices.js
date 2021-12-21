 const best = stockPrices => {
     let maxDiff = 0;
     for(let i = 0; i < stockPrices.length; i++){
         for(let j = i + 1; j < stockPrices.length; j++){

            let diff = stockPrices[j] - stockPrices[i];
            
            if(diff > maxDiff){
                maxDiff = diff;
            }

         }
     }
     return (maxDiff === 0) ?  0 :  maxDiff;
 }

 console.log(best([2, 3, 10, 6, 4, 8, 1]));