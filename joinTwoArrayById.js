  let joinById = function(arr1, arr2) {
    let memo = {};

    arr1.concat(arr2).forEach((item)=>{
        if(memo[item.id]){
            Object.assign(memo[item.id], item)
        }else {
            memo[item.id] = item;
        }
    })

    return Object.values(memo);
  }

  let arr1 =[
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
];
let arr2 =[
    {"id": 3, "x": 5}
]

let arr3 =[
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]

console.log(joinById(arr1, arr2));
 // [{"id": 1, "x": 1}, {"id": 2, "x": 9}, {"id": 3, "x": 5}]

 console.log(joinById(arr3, arr2));