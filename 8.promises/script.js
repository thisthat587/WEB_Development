// const promiseOne = new Promise(function(resolve,reject){
//     // DO an async task
//     // DB calls ,crytographgy, network
//     setTimeout(function(){
//         console.log("async task is complete");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('promise consumed')
// })

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("async created");
//         resolve();
//     }, 1000)

// }).then(function () {
//     console.log("async resolved")
// })

// const promiseTwo = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username :"piyush", email:"thisthat587@gmail.com"})
//     }, 1000)
// })

// promiseTwo.then(function (user) {
// console.log(user)
// })

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ username: "piyush", password: "1234" })
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//         resolve()
//     }, 1000)
// })


// promiseThree.then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username)
// })
// .catch(function (error) {
//     console.log(error);
// })
// .finally(()=>{
//     console.log("the promise is either resolved or either rejected");
// })

const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const error = true;
        if (!error) {
            resolve({ username: "javascript", password: "1234" })
        } else {
            reject('ERROR: Js went wrong')
        }
        resolve()
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promisefive;
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive();
