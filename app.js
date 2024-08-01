// // Question No. 1
// var arr = []
// console.log (arr)

// Question No. 2
// var arr = new Array ()
// console.log (arr)

// Question No. 3
// var arr = ['a','b','c','d','e']
// console.log (arr)

// Question No. 4
// var arr = [1,2,3,4,5]
// console.log (arr)

// Question No.5 
// var arr = [true , false , true]
// console.log (arr)

// Question No. 6
// var arr = [true , 'Muhammad', 3]
// console.log (arr)

// Question No.7
// var arr = ['mobilink', 'ufone' , 'ptcl']
// console.log (arr)

// Question No.8 
// var arr = ['SSC','HSC','BCS','BS','BCOM','MS','M.PHILL','PhD']
// for (var i = 0; i < arr.length; i++) {
//     var a = i + 1
//     console.log (a +') '+ arr[i])
// }

// Question No.9
// var arr = ['Avengers: Age of Ultron', 'Spectre', 'Jurrasic World','Inside Out']
// for (var i = 0; i < arr.length; i++) {
//     var a = i + 1
//     console.log (a +') '+ arr[i])
// }
// console.log ('Length of Array is '+arr.length)

// Question No. 10
// var arr = ['alto', 'corolla','Vagon R']
// console.log (arr.indexOf('alto'))
// console.log (arr[0])
// console.log (arr.indexOf('Vagon R'))
// console.log (arr[2])

// Question No. 11
// var studentNames = ['Talal', 'Abid', 'Usama']
// var talalScore = [0 , 85 , 55 , 65 , 75]
// var abidScore = [10 , 55 , 65 , 75 , 95]
// var usamaScore = [95 , 90 , 65 , 85 , 65]
// var totalMarks = 500;
// var talalTotal = talalScore [0]
// var abidTotal = abidScore [0]
// var usamaTotal = usamaScore[0]
// for (var i = 1; i < 5; i++) {
//     talalTotal += talalScore [i]
//     abidTotal += abidScore [i]
//     usamaTotal += usamaScore [i]  
// }
// console.log ('Score of '+studentNames[0]+' is '+talalTotal+'. Percentage: '+talalTotal/totalMarks * 100 + '%')
// console.log ('Score of '+studentNames[1]+' is '+abidTotal+'. Percentage: '+abidTotal/totalMarks * 100 + '%')
// console.log ('Score of '+studentNames[2]+' is '+usamaTotal+'. Percentage: '+usamaTotal/totalMarks * 100 + '%')

// Question No. 12
var arr = ['red','orange','green','purple','brown']
var beginningColor = prompt ('Enter color you want to add to the beginning')
arr.unshift (beginningColor)
console.log (arr)
var endColor = prompt ('Enter color you want to add to the end')
arr.push (endColor)
console.log (arr)
arr.unshift('mergenda','black')
console.log (arr)
