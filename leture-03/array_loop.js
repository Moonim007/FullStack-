const names=['Justin','Sarah','Christopher'];

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

names.forEach(names => {
    console.log(names);
})

function myFuntion(names) {
    console.log(names);
}

for (let name of names) {
    console.log(name);
}
