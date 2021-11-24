const friends = [
    {fullname: 'Paul Lee', address: 'Bangkok, Thailand'},
    {fullname: 'Yoko Naree', address: 'Kyoto, Japan'},
];

function getFullName(name, surname) {
    return `${name} ${surname}`
}

async function getFriendName(name, surname, callbackFn) {
    return new Promise((resolve, reject) => {
        const fullname = callbackFn(name, surname) //callbackFn(name, surname);
        if(fullname === undefined) reject(new Error('cannot get fullname'))
        resolve(fullname);
    });
}

async function getAddress(fullname) {
    return new Promise((resolve, reject) => {
        let myFriend = friends.find( (friend) => friend.fullname.includes(fullname));
        if(myFriend === undefined) reject(new Error('your friend was not found'))
        resolve(myFriend.address);
    })
}

// 1. using promise.then() method
// getFriendName('Paul', 'Lee', getFullName)
//     .then((myFriendName) => {
//             console.log(myFriendName) 
//             return myFriendName
//     })
//     .then((friendFullName) => {
//             console.log(friendFullName);
//             getAddress(friendFullName)
//             .then((friendAddress) => {
//                 console.log(friendAddress)
//             })
//     })
//     .catch((err) => console.log(err));

// 2. using async/await
async function main() {
    const myFriendName = await getFriendName('Paul', 'Lee', getFullName);
    const myFriendAddr = await getAddress(myFriendName);
    console.log(myFriendAddr);
}

main();