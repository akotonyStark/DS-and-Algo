let arr = [3, 5, 7, 9, 12]

//version one
for (var i in arr) {
    if (arr[i] === 12) {
        console.log("Found:", arr[i] + " at postion ", i)
    }
}


//version two
for (var i in arr) {
    (arr[i] === 12) ? console.log("Found:", arr[i] + " at postion ", i): console.log("Not found")
}