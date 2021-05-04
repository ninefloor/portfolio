$(document).ready(function(){
  pcNav();
  mNav();
  // 화면 너비가 768px보다 커지면 m_nav 사라짐
  $(window).resize(function(){
    let width = window.outerWidth;
    if(width >= 768){
      m_nav.css({left: "-"+100+"%"});
    }
  })
  
})

let gnb = $(".nav>ul>li");
let lnb = $(".lnb");
let wing = $(".wing");

// PC nav 구현
function pcNav(){
  gnb.hover(
    function(){
      lnb.stop().fadeIn(600);
      wing.stop().slideDown(300);
    },
    function(){
      lnb.stop().fadeOut(200);
      wing.stop().slideUp(400);
    }
    )
}

let m_menu_btn = $(".m_menu_btn>i");
let m_nav = $("#m_nav");
let m_nav_bg = $(".m_nav_bg");
let m_nav_li = $(".m_menu_list>li");
// 모바일 메뉴 구현
function mNav(){
  // 햄버거 버튼 클릭 시 메뉴 표시
  m_menu_btn.click(function(){
    console.log("click")
    m_nav.animate({left: 0},300);
    m_nav_bg.fadeIn(300);
  })
  // 메뉴 레이어 바깥 클릭 시 사라짐
  m_nav_bg.click(function(){
    m_nav.animate({left: "-"+100+"%"},300);
    m_nav_bg.fadeOut(300);
  })
  // gnb 클릭 시 lnb 토글 표시
  m_nav_li.click(function(){
    $(this).find(".m_lnb").toggle(
      function(){
        $(this).find(".m_lnb").stop().slideToggle(300);
      }
    )
  })
}


