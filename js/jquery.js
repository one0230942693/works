
/* ============= header 點擊 logo 跳回首頁 ================= */

function logoClick(){
  window.location.assign("./main.html");
}

/* ============= 點擊至drinks.html ================= */

function drinksClick(){
  window.location.assign("./drinks.html");
}

/* ============= 點擊至about.html================= */

function aboutClick(){
  window.location.assign("./about.html");
}

/* ============= 點擊至new.html  ================= */

function newClick(){
  window.location.assign("./store.html");
}

/* ============= 點擊至new.html  ================= */

function storeClick(){
  window.location.assign("./store.html");
}

/* ============= 點擊至facebook  ================= */

function fbClick(){
  window.location.assign("https://www.facebook.com/");
}




/* ============= 點擊 搜尋的icon ================= */

let input_search_open = document.getElementsByClassName("input_search")[0];
let input_close_icon = document.getElementsByClassName("input_search_i")[0];
function InputsearchOpen(){
  input_close_icon.style.display = "block";
  input_search_open.style.display = "block";
  input_search_open.style.animation = "inputsearch_Open 1s 1";
  input_search_open.style.width = "400px";
}

/* ============= 點擊 關閉搜尋的icon ================= */

let input_search_close = document.getElementsByClassName("input_search")[0];
function InputsearchClose(){
  input_search_close.style.animation = "inputsearch_Close 1s 1";
  input_search_open.style.width = "0";
  input_search_close.style.display = "none";
  input_close_icon.style.display = "none";
}

/* ============= 點擊 漢堡的icon ================= */

let component_header_text = document.getElementsByClassName("component_header_text")[0];
function component_header_text_Open(){
  component_header_text.style.display = "block";
}

/* ============= 點擊 關閉漢堡的icon ================= */

function component_header_text_Close(){
  // window.location.href=window.location.href; 
  // window.location.reload; 
  component_header_text.style.display = "none";
}

function windowload() {
  if(window.outerWidth > 1200){
      component_header_text.style.display = "block";
  }else{
      component_header_text.style.display = "none";
  }

}


/*================================== jquery開始 =================================*/ 


$(function () {
    //當滾動條的位置處於距頂部100像素以下時，跳轉鏈接出現，否則消失
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $(".main_component_up").fadeIn(500);
                $(".fa-chevron-down").fadeOut(500);
            }
            else {
                $(".fa-chevron-down").fadeIn(500);
                $(".main_component_up").fadeOut(500);
            }
        });
        //當點擊跳轉鏈接后，回到頁面頂部位置
        $(".main_component_up").click(function () {
            $('body,html').animate({ scrollTop: 0 }, 500); //1000代表1秒時間回到頂點
            return false;
        });
    });
});

