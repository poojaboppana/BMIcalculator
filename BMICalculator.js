function checkbmi(){
   const weight=document.getElementById("weight").value;
      const height=document.getElementById("height").value;
      if(weight && height && weight>0 && height>0){
      const bmi=weight/(height*height);
      document.getElementById("res").innerText=`Your BMI is ${bmi.toFixed(2)}`;
      }
      else{
         document.getElementById("res").innerText = "Please enter valid weight and height.";
      }
}
