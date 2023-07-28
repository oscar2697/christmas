let myDiv = document.getElementById('container');

function isTouchDevice(){
    try{
        document.createEvent('TouchEvent');
        return true;
    }catch (e){
        return false;
    }
}

const move = (e) =>{
    try{
        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    }catch (e){}

    myDiv.style.left = x - 160 + 'px';
    myDiv.style.top = y - 160 + 'px'; 
};
//Mouse
document-addEventListener('mousemove', (e) =>{
    move(e);
});
//Touch
document.addEventListener('touchmove', (e) => {
    move(e);
});