let titleCase = "I'm a little tea pot";
let arr = titleCase.split(" ");
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
str = arr.join(" ");
console.log(str);
