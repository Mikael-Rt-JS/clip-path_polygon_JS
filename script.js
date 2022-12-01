let obj={
  'r1':0,
  'r2':15,
  'r3':0,
  'r4':0,
  'r5':15,
  'r6':0,
  'r7':85,
  'r8':0,
  'r9':100,
  'r10':0,
  'r11':100,
  'r12':15,
  'r13':100,
  'r14':85,
  'r15':100,
  'r16':100,
  'r17':85,
  'r18':100,
  'r19':15,
  'r20':100,
  'r21':0,
  'r22':100,
  'r23':0,
  'r24':85
};
// let ranges=document.querySelector('#block_deformation').children;
let ranges=document.querySelectorAll('.range_col');
function renderDefault(i){
  ranges[i].value=obj[ranges[i].name];
  // ranges2[i].innerText=ranges[i].name + ' '+obj[ranges[i].name]+"%";
}

document.querySelector('#block_deformation').addEventListener('input',e=>{
  if(e.target.name){
    obj[e.target.name]=e.target.value;
  }
  document.querySelector('.block').style.clipPath=`polygon(${obj.r1}% ${obj.r2}%,${obj.r3}% ${obj.r4}%,${obj.r5}% ${obj.r6}%,${obj.r7}% ${obj.r8}%,${obj.r9}% ${obj.r10}%,${obj.r11}% ${obj.r12}%,${obj.r13}% ${obj.r14}%,${obj.r15}% ${obj.r16}%,${obj.r17}% ${obj.r18}%,${obj.r19}% ${obj.r20}%,${obj.r21}% ${obj.r22}%,${obj.r23}% ${obj.r24}%)`;
  document.querySelector('.css_polygon').innerHTML=`
  -webkit-clip-path: polygon(
  <span class="col1">${obj.r1}% ${obj.r2}%</span>,
  <span class="col2">${obj.r3}% ${obj.r4}%</span>,
  <span class="col3">${obj.r5}% ${obj.r6}%</span>,
  <span class="col4">${obj.r7}% ${obj.r8}%</span>,
  <span class="col5">${obj.r9}% ${obj.r10}%</span>,
  <span class="col6">${obj.r11}% ${obj.r12}%</span>,
  <span class="col7">${obj.r13}% ${obj.r14}%</span>,
  <span class="col8">${obj.r15}% ${obj.r16}%</span>,
  <span class="col9">${obj.r17}% ${obj.r18}%</span>,
  <span class="col10">${obj.r19}% ${obj.r20}%</span>,
  <span class="col11">${obj.r21}% ${obj.r22}%</span>,
  <span class="col12">${obj.r23}% ${obj.r24}%</span>);
<br>
  clip-path: polygon(
  <span class="col1">${obj.r1}% ${obj.r2}%</span>,
  <span class="col2">${obj.r3}% ${obj.r4}%</span>,
  <span class="col3">${obj.r5}% ${obj.r6}%</span>,
  <span class="col4">${obj.r7}% ${obj.r8}%</span>,
  <span class="col5">${obj.r9}% ${obj.r10}%</span>,
  <span class="col6">${obj.r11}% ${obj.r12}%</span>,
  <span class="col7">${obj.r13}% ${obj.r14}%</span>,
  <span class="col8">${obj.r15}% ${obj.r16}%</span>,
  <span class="col9">${obj.r17}% ${obj.r18}%</span>,
  <span class="col10">${obj.r19}% ${obj.r20}%</span>,
  <span class="col11">${obj.r21}% ${obj.r22}%</span>,
  <span class="col12">${obj.r23}% ${obj.r24}%</span>)`;
  // for(let i=0;i<ranges2.length; i++){
  //   ranges2[i].innerText=ranges[i].name + ' '+ obj[ranges[i].name]+"%";
  // }
})

window.onload=()=>{
  for(let i=0;i<ranges.length;i++){
    if(ranges[i].name==='r3'){
      renderDefault(i)
    }else if(ranges[i].name==='r6'){
      renderDefault(i)
    }else if(ranges[i].name==='r5'){
      renderDefault(i)
    }else if(ranges[i].name==='r8'){
      renderDefault(i)
    }else{
      ranges[i].value=obj[ranges[i].name];
      // obj[ranges[i].name]=100;
      // ranges2[i].innerText=ranges[i].name + ' '+ 100+"%";
    }
  }
  document.querySelector('.css_polygon').innerHTML=`polygon(${obj.r1}% ${obj.r2}%,${obj.r3}% ${obj.r4}%,${obj.r5}% ${obj.r6}%,${obj.r7}% ${obj.r8}%,${obj.r9}% ${obj.r10}%,${obj.r11}% ${obj.r12}%,${obj.r13}% ${obj.r14}%,${obj.r15}% ${obj.r16}%,${obj.r17}% ${obj.r18}%,${obj.r19}% ${obj.r20}%,${obj.r21}% ${obj.r22}%,${obj.r23}% ${obj.r24}%)`;
  document.querySelector('.css_polygon').innerHTML=`-webkit-clip-path: polygon(
  <span class="col1">${obj.r1}% ${obj.r2}%</span>,
  <span class="col2">${obj.r3}% ${obj.r4}%</span>,
  <span class="col3">${obj.r5}% ${obj.r6}%</span>,
  <span class="col4">${obj.r7}% ${obj.r8}%</span>,
  <span class="col5">${obj.r9}% ${obj.r10}%</span>,
  <span class="col6">${obj.r11}% ${obj.r12}%</span>,
  <span class="col7">${obj.r13}% ${obj.r14}%</span>,
  <span class="col8">${obj.r15}% ${obj.r16}%</span>,
  <span class="col9">${obj.r17}% ${obj.r18}%</span>,
  <span class="col10">${obj.r19}% ${obj.r20}%</span>,
  <span class="col11">${obj.r21}% ${obj.r22}%</span>,
  <span class="col12">${obj.r23}% ${obj.r24}%</span>);
<br>
  clip-path: polygon(
  <span class="col1">${obj.r1}% ${obj.r2}%</span>,
  <span class="col2">${obj.r3}% ${obj.r4}%</span>,
  <span class="col3">${obj.r5}% ${obj.r6}%</span>,
  <span class="col4">${obj.r7}% ${obj.r8}%</span>,
  <span class="col5">${obj.r9}% ${obj.r10}%</span>,
  <span class="col6">${obj.r11}% ${obj.r12}%</span>,
  <span class="col7">${obj.r13}% ${obj.r14}%</span>,
  <span class="col8">${obj.r15}% ${obj.r16}%</span>,
  <span class="col9">${obj.r17}% ${obj.r18}%</span>,
  <span class="col10">${obj.r19}% ${obj.r20}%</span>,
  <span class="col11">${obj.r21}% ${obj.r22}%</span>,
  <span class="col12">${obj.r23}% ${obj.r24}%</span>)`;
}
