let screen = document.getElementById('result')
buttons = document.querySelectorAll('button')
 let screenValue = '';
for(item of buttons){
  item.addEventListener('click',(e)=>{
    buttonText = e.target.innerText;
    console.log('button typed', buttonText);
    if(buttonText=='*'){
      buttonText = '*';
      screenValue += buttonText;
      screen.value = screenValue;
    }
    else if (buttonText =='AC'){
      screenValue = "";
      screen.value = screenValue;
    }
    else if (buttonText == "="){
      screen.value = eval(screenValue);
    }
    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
    console.log("screenValue" , screenValue);
    console.log(screen.value);
  })
}