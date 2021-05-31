//get all keys
const keys = document.querySelectorAll('.key')

//Play notes
function playNotes(event){
    let audiokeycode = getKeyCode(event)
    
    //type or pressed key
    let key = document.querySelector(`.key[data-key = "${audiokeycode}"]`)
    
    //if key exists
    const canFoundAnyKey = !key 
    if(canFoundAnyKey){
        return
    }
    //play audio
    playAudio(audiokeycode)
}

function getKeyCode(event){
    if(event.type === 'keydown'){
        keycode = event.keyCode 
    } else {
        keycode = event.target.dataset.key
    }
    return keycode
}

function playAudio(audiokeycode){
    let audio = document.querySelector(`audio[data-key = "${audiokeycode}"]`)
    audio.currentTime = 0;
    audio.play()
}

//click with mouse
keys.forEach(function(key){
    key.addEventListener("click", playNotes)
})

//key board type
window.addEventListener("keydown", playNotes)