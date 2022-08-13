    /*****الصفحة 1 والصحة 2******ازرار 1 ---2  */
const navBtn2 = document.querySelector('section .btn-2');
const navBtn1 = document.querySelector('section .btn-1');
const nav2 = document.querySelector('section .nav-2');
const nav1 = document.querySelector('section .nav-1');
const invoice = document.querySelector('.invoice-1');
navBtn2.addEventListener('click', () => {
navBtn1.classList.remove('active');    
navBtn2.classList.add('active');
nav1.classList.add('hidden');
nav2.classList.add('active');
invoice.classList.add('btn2')
});
navBtn1.addEventListener('click', () => {
    navBtn1.classList.add('active');
    navBtn2.classList.remove('active');
    nav1.classList.remove('hidden');
    nav2.classList.remove('active');
    invoice.classList.remove('btn2')
    });
    // I Love JavaScript *
/**********header****** */
const sercH = document.querySelector('header .serch');
const sercH2 = document.querySelector('header .serch2');
const columnS = document.querySelector('header .nav');
 const navAfter = document.querySelector('.nav-after');
 sercH.addEventListener('click', ()=> {
     navAfter.classList.toggle('open');
     columnS.classList.toggle('trans');
 });
 sercH2.addEventListener('click', ()=> {
        navAfter.classList.toggle('open');
        columnS.classList.toggle('trans');
    });
   const btnS = document.querySelectorAll(".nav .col1 button");    
   const box4 = document.querySelector('.nav .box4');
// const vInput = document.querySelectorAll('input[type=number],input[type=text]'); /*stoping */
let bacK = btnS[0] , deletE = btnS[1] , savE = btnS[2], ediT = btnS[3] , InvoiceNew = btnS[4]
,correctPath = btnS[5] , lastRecord = btnS[6] , previuesRecord = btnS[7] , nextRecord = btnS[8] , firstRecord = btnS[9];
   /*************************فاتورة جديدة */
   let slName = document.querySelector('nav tr td  .selected'); // فاتورة اسم العميل
   let opName = document.getElementById("mySelect"); 
   let slOption = document.getElementById('select')
    InvoiceNew.addEventListener('click', ()=> {
        for (i =0; i < btnS.length; i++) {
            btnS[i].classList.remove('close');
        }
        ediT.classList.add('close');
        lastRecord.classList.add('close');
        nextRecord.classList.add('close');
       box4.classList.remove('close');
      slOption.value = opName.selectedIndex + 1;
      slName.value = opName.options[opName.selectedIndex].text;
  
  });
/****************تراجع******** */
 bacK.addEventListener('click', ()=> {
       for (i =0; i< btnS.length ; i++) {
           btnS[i].classList.add('close')
       }
       ediT.classList.remove('close');
       InvoiceNew.classList.remove('close');
       correctPath.classList.remove('close');
         box4.classList.add('close');
         slName.value = "";
    });
     /**********حفظ ***************** */ 
 
    savE.addEventListener('click', ()=> {
       for (i = 0; i < btnS.length; i++) {
           btnS[i].classList.remove("close");
       }
       savE.classList.add('close');
       bacK.classList.add('close');
 });

    const btnSer = document.querySelectorAll('aside .container .ser ');
const saleS = btnSer[2];
/*********Sales invoice */
saleS.addEventListner('click', ()=> {
    for (i =0;i < btnS.length;i++) {
        btnS[i].classList.add('close');
    }
    InvoiceNew.classList.remove("close");
    ediT.classList.remove("close");
    correctPath.classList.remove("close");
});

let theCard = document.querySelector('.ctrl-2');
