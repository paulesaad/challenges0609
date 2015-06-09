// write a function on the Array prototype 
// called groupBy(callback) the takes a callback 
// function. For each item in groupBy, callback's 
// arguments will be (value, index, array).
// 
// The value returned by the callback becomes the 
// key for the original value in a new collection.
// 
// i.e. 
// 
// [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
//      return (v%2 === 0) ? 'even' : 'odd'
// })
// 
// //--> { odd: [1,3,5,7,9], even: [2,4,6,8,10] }

Array.prototype.groupBy = function(callback){
    return this.reduce(function(a, v, i, arr){
    	if (!a[callback(v, i, arr)]){
    		return a[callback(v, i, arr)] = [v]
    	} else{
    		return a[callback(v, i, arr)].push(v)
    	}
    }, {})
}

// var grouped = [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
//      return (v%2 === 0) ? 'even' : 'odd'
// })

// console.log(grouped)

//if callback resolves to even, push value to even array
//if callback resolves to odd, push value to odd array