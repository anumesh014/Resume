var addFriend = document.querySelector("#add")
var iStatus = document.querySelector("h5")
var check = 0;

addFriend.addEventListener("click",function(){
    if(check == 0){
    iStatus.innerHTML = "Friends"
    iStatus.style.color="green" 
    addFriend.innerHTML= "Remove Friend"
    addFriend.style.color="black"
    addFriend.style.backgroundColor="#D8DADF"
    check++;
}else{
    iStatus.innerHTML = "Stranger"
    iStatus.style.color="red" 
    addFriend.innerHTML= "Add Friend"
    addFriend.style.color="white"
    addFriend.style.backgroundColor="#2176FF"
    check--;
}
})




// var remove = document.querySelector("#remove")
// remove.addEventListener("click",function(){
//     iStatus.innerHTML = "Stranger"
//     iStatus.style.color="Red" 

// })