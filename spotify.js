
 let songIndex = 0;
 let audioElement = new Audio('Besharam Rang(PagalWorld.com.se).mp3');
 let masterPlay = document.getElementById('masterPlay');
 let myProgressBar = document.getElementById('myProgressBar')
 let gif = document.getElementById('gif')
 let songItems = Array.from(document.getElementsByClassName('songItems'))
let songs = [
    {songName: "beshram rang", filePath: "Besharam Rang(PagalWorld.com.se).mp3", coverPath: "https://images.news18.com/ibnkhabar/uploads/2022/12/Pathan-Besharam-Rang-Song-167117561216x9.jpg",},
    {songName: "Jhoome jo Pathaan", filePath: "Jhoome Jo Pathaan(PagalWorld.com.se).mp3", coverPath: "https://static.india.com/wp-content/uploads/2022/12/besharam-rang-song.jpg",},
    {songName: "Manike", filePath: "Manike(PagalWorld.com.se).mp3", coverPath: "https://i.ytimg.com/vi/p8XVvKYlo7E/maxresdefault.jpg",},
    {songName: "Maan meri jaan", filePath: "Maan Meri Jaan(PagalWorld.com.se).mp3", coverPath: "https://c.saavncdn.com/353/O-Meri-Jaan-Hindi-2018-20200109160404-500x500.jpg",},
    {songName: "Dewaane Ham nahi", filePath: "Dewaane Hum Nahi Hote Deewani Raat Aati Hai(PagalWorld.com.se).mp3", coverPath: "https://images.unsplash.com/photo-1521417531039-75e91486cc40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80",},
    
]
songItems.forEach((element) => {
    element.getElementByTagName('img')[0].src =songs[0].coverPath;
    element.getElementsByClassName('songname')[0].innerText =songs[0].songName;
});
// handle play/pouse click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
      gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play'); 
        gif.style.opacity = 0;
    }
})
// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
 const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
 }
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src ="Jhoome Jo Pathaan(PagalWorld.com.se).mp3"
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause'); 
        
         
    })

       

    
})