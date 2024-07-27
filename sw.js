let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 
let hrs= 0;
let min=0;
let count=0;
let sec=0;
let timer=false;
startBtn.addEventListener('click',function()
{
   timer=true;
   stopwatch();

});
stopBtn.addEventListener('click',function()
{
   timer=false;

})
resetBtn.addEventListener('click',function()
 {

hrs=0;
min=0;
sec=0;
count=0;
timer=false;
document.getElementById('hrs').innerHTML="00";
document.getElementById('min').innerHTML="00";
document.getElementById('sec').innerHTML="00";
document.getElementById('count').innerHTML = "00"; 

});

function stopwatch()
{
if(timer)
{
  count++;

if(count==100)
{
  sec++;
  count=0;
}
if(sec==60){
    min++;
    sec=0;

}
if(min==60)
{
    hrs++;
    min=0;
    sec=0;
}
let hrString=hrs;
let minString=min;
let secString=sec;
let countString=count;
if (hrs<10)
{
    hrString="0"+hrString;
}
if (min<10)
    {
        minString="0"+minString;
    }

if (sec<10)
    {
        secString="0"+secString;
    }

if (count < 10) { 
        countString = "0" + countString; 
} 

    document.getElementById('hrs').innerHTML = hrString; 
    document.getElementById('min').innerHTML = minString; 
    document.getElementById('sec').innerHTML = secString; 
    document.getElementById('count').innerHTML = countString; 
    setTimeout(stopwatch, 10); 

}
}