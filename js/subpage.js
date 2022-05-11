

// 공항 선택창 스크립트
const nation = document.querySelectorAll('.li_nation li');
const ko = nation[0];
const na = nation[1];
const ena = nation[2];
const esa = nation[3];
const eu = nation[4];
const ct = document.querySelectorAll('#citybox ul');
function addko(){
    ko.classList.add('active');
    na.classList.remove('active');
    ena.classList.remove('active');
    esa.classList.remove('active');
    eu.classList.remove('active');
    ct[0].style.display = 'block';
    ct[1].style.display = 'none';
    ct[2].style.display = 'none';
    ct[3].style.display = 'none';
    ct[4].style.display = 'none';
}
function addna(){
    na.classList.add('active');
    ko.classList.remove('active');
    ena.classList.remove('active');
    esa.classList.remove('active');
    eu.classList.remove('active');
    ct[1].style.display = 'block';
    ct[0].style.display = 'none';
    ct[2].style.display = 'none';
    ct[3].style.display = 'none';
    ct[4].style.display = 'none';

}
function addena(){
    ena.classList.add('active');
    na.classList.remove('active');
    ko.classList.remove('active');
    esa.classList.remove('active');
    eu.classList.remove('active');
    ct[2].style.display = 'block';
    ct[1].style.display = 'none';
    ct[0].style.display = 'none';
    ct[3].style.display = 'none';
    ct[4].style.display = 'none';
}
function addesa(){
    esa.classList.add('active');
    na.classList.remove('active');
    ena.classList.remove('active');
    ko.classList.remove('active');
    eu.classList.remove('active');
    ct[3].style.display = 'block';
    ct[1].style.display = 'none';
    ct[2].style.display = 'none';
    ct[0].style.display = 'none';
    ct[4].style.display = 'none';
}
function addeu(){
    eu.classList.add('active');
    na.classList.remove('active');
    ena.classList.remove('active');
    esa.classList.remove('active');
    ko.classList.remove('active');
    ct[4].style.display = 'block';
    ct[1].style.display = 'none';
    ct[2].style.display = 'none';
    ct[3].style.display = 'none';
    ct[0].style.display = 'none';
}

const nation2 = document.querySelectorAll('.nation_2 li');
const ko2 = nation2[0];
const na2 = nation2[1];
const ena2 = nation2[2];
const esa2 = nation2[3];
const eu2 = nation2[4];
const ct2 = document.querySelectorAll('#citybox2 ul');
function addko2(){
    ko2.classList.add('active');
    na2.classList.remove('active');
    ena2.classList.remove('active');
    esa2.classList.remove('active');
    eu2.classList.remove('active');
    ct2[0].style.display = 'block';
    ct2[1].style.display = 'none';
    ct2[2].style.display = 'none';
    ct2[3].style.display = 'none';
    ct2[4].style.display = 'none';
}
function addna2(){
    na2.classList.add('active');
    ko2.classList.remove('active');
    ena2.classList.remove('active');
    esa2.classList.remove('active');
    eu2.classList.remove('active');
    ct2[1].style.display = 'block';
    ct2[0].style.display = 'none';
    ct2[2].style.display = 'none';
    ct2[3].style.display = 'none';
    ct2[4].style.display = 'none';

}
function addena2(){
    ena2.classList.add('active');
    na2.classList.remove('active');
    ko2.classList.remove('active');
    esa2.classList.remove('active');
    eu2.classList.remove('active');
    ct2[2].style.display = 'block';
    ct2[1].style.display = 'none';
    ct2[0].style.display = 'none';
    ct2[3].style.display = 'none';
    ct2[4].style.display = 'none';
}
function addesa2(){
    esa2.classList.add('active');
    na2.classList.remove('active');
    ena2.classList.remove('active');
    ko2.classList.remove('active');
    eu2.classList.remove('active');
    ct2[3].style.display = 'block';
    ct2[1].style.display = 'none';
    ct2[2].style.display = 'none';
    ct2[0].style.display = 'none';
    ct2[4].style.display = 'none';
}
function addeu2(){
    eu2.classList.add('active');
    na2.classList.remove('active');
    ena2.classList.remove('active');
    esa2.classList.remove('active');
    ko2.classList.remove('active');
    ct2[4].style.display = 'block';
    ct2[1].style.display = 'none';
    ct2[2].style.display = 'none';
    ct2[3].style.display = 'none';
    ct2[0].style.display = 'none';
}

