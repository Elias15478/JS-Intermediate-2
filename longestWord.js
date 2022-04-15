const str="May the force be with you";

//code for longest string

function longestWord(str) { 
    let newStr = str.split(" ");
    let longestWord = newStr[0].length;
    for(let i=0; i<newStr.length; i++){
        if(newStr[i].length > longestWord){
            
            longestWord = newStr[i].length;
        }
        }
        return longestWord;
        }console.log(longestWord(str));
        
    //code for shortest str
    function shortestWord(str) {
        var strArray = str.split(" ");  
        var shortestWord= strArray[0].length; 
        for(var i = 0; i < strArray.length; i++){
            if(strArray[i].length < shortestWord){   
                shortestWord = strArray[i].length;            
            }
        }
            return shortestWord;
}console.log(shortestWord(str));