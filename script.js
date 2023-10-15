const btn= document.querySelector("button");
const logoutChannel= new BroadcastChannel('logoutChannel');
const dataChannel= new BroadcastChannel("dataChannel");

fetch("http://worldtimeapi.org/api/timezone/Etc/UTC")
.then(res=> res.json())
.then(data =>{
dataChannel.postMessage(data);
handleDataUpdate(data);
})
btn.addEventListener("click", ()=>{
    handleLogout();
    logoutChannel.postMessage('logout');
})
logoutChannel.addEventListener('message',(event)=>{
    handleLogout();
})
dataChannel.onmessage=(event)=>{
    handleDataUpdate(event.data);
}
function handleLogout(){
    console.log("Logging out...");
}
function handleDataUpdate(data){
    console.log(data);
}