function init(){
ko.addEventListener('click',addko);
na.addEventListener('click',addna);
ena.addEventListener('click',addena);
esa.addEventListener('click',addesa);
eu.addEventListener('click',addeu);
ko2.addEventListener('click',addko2);
na2.addEventListener('click',addna2);
ena2.addEventListener('click',addena2);
esa2.addEventListener('click',addesa2);
eu2.addEventListener('click',addeu2);
}
init();
// 공항 선택창 스크립트

// 공항 팝업 열기/닫기//
var xbtn = document.getElementById('closebtn');
var xbtn2 = document.getElementById('closebtn2');
var intpop = document.getElementById('intplan');
var intpop2 = document.getElementById('intplan2');

function openpop(){
    intpop.style.display = 'block';
}
function closepopup(){
    intpop.style.display = 'none';
    intpop2.style.display = 'none';
}
function openpop_2(){
    if(txtatt.value == "" || txtatt.value == "0"){
    alert('출발 공항을 먼저 선택하세요.');
    } else {
        intpop2.style.display = 'block';
    }
}

// 공항 팝업 닫기//

//공항 선택 기능
var sttapt = document.getElementById('select_1');
var labelap = document.getElementById('startAirport');
var cname = document.querySelectorAll('.cname');
var apname = document.querySelectorAll('.apname');
var txtatt = document.getElementById('txtAirport');
var txtatt2 = document.getElementById('txtAirport2');
var endap = document.getElementById('endAirport');

citybox.onclick = function selectAirPort(e){
    for(i=0;i<apname.length;i++){
    if((e.target.value == apname.item(i).value)||(e.target.value == cname.item(i).value)){
        labelap.innerHTML = cname.item(i).value +'<br>'+ apname.item(i).value;
        i = 0;
        break;
      }
    }
    closepopup();
    txtatt.value = e.target.value;
}

citybox2.onclick = function selectAirPort_2(e){
    for(i=0;i<apname.length;i++){
        if((e.target.value == apname.item(i).value)||(e.target.value == cname.item(i).value)){
        endap.innerHTML = cname.item(i).value +'<br>'+ apname.item(i).value;
        i = 0;
        break;
      } 
    }
    txtatt2.value = e.target.value;
    while(txtatt2.value == txtatt.value){
        alert('출발지와 같습니다.');
        txtatt2.value='';
        endap.innerHTML = '도착지';
        return false;
    }
    closepopup();
}
//공항 선택 기능


//좌석 및 회원등급 선택
var eco = document.querySelector('.economy');
var bus = document.querySelector('.business');
var sui = document.querySelector('.suite');
var slv = document.querySelector('.silver');
var gld = document.querySelector('.gold');
var nmb = document.querySelector('.nonmember');
var chk = document.getElementsByClassName('chk');
var sgd = document.getElementById('seat_grade');
var tgd = document.getElementById('tier_grade');

function selGrade_1(){
    if(txtatt2.value != ''){
    eco.classList.add('addBorder');
    bus.classList.remove('addBorder');
    sui.classList.remove('addBorder');
    eco.style.backgroundColor = '#fff';
    bus.style.backgroundColor = '#ddd';
    sui.style.backgroundColor = '#ddd';
    chk[0].style.display = 'block';
    chk[1].style.display = 'none';
    chk[2].style.display = 'none';
    sgd.value = 'ecm';
    }  while((txtatt.value == '' || txtatt2.value == '')){
    alert('항공편을 입력 해주세요.');
    return false;
    }
}

