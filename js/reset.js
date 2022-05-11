const hvwrap = document.getElementById('hoverwrap');
var navbtn = document.querySelectorAll('#nav li');
var hvbox = document.querySelectorAll('.hoverbox');
var hvtap1 = document.querySelector('.hovertap1');
var hvtap2 = document.querySelector('.hovertap2');
var hvtap3 = document.querySelector('.hovertap3');
var hvtap4 = document.querySelector('.hovertap4');
function hover_c1(){
    hvbox[0].childNodes[1].innerHTML = '항공권 예약';
    hvtap1.innerHTML = '<li><a href="sub_pass.html">' + '항공권 예매' + '</a></li>'+
                       '<li><a href="sub_pass.html">' + '최저가 간편조회' + '</a></li>'+
                       '<li><a href="sub_pass.html">' + '예약 안내' + '</a></li>'+
                       '<li><a href="sub_pass.html">' + '운임 안내' + '</a></li>';
    hvbox[1].childNodes[1].innerHTML = '예약 조회';
    hvtap2.innerHTML = '<li><a href="sub_pass.html">' + '예매 내역' + '</a></li>'+
                       '<li><a href="sub_pass.html">' + '항공권 구매 내역' + '</a></li>';
    hvbox[2].childNodes[1].innerHTML = '운항 정보';
    hvtap3.innerHTML = '<li><a href="sub_pass.html">' + '스케쥴 조회' + '</a></li>'+
                       '<li><a href="sub_pass.html">' + '출도착 조회' + '</a></li>';
    hvbox[3].childNodes[1].innerHTML = '빠른 메뉴';
    hvtap4.innerHTML = '<li><a href="sub_pass.html">' + '항공권 예매' + '</a></li>'+
                       '<li><a href="sub_pass.html">' + '예약 조회' + '</a></li>'+
                       '<li><a href="sub_pass.html">' + '체크인' + '</a></li>'+
                       '<li><a href="sub_pass.html">' + '항공편 현황' + '</a></li>';
    hvwrap.style.display = 'flex';
}
function hover_c2(){
    hvbox[0].childNodes[1].innerHTML = '수하물';
    hvtap1.innerHTML = '<li><a href="sub_baggage.html">' + '수하물 안내' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '운송 제한 물품' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '무료 수하물' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '위탁 수하물' + '</a></li>';
    hvbox[1].childNodes[1].innerHTML = '체크인';
    hvtap2.innerHTML = '<li><a href="sub_baggage.html">' + '사전 체크인' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '공항 체크인' + '</a></li>';
    hvbox[2].childNodes[1].innerHTML = '도움이 필요한 고객';
    hvtap3.innerHTML = '<li><a href="sub_baggage.html">' + '한가족 서비스' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '유아 동반 승객' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '몸이 불편한 승객' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '임산부 승객' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '반려동물 동반 승객' + '</a></li>';
    hvbox[3].childNodes[1].innerHTML = '빠른 메뉴';
    hvtap4.innerHTML = '<li><a href="sub_baggage.html">' + '항공권 예매' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '예약 조회' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '체크인' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '항공편 현황' + '</a></li>';           
    hvwrap.style.display = 'flex';
}
function hover_c3(){
    hvbox[0].childNodes[1].innerHTML = '탑승 절차';
    hvtap1.innerHTML = '<li><a href="sub_plane.html">' + '탑승수속 절차' + '</a></li>'+
                       '<li><a href="sub_plane.html">' + '공항 안내' + '</a></li>'+
                       '<li><a href="sub_plane.html">' + '라운지 이용' + '</a></li>';
    hvbox[1].childNodes[1].innerHTML = '클래스별 서비스';
    hvtap2.innerHTML = '<li><a href="sub_plane.html">' + '일등석' + '</a></li>'+
                       '<li><a href="sub_plane.html">' + '프레스티지석' + '</a></li>'+
                       '<li><a href="sub_plane.html">' + '일반석' + '</a></li>';
    hvbox[2].childNodes[1].innerHTML = '기내 서비스';
    hvtap3.innerHTML = '<li><a href="sub_plane.html">' + '기내식/종류' + '</a></li>'+
                       '<li><a href="sub_plane.html">' + '서비스 순서' + '</a></li>'+
                       '<li><a href="sub_plane.html">' + '기내 면세품' + '</a></li>'+
                       '<li><a href="sub_plane.html">' + '기내 가이드' + '</a></li>'+
                       '<li><a href="sub_plane.html">' + '휴대용전자기기 사용안내' + '</a></li>';
    hvbox[3].childNodes[1].innerHTML = '빠른 메뉴';
    hvtap4.innerHTML = '<li><a href="sub_plane.html">' + '항공권 예매' + '</a></li>'+
                       '<li><a href="sub_plane.html">' + '예약 조회' + '</a></li>'+
                       '<li><a href="sub_plane.html">' + '체크인' + '</a></li>'+
                       '<li><a href="sub_plane.html">' + '항공편 현황' + '</a></li>';     
    hvwrap.style.display = 'flex';
}
function hover_c4(){
    hvbox[0].childNodes[1].innerHTML = '스카이패스';
    hvtap1.innerHTML = '<li><a href="sub_baggage.html">' + '회원 혜택' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '마일리지' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '제휴사 안내' + '</a></li>';
    hvbox[1].childNodes[1].innerHTML = '마일리지 적립';
    hvtap2.innerHTML = '<li><a href="sub_baggage.html">' + '대한항공' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '라이프스타일' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '신용카드' + '</a></li>';
    hvbox[2].childNodes[1].innerHTML = '마일리지 사용';
    hvtap3.innerHTML = '<li><a href="sub_baggage.html">' + '마일리지 몰' + '</a></li>';
    hvbox[3].childNodes[1].innerHTML = '빠른 메뉴';
    hvtap4.innerHTML = '<li><a href="sub_baggage.html">' + '항공권 예매' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '예약 조회' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '체크인' + '</a></li>'+
                       '<li><a href="sub_baggage.html">' + '항공편 현황' + '</a></li>';          
    hvwrap.style.display = 'flex';
}
function hoverout(){
    hvwrap.style.display = 'none';
}
navbtn[0].addEventListener('mouseenter', hover_c1);
navbtn[1].addEventListener('mouseenter', hover_c2);
navbtn[2].addEventListener('mouseenter', hover_c3);
navbtn[3].addEventListener('mouseenter', hover_c4);
hvwrap.addEventListener('mouseleave', hoverout);