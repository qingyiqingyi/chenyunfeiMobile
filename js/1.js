
//动态计算rem的换算比例
~function(desW){
    var winW = document.documentElement.clientWidth||document.body.clientWidth;
    document.documentElement.style.fontSize = winW/desW*100+"px"
}(320);

~function(){
    var step = 0, divList = null;
    var swp = new Swiper(".swiper-container",{
        loop:true,
        direction:"vertical",
        onSlidePrevEnd:function(){
            step--;
            change();
            if(step===0){
                step=9;
            }
        },
        onSlideNextEnd:function(){
            step++;
            change();
            if(step===10){
                step = 1;
            }
        }
    });
    function change(){
        divList = document.querySelectorAll(".swiper-slide");
        [].forEach.call(divList,function(curDiv,index){
            curDiv.id = index ===step?curDiv.getAttribute("trueId"):null;
        })
    }

}();
//音频自动播放
~function(){
    var audioBox = document.querySelector(".audio"),
        myAudio = audioBox.getElementsByTagName("audio")[0];
    //延时播放音频文件，先让其他的内容加载完成
    window.setTimeout(function () {
        myAudio.play();
        myAudio.addEventListener("canplay", function () {
            //->当音频可以播放的时候触发这个事件
            audioBox.style.display = "block";
            audioBox.className += " audioMove";
        }, false);
    }, 1000);


    //点击音乐图标，实现音频的暂停和播放
    audioBox.addEventListener("click",function(){
        if(myAudio.paused){
            myAudio.play();
            audioBox.className = "audio audioMove";
            return
        }
        //当前是播放的就暂停
        myAudio.pause();
        audioBox.className ="audio";
    },false)
}();