function selGrade_2(){
    if(txtatt2.value != ''){
    bus.classList.add('addBorder');
    eco.classList.remove('addBorder');
    sui.classList.remove('addBorder');
    bus.style.backgroundColor = '#fff';
    eco.style.backgroundColor = '#ddd';
    sui.style.backgroundColor = '#ddd'; 
    chk[1].style.display = 'block';
    chk[0].style.display = 'none';
    chk[2].style.display = 'none';
    sgd.value = 'bsn';
    }  while((txtatt.value == '' || txtatt2.value == '')){
    alert('항공편을 입력 해주세요.');
    return false;
}
}
function selGrade_3(){
    if(txtatt2.value != ''){
    sui.classList.add('addBorder');
    bus.classList.remove('addBorder');
    eco.classList.remove('addBorder');
    sui.style.backgroundColor = '#fff';
    bus.style.backgroundColor = '#ddd';
    eco.style.backgroundColor = '#ddd';  
    chk[2].style.display = 'block';
    chk[1].style.display = 'none';
    chk[0].style.display = 'none';
    sgd.value = 'sut';
} while((txtatt.value == '' || txtatt2.value == '')){
    alert('항공편을 입력 해주세요.');
    return false;
}
}
function memBer_1(){
    if(txtatt2.value != ''){
    slv.classList.add('addBorder');
    gld.classList.remove('addBorder');
    nmb.classList.remove('addBorder');
    slv.style.backgroundColor = '#fff';
    gld.style.backgroundColor = '#ddd';
    nmb.style.backgroundColor = '#ddd';
    chk[3].style.display = 'block';
    chk[4].style.display = 'none';
    chk[5].style.display = 'none';
    tgd.value = 'sss';
} while((txtatt.value == '' || txtatt2.value == '')){
    alert('항공편을 입력 해주세요.');
    return false;
}
}
function memBer_2(){
    if(txtatt2.value != ''){
    gld.classList.add('addBorder');
    slv.classList.remove('addBorder');
    nmb.classList.remove('addBorder');
    gld.style.backgroundColor = '#fff';
    slv.style.backgroundColor = '#ddd';
    nmb.style.backgroundColor = '#ddd';
    chk[4].style.display = 'block';
    chk[3].style.display = 'none';
    chk[5].style.display = 'none';
    tgd.value = 'ggg';
}while((txtatt.value == '' || txtatt2.value == '')){
    alert('항공편을 입력 해주세요.');
    return false;
}
}
function memBer_3(){
    if(txtatt2.value != ''){
    nmb.classList.add('addBorder');
    gld.classList.remove('addBorder');
    slv.classList.remove('addBorder');
    nmb.style.backgroundColor = '#fff';
    gld.style.backgroundColor = '#ddd';
    slv.style.backgroundColor = '#ddd';
    chk[5].style.display = 'block';
    chk[4].style.display = 'none';
    chk[3].style.display = 'none';
    tgd.value = 'nnn';
} while((txtatt.value == '' || txtatt2.value == '')){
    alert('항공편을 입력 해주세요.');
    return false;
}
}

function init2(){
    eco.addEventListener('click',selGrade_1);
    bus.addEventListener('click',selGrade_2);
    sui.addEventListener('click',selGrade_3);
    slv.addEventListener('click',memBer_1);
    gld.addEventListener('click',memBer_2);
    nmb.addEventListener('click',memBer_3);
}
init2();
//좌석 및 회원등급 선택

//조회 클릭 시
const cs_1 = document.getElementById('case_1');
const cs_2 = document.getElementById('case_2');
const cs_4 = document.getElementById('case_4');
const cs_5 = document.getElementById('case_5');
const cs_7 = document.getElementById('case_7');
const cs_8 = document.getElementById('case_8');

function resultSearchGrade(){
    inputflight();
    if(sgd.value == 'ecm' && (tgd.value == 'sss'|| tgd.value == 'nnn')){
        cs_1.style.display = 'block';
        cs_2.style.display = 'none';
        cs_4.style.display = 'none';
        cs_5.style.display = 'none';
        cs_7.style.display = 'none';
        cs_8.style.display = 'none';
    } else if(sgd.value == 'ecm' && tgd.value == 'ggg'){
        cs_2.style.display = 'block';
        cs_1.style.display = 'none';
        cs_4.style.display = 'none';
        cs_5.style.display = 'none';
        cs_7.style.display = 'none';
        cs_8.style.display = 'none';
    } else if(sgd.value == 'bsn' && (tgd.value == 'sss'|| tgd.value == 'nnn')){
        cs_4.style.display = 'block';
        cs_5.style.display = 'none';
        cs_1.style.display = 'none';
        cs_2.style.display = 'none';
        cs_7.style.display = 'none';
        cs_8.style.display = 'none';
    } else if(sgd.value == 'bsn' && tgd.value == 'ggg'){
        cs_5.style.display = 'block';
        cs_4.style.display = 'none';
        cs_1.style.display = 'none';
        cs_2.style.display = 'none';
        cs_7.style.display = 'none';
        cs_8.style.display = 'none';
    } else if(sgd.value == 'sut' && (tgd.value == 'sss' || tgd.value == 'nnn')){
        cs_7.style.display = 'block';
        cs_5.style.display = 'none';
        cs_4.style.display = 'none';
        cs_1.style.display = 'none';
        cs_2.style.display = 'none';
        cs_8.style.display = 'none';
    } else if(sgd.value == 'sut' && tgd.value == 'ggg'){
        cs_8.style.display = 'block';
        cs_5.style.display = 'none';
        cs_4.style.display = 'none';
        cs_1.style.display = 'none';
        cs_2.style.display = 'none';
        cs_7.style.display = 'none';
    }
    
}

