window.addEventListener('load', solve);

function solve() {

 let btn=document.getElementsByClassName('moreBtn')[0];


      let tr=document.querySelector('.hide');




      btn.addEventListener('click',function () {

        btn.textContent='Less Info';

    tr.style.display='contents';

     if(btn.textContent==='Less Info'){
       btn.addEventListener('click',function () {

         btn.textContent='More Info';
         tr.style.display='none';
       })

     }


      });

       let totalPrice=document.getElementsByClassName('total-price')[0];

      let tdInfoPrice=document.querySelectorAll('.info td');

      let td=tdInfoPrice[1];


      let button=document.getElementsByClassName('buyBtn')[0];

      button.addEventListener('click',function () {

       totalPrice.textContent=td.textContent;

      });

}
