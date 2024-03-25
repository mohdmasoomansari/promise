// console.log('Hello jiiii!!');
// console.log('Hello kaise h aap!!');




                        // Promise - 1



// const meraPromise = new Promise(function(resolve,reject){
//     // Do an async task

//     setTimeout(function(){
        
//         console.log('mera Promise');
//         resolve();
//         console.log('Hello');                 // Jb mera promise puri trh resolve ho jaega tbhi then()
//     }, 2000)                                  // Method execute hoga
// });

// meraPromise.then(function(){
//     console.log('Hello jee');
// })



                        // Promise-2



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Kinza');
//         resolve();
//     }, 2000)
// })
// .then(function(){
//     console.log('Aena');
// })



                       // Promise - 3



// let meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username : 'Masoom', email : 'masoomansari09875@gmail.com'})
//         // console.log('Helllooooo');
//     }, 2000)
// })
// meraPromise.then(function(user){
//     console.log(user);
// })



                          // Promise - 4



// const meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;

//         if(!error){
//             resolve({username : 'Mohd' , pass : '123'});
//         }
//         else{
//             reject('Error : something went wrong');
//         }
//     }, 2000)
// })

// const username = meraPromise.then(function(user){
//     console.log(user);
//     return user.username
// })
// console.log(username);


                                                     // Chaining concept

// meraPromise
// .then(function(user){
//     console.log(user);
//     return user.username;
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log('promise is either resolve or reject');
// })




                                        // Promise - 5




// const meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;

//         if(!error){
//             resolve({Sub : 'Math, Science, History', Period : '1, 2, 3'});
//             console.log('Heeeeellllooo');
//         }
//         else{
//             reject('Error : Showing error');
//         }
//     }, 2000)
// })

// async function consumemeraPromise(){
//     try{
//         const res = await meraPromise;
//         console.log('eeeeewwww');
//         console.log(res);
//         console.log('Kinzuuuuuu');
//         console.log(res.Sub);
//         console.log(res.Period);
//     }
//     catch(error){
//         console.log(error);
//     }
//     finally{
//         console.log('ABCD');
//     } 
// }
// consumemeraPromise();                           // Call or Invoke








                                  // FETCH 

                                  


//  async function abc(){
//     try{
//         let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         console.log(response);
//         let data = await response.json();
//         console.log(data);
//     }
//     catch(e){
//         console.log(e);
//     }
//     finally{
//         console.log('xyzzzzz');
//     }
// }
// abc();


// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(function(response){
//     console.log(response);
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log('Aeeeeeenaaaaaaaaaaaaaa');
// })