// 달력

function makeCalender(){
    var date = new Date();
    var utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
    var kstGap = 9 * 60 * 60 * 1000;
    var today = new Date(utc + kstGap);
    var thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var currentYear = thisMonth.getFullYear();
    var currentMonth = thisMonth.getMonth();
    var currentDate = thisMonth.getDate();
    renderCalender(thisMonth);
    function renderCalender(thisMonth){
        currentYear = thisMonth.getFullYear();
        currentMonth = thisMonth.getMonth();
        currentDate = thisMonth.getDate();
        // 저번달 마지막 날짜와 요일
        var startDay = new Date(currentYear, currentMonth, 0);
        var prevDate = startDay.getDate();
        var prevDay = startDay.getDay();
        // 이번달 마지막 날짜와 요일
        var endDay = new Date(currentYear, currentMonth + 1, 0);
        var nextDate = endDay.getDate();
        var nextDay = endDay.getDay();
        // 현재 월 표기
        document.querySelector('.year_month').innerHTML = currentYear +'년 '+ (currentMonth + 1) + '월';
        calender = document.querySelector('.dates');
        calender.innerHTML = '';
       // 지난 달
        for(var i = prevDate - prevDay + 1; i <= prevDate; i++){
            calender.innerHTML = calender.innerHTML + '<div class="day prev disable">' + i +'</div>'
        }
        // 이번 달
        for(var i = 1; i <= nextDate; i++){
            calender.innerHTML = calender.innerHTML + '<div class="day current">' + i + "</div>"
        }
        // 다음 달
        for(var i = 1; i <= (7 - nextDay == 7? 0 : 7 - nextDay); i++){
            calender.innerHTML = calender.innerHTML + '<div class="day next disable">' + i + '</div>'
        }
        if(today.getMonth() == currentMonth){
            todayDate = today.getDate();
            var currentMonthDate = document.querySelectorAll('.dates .current');
            currentMonthDate[todayDate-1].classList.add('today');
        }
    }
    // 지난달로 이동
    document.querySelector('.go-prev').onclick = function(){
        thisMonth = new Date(currentYear, currentMonth - 1, 1);
        renderCalender(thisMonth);
    }
    // 다음달로 이동
     document.querySelector('.go-next').onclick = function(){
        thisMonth = new Date(currentYear, currentMonth + 1, 1);
        renderCalender(thisMonth);
    }
}
makeCalender();
// 달력 열기
opencal = document.querySelector('.calender');

function open_cal(){
    opencal.style.display = 'block';
}
function close_cal(){
    opencal.style.display = 'none';
}

// 날짜 선택
var sel_Date = $('.dates .current');

    sel_Date.click(function(){
        var month = $('.year_month').text();
        var da_te = $(this).text();
        $('#day_calender').html(month +' '+ da_te + '일');
        $(opencal).hide();
    });
// --------------------


