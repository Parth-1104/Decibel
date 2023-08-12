console.log("welcome to Decibel");
let songIndex=0;
let audio =new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs= [
    
       {songName:"Cheque",filePath:"songs/1.mp3",coverPath:"covers/shubh.jpg"},
       {songName:"Cheque",filePath:"songs/1.mp3",coverPath:"covers/shubh.jpg"},
       {songName:"Cheque",filePath:"songs/1.mp3",coverPath:"covers/shubh.jpg"},
       {songName:"Cheque",filePath:"songs/1.mp3",coverPath:"covers/shubh.jpg"},
       {songName:"Cheque",filePath:"songs/1.mp3",coverPath:"covers/shubh.jpg"},
       {songName:"Cheque",filePath:"songs/1.mp3",coverPath:"covers/shubh.jpg"},
       {songName:"Cheque",filePath:"songs/1.mp3",coverPath:"covers/shubh.jpg"},
       {songName:"Cheque",filePath:"songs/1.mp3",coverPath:"covers/shubh.jpg"},
       {songName:"Cheque",filePath:"songs/1.mp3",coverPath:"covers/shubh.jpg"},
       
       /*{songName:"Parda",filePath:"songs/k18.mp3",coverPath:"covers/shubh.jpg"},
       {songName:"yadav brand",filePath: "songs/system.mp3",coverPath:"covers/ranveer.jpg"},
       {songName:"sang rahiyo",filePath: "songs/ranveer.mp3",coverPath:"covers/ranveer.jpg"},
       {songName:"desi balak",filePath: "songs/desi.mp3",coverPath:"covers/ranveer.jpg"},
       {songName:"ajnabee",filePath:"songs/ajnabee.mp3",coverPath:"covers/ranveer.jpg"},
       {songName:"heer ranjha",filePath:"songs/heer.mp3",coverPath:"covers/shubh.jpg"},
       {songName:"Cheque",filePath:"songs/1.mp3", coverPath:"covers/shubh.jpg"},
       {songName:"Cheque",filePath:"songs/1.mp3",coverPath:"covers/shubh.jpg"},*/
]
                   masterPlay.addEventListener('click', ()=> {
                        if(audio.paused||audio.currentTime<=0){
                        audio.play();
                        masterPlay.classList.remove('fa-play-circle');
                        masterPlay.classList.add('fa-pause-circle');
                        

                       // masterPlay.classList.add('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM7 6h2v8H7V6zm4 0h2v8h-2V6z"/></svg>');
                        gif.style.opacity=1;
                }
                        else{
                                audio.pause();
                                masterPlay.classList.remove('fa-pause-circle');
                                masterPlay.classList.add('fa-play-circle');
                               /* \\masterPlay.classList.remove('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path d="M2 6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2c1.886 0 2.828 0 3.414.586C10 3.172 10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414C8.828 22 7.886 22 6 22c-1.886 0-2.828 0-3.414-.586C2 20.828 2 19.886 2 18V6Z"/><path d="M14 6c0-1.886 0-2.828.586-3.414C15.172 2 16.114 2 18 2c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414C20.828 22 19.886 22 18 22c-1.886 0-2.828 0-3.414-.586C14 20.828 14 19.886 14 18V6Z" opacity=".5"/></g></svg>')
                                masterPlay.classList.add('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path fill-rule="evenodd" d="M23 12c0-1.035-.53-2.07-1.591-2.647L8.597 2.385C6.534 1.264 4 2.724 4 5.033V12h19Z" clip-rule="evenodd"/><path d="m8.597 21.614l12.812-6.967A2.988 2.988 0 0 0 23 12H4v6.967c0 2.31 2.534 3.769 4.597 2.648Z" opacity=".5"/></g></svg>')
                        */      gif.style.opacity=0;
                         
                        }})
                     

        audio.addEventListener('timeupdate',()=>{
        //updating seak bar 
        console.log('timeupdate');
        progress =parseInt((audio.currentTime/audio.duration)*100);
        console.log(progress);
        myProgressBar.value=progreess;

})
myProgressBar.addEventListener('change',()=>{
        audio.currentTime=myProgressBar.value*audio.duration/100;
})

/*
        let masterPlay=document.getElementById("masterPlay");
        function playMusic(){
            let audio=new Audio("1.mp3");
            audio.play()
        }
        masterPlay.addEventListener("click",playMusic);
        */
    songItem.forEach((element,i)=>{
        console.log(element,i)
        element.getElementsByTagName("img")[0].src=songs[i].coverPath;
        element.getElementsByclassName("songName")[0].innerText=songs[i].songName;

    }    )
    function myfunction(){
        let element=document.body;
        element.classList.toggle("dark-mode");
    }