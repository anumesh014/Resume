var arr = [
    {dp: "https://images.unsplash.com/photo-1530981785497-a62037228fe9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1546108718-831a7b1f187f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {dp: "https://images.unsplash.com/photo-1470072508653-1be229b63562?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,story:"https://images.unsplash.com/photo-1469460340997-2f854421e72f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {dp: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1518518873111-6ca469aa4560?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {dp: "https://images.unsplash.com/photo-1601908765566-5c89070da2ce?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1473700216830-7e08d47f858e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    
]

var stories = document.querySelector("#stories")
var clutter = ""
arr.forEach(function(elem, idx){
   clutter += ` <div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div> `
})
document.querySelector("#stories").innerHTML = clutter

stories.addEventListener("click",function(dets){
    document.querySelector("#fullscreen").style.display="block"

    document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#fullscreen").style.display="none"
    },3000)
});