// 정보조회 결과
const flinfo = document.getElementById('flight_info');
const stFlight = document.querySelector('.sta_flight');
const edFlight = document.querySelector('.end_flight');
const grdFlight = document.querySelector('.grd_flight');
const flMember = document.querySelector('.filght_member');
function inputflight(){
    if(sgd.value == '' || tgd.value == ''){
        alert('조회 정보를 입력해주세요');
    } else {
        flinfo.style.display = 'block';
        stFlight.innerHTML = labelap.innerText;
        edFlight.innerHTML = endap.innerText;
        if(sgd.value == 'ecm'){
        grdFlight.innerHTML = '이코노미 클래스';
        } else if(sgd.value == 'bsn'){
        grdFlight.innerHTML = '비즈니스 클래스';
        } else if(sgd.value == 'sut'){
        grdFlight.innerHTML = '비즈니스 스위트';
        }
        if(tgd.value == 'sss'){
        flMember.innerHTML = '스카이패스 실버';
        } else if(tgd.value == 'ggg'){
        flMember.innerHTML = '스카이패스 골드';
        } else if(tgd.value == 'nnn'){
        flMember.innerHTML = '스카이패스 비';
        }
 }
}

// ----------------
// 수하물 계산기
var bgW = document.querySelectorAll('.bagWeight li');
var bgW1 = bgW[0];
var bgW2 = bgW[1];
var bgW3 = bgW[2];
var bgW4 = bgW[3];
var bgH = document.querySelectorAll('.bagHeight li');
var bgH1 = bgH[0];
var bgH2 = bgH[1];
var KRW;
var KRW2;
var feevalue = document.querySelector('.feeinput');

function bag_option_1(){
    bgW1.classList.add('addBorder');
    bgW2.classList.remove('addBorder');
    bgW3.classList.remove('addBorder');
    bgW4.classList.remove('addBorder');
    KRW = 0;
    KRW3 = KRW + KRW2;
    feevalue.innerHTML = KRW3.toLocaleString('ko-KR');
    if(isNaN(KRW3)){
        feevalue.innerHTML = '';
    } else if(KRW3 == 0){
        feevalue.innerHTML = '무료';
    }
}
function bag_option_2(){
    bgW2.classList.add('addBorder');
    bgW1.classList.remove('addBorder');
    bgW3.classList.remove('addBorder');
    bgW4.classList.remove('addBorder');
    KRW = 40000;
    KRW3 = KRW + KRW2;
    feevalue.innerHTML = KRW3.toLocaleString('ko-KR');
    if(isNaN(KRW3)){
        feevalue.innerHTML = '';
    }
}
function bag_option_3(){
    bgW3.classList.add('addBorder');
    bgW1.classList.remove('addBorder');
    bgW2.classList.remove('addBorder');
    bgW4.classList.remove('addBorder');
    KRW = 60000;
    KRW3 = KRW + KRW2;
    feevalue.innerHTML = KRW3.toLocaleString('ko-KR');
    if(isNaN(KRW3)){
        feevalue.innerHTML = '';
    }
}
function bag_option_4(){
    bgW4.classList.add('addBorder');
    bgW1.classList.remove('addBorder');
    bgW2.classList.remove('addBorder');
    bgW3.classList.remove('addBorder');
    KRW = 100000;
    KRW3 = KRW + KRW2;
    feevalue.innerHTML = KRW3.toLocaleString('ko-KR');
    if(isNaN(KRW3)){
        feevalue.innerHTML = '';
    }
}
function bag_option_5(){
    bgH1.classList.add('addBorder');
    bgH2.classList.remove('addBorder');
    KRW2 = 0;
    KRW3 = KRW + KRW2;
    feevalue.innerHTML = KRW3.toLocaleString('ko-KR');
    if(isNaN(KRW3)){
        feevalue.innerHTML = '';
    } else if(KRW3 == 0){
        feevalue.innerHTML = '무료';
    }
}
function bag_option_6(){
    bgH2.classList.add('addBorder');
    bgH1.classList.remove('addBorder');
    KRW2 = 100000;
    KRW3 = KRW + KRW2;
    feevalue.innerHTML = KRW3.toLocaleString('ko-KR');
    if(isNaN(KRW3)){
        feevalue.innerHTML = '';
    }
}
function init3(){
    bgW1.addEventListener('click',bag_option_1);
    bgW2.addEventListener('click',bag_option_2);
    bgW3.addEventListener('click',bag_option_3);
    bgW4.addEventListener('click',bag_option_4);
    bgH1.addEventListener('click',bag_option_5);
    bgH2.addEventListener('click',bag_option_6);
}
init3();
// 