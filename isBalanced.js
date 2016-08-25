
var brackets='{[]}'


var isBalanced = function(string){
    var open = '([{'
    var closed = ')]}'
    var stack = []
    var totalOpen = {}
    var totalClosed = {}

    if(string.length%2 !== 0){
        return false
    }
    for (var i = 0; i < string.length; i ++){
        var character = string[i]
        
        if(character === '(' || character === '[' || character === '{'){
            if (totalOpen['openCount'] === undefined){
                totalOpen['openCount'] = 1
            }
            else{totalOpen['openCount'] += 1}
        }    
        if(character === ')' || character === ']' || character === '}'){
            if (totalClosed['closedCount'] === undefined){
                totalClosed['closedCount'] = 1
            }
            else{totalClosed['closedCount'] += 1}
        }   
    }
        
        if(totalOpen.openCount !== totalClosed.closedCount){
            return false
        }
       
    for (var i = 0; i < string.length; i++){
        if (string[i] === open[0] || string[i] === open[1]  || string[i] === open[2]){
            stack.push(string[i])
        }

        if ((string[i] === closed[0] || string[i] === closed[1]  || string[i] === closed[2]) && (open[closed.indexOf(string[i])] === stack[stack.length-1] ) ){
            stack.pop(string[i])
        }
    }
    
    return(stack.length === 0)
}

log(isBalanced(brackets))