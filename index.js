
/*CHAPTER1*/
/*TASK1*/
alert("Welcome Visitor");
/*TASK2*/
alert("Error! Please enter a valid password");
/*TASK3*/
alert("Welcome to Js Land...\nHappy Coding!");
/*TASK4*/
alert("Welcome to Js Land");
alert("Happy Coding!");
/*TASK5*/
console.log("hello i can run js through my web browser's console");

//TASK6 a
alert("JS alerts from html file");

/*TASK7 script tag in head and body of index file */

 /*chapter2*/
 /* TASK1*/
 var username;
 /* TASK2*/
 var myName="Safi Saqlain";
 /* TASK3*/
 var message="hello World";
 alert(message);
 /* TASK4*/
 var name="Safi Saqlain";
 var age=27;
 var course="Cerified Mobile Application Developer";
 alert(name);
 alert(age);
 alert(course);
 /* TASK5*/
 var demo="pizza";
alert(demo+'\n'+demo.split("a").join(" ")+"\n"+demo.split("za").join(" ")+"\n"+demo.split("zza").join(" ")+"\n"+demo.split("izza").join(" "));
/*TASK6*/
var email="safisaqlain@gmail.com";
alert("My email address is "+email);
/*TASK7*/
var book="A smarter way to learn javascript";
alert("i am trying to learn from the book "+book);
//task8 is on index.html file
/*TASK9*/
var sign='▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
alert(sign); 

/*chapter3*/
 /* TASK1*/
 var age=15;
 alert("i am "+age+" years old");
 
 /* TASK2*/
 var count=1;
 alert("you have visted this website "+count+" time");

  /* TASK4*/
  var visitor="safi";
  var producttitle="T-shirt";
  var quantity=5;
  document.write(visitor+" has ordered "+quantity+" "+producttitle+" from XYZ online store");

//   /*chapter4*/

//  /* TASK1*/
//  var a=1,b=2,c=3;

//   /* TASK2*/
//   //legal variable names
// //   var name$='safi';
// //   var name_='safi';
// //   var Name='safi';
// //   var NAME='safi';
// //   var name1='safi';

//   //illegal variable name
// //   var 1name='safi';
// //   var +name='safi';
// //   var for='';
// //   var name safi='';
// //   var 1='1';

 /* TASK3*/
 //a// 
 document.write("<h3>Rules For Naming JS Variables</h3>");
 //b//
document.write("Varible Names can only contain letter,underscores,dollarsign and digits for example $my_1stVariable<br>");
//c//
document.write("Names must begin with a letter,dollarsign and underscore for example :$name,_name or name<br>");
//d//
document.write("Variable names are case sensitive<br>");
//e//
document.write("Variable names should not be JS keywords<br>");

 /* CHAPTER 5*/
  /* TASK1*/
  document.write("<h3>Chapter 5 task1</h3>");
  var firstnum=parseInt(prompt("Enter First Num:"));
  var secondnum=parseInt(prompt("Enter Second Num:"));
  document.write("Sum of "+firstnum+" and "+secondnum+" is "+(firstnum+secondnum));

  /* TASK2*/
  document.write("<h3>Chapter 5 task2</h3>");
  document.write("Substraction of "+firstnum+" and "+secondnum+" is "+(firstnum-secondnum));
  document.write("<br>Multiplication of "+firstnum+" and "+secondnum+" is "+(firstnum*secondnum));
  document.write("<br>Division of "+firstnum+" and "+secondnum+" is "+(firstnum/secondnum));
  document.write("<br>Modulus of "+firstnum+" and "+secondnum+" is "+(firstnum%secondnum));

 

//chapter5 task3
var dem;
document.write("<h3>Chapter 5 task3</h3>");
document.write("value after variable declaration is "+dem);
dem=5;
document.write("<br>initial value: "+dem);
dem++;
document.write("<br>value after increment is: "+dem);
dem+=7;
document.write("<br>value after addition is: "+dem);
dem--;
document.write("<br>value after decrement is: "+dem);
document.write("<br>remainder is : "+dem%3);
//chapter 5 task4
document.write("<h3>Chapter 5 task4</h3>");
var ticketprice=600;
document.write("Total Cost for buying 5tickets for a movie is "+ticketprice*5);
//chapter 5 task5
document.write("<h3>Chapter 5 task5</h3>");
var no=5;
document.write("Table of "+no+"is <br>")
for (var v=1;v<=10;v++){
    document.write(no+"x"+v+"="+v*no+"<br>")
}

//chapter 5 task6
document.write("<h3>Chapter 5 task6</h3>");
var celcius=25;
var celciustofarenheit=(celcius*9/5)+32;
var farenheit=25;
var farenheittocelcius=(farenheit-32)*5/9;
document.write(celcius+"<sup>0</sup>C is "+celciustofarenheit+"<sup>0</sup>F <br>");
document.write(farenheit+"<sup>0</sup>F is "+farenheittocelcius+"<sup>0</sup>C");

//chapter 5 task7
document.write("<h3>Chapter 5 task7</h3>");
var item1price=600;
var item1quantity=3;
var item2price=100;
var item2quantity=7;
var shippingcharges=100;
var total=(item1price*item1quantity)+(item2price*item2quantity)+shippingcharges;
document.write("<h3>SHOPPING CART</h3></h3>");
document.write("Item1 price is "+item1price+"<br>Item1 quantity is "+item1quantity+"<br>Item2 price is "+item2price+"<br>Item2 quantity is "+item2quantity+"<br>Shipping Charges are "+shippingcharges+"<br>Total cost of your order is "+total)


//chapter 5 task8
document.write("<h3>Chapter 5 task8</h3>");
document.write("<h3>Markssheet</h3>");
var marksobtained=804;
var totalmarks=980;

var percentage=(marksobtained/totalmarks)*100;
document.write("Marks Obtained: "+marksobtained+"<br>Total Marks: "+totalmarks+"<br>Percentage: "+percentage);


//chapter 5 task9
document.write("<h3>Chapter 5 task9</h3>");
document.write("<h3>CURRENCY IN PKR</h3>");
var usdtopkr=10*104.80;
var sauditopkr=25*28;
document.write("Total Currency in Pkr: "+(usdtopkr+sauditopkr))

//chapter 5 task10
document.write("<h3>Chapter 5 task10</h3>");
document.write("<h3>MATHEMATICAL EXPRESSION</h3>");
var numx=5;
var numexp=((5+5)*10)/2;
document.write("math expression: "+numexp);

//chapter 5 task11
document.write("<h3>Chapter 5 task11</h3>");
document.write("<h3>THE AGE CALCULATOR</h3>");
var birthyear=1993;
var currentyear=2020;
document.write("Current Year is "+currentyear+"<br> Birth Year: "+birthyear+"<br>Your Age : "+(currentyear-birthyear));

//chapter 5 task12
document.write("<h3>Chapter 5 task12</h3>");
document.write("<h3>THE GEOMETRIZER</h3>");
var radius=2;
var circumference=2*3.142*radius;
var areaofcircle=3.142*radius*radius;
document.write("Radius of Circle is "+radius+"<br>Circumference is "+circumference+"<br>Area is "+areaofcircle);

//chapter 5 task13
document.write("<h3>Chapter 5 task13</h3>");
document.write("<h3>THE LIFETIME SUPPLY CALCULATOR</h3>");
var snack="brownie";
var current_age=27;
var max_age=65;
var amountperday=2;
var totalbrownies=(max_age-current_age)*365*amountperday;
document.write("Favourite Snack: "+snack+"<br> Current Age: "+current_age+"<br>Maximum Age: "+max_age+"<br>Snack Consumed Per Day: "+amountperday+"<br> You will need "+totalbrownies+" "+snack+" to last you until the ripe old age of "+max_age);
//chapter 6-9 task1
document.write("<h3>Chapter 6-9 task1</h3>");
var a=10;
document.write("Result:<br>")
document.write("The value of a is "+a+"<br> The value of ++a is: "+(++a)+
"<br> Now the value of a is "+a+"<br> The value of a++ is: "+(a++)+
"<br> Now the value of a is :"+a+"<br> the value of --a is"+(--a)+"<br> Now the value of a is: "+a+
"<br> the value of a-- is: "+(a--)+"<br> Now the value of a is: "+a);

//chapter 6-9 task2
document.write("<h3>Chapter 6-9 task2</h3>");
var a=2,b=1;
var result= --a - --b + ++b + b--;
document.write("a is "+a+"<br>b is "+b+"<br>result: "+result);
//--a = 1;
// --a - --b=1 - 0=1;
//--a - --b + ++b = 1+1=2;
//--a - --b + ++b + b-- = 2+1=3;  

//chapter 6 task3
document.write("<h3>Chapter 6 task3</h3>");
var inputuser=prompt("Enter Your Name?");
alert("Welcome! "+inputuser);
//chapter 6-9 task4
document.write("<h3>Chapter 6-9 task4</h3>");
var inputno=parseInt(prompt("Enter any number?"));

for (var v=1;v<=10;v++){
  if (!inputno){
inputno=5;
  document.write(inputno+"x"+v+"="+v*inputno+"<br>")}
  else{
    document.write(inputno+"x"+v+"="+v*inputno+"<br>")
  }
}
//chapter 6-9 task5
document.write("<h3>Chapter 6-9 task5</h3>");

var firstsubject=prompt("Enter First Subject:");
var secondsubject=prompt("Enter Second Subject:");
var thirdsubject=prompt("Enter Third Subject:");
var firstsubjectmarks=parseInt(prompt("Enter "+firstsubject+" marks:"));
var secondsubjectmarks=parseInt(prompt("Enter "+secondsubject+" marks:"));
var thirdsubjectmarks=parseInt(prompt("Enter "+thirdsubject+" marks:"));
var totalmarksobtained=firstsubjectmarks+secondsubjectmarks+thirdsubjectmarks;
var maxmarks=100;
var firstsubper=firstsubjectmarks/maxmarks*100;
var secondsubper=secondsubjectmarks/maxmarks*100;
var thirdsubper=thirdsubjectmarks/maxmarks*100;
var totalmarks=maxmarks+maxmarks+maxmarks;
var per=totalmarksobtained/totalmarks*100;   
document.write("<table><th>Subjects</th><th>Max Marks</th><th>Marks Obtained</th><th>Percentage</th><tr><td>"+firstsubject+"</td><td>"+maxmarks+"</td><td>"+firstsubjectmarks+"</td><td>"+firstsubper+"%</td></tr><tr><td>"+secondsubject+"</td><td>"+maxmarks+"</td><td>"+secondsubjectmarks+"</td><td>"+secondsubper+"%</td></tr><tr><td>"+thirdsubject+"</td><td>"+maxmarks+"</td><td>"+thirdsubjectmarks+"</td><td>"+thirdsubper+"%</td></tr><tr><td>Total</td><td>"+totalmarks+"</td><td>"+totalmarksobtained+"</td><td>"+per+"%</td></tr></table>");

//chapter 9-11 task1
alert("Chapter 9-11 task1");
var city=prompt("Enter your city name?");
if (city==='karachi'){
  alert("welcome to the city of lights");
}

//chapter 9-11 task2
alert("Chapter 9-11 task2");
var gender=prompt("what is your gender?");
if (gender==="male"){alert("GoodMorining Sir!")}
else if(gender==="female"){alert("GoodMorning Madam!")}
else{
  alert("GoodMorning")};
  //chapter 9-11 task3
  alert("Chapter 9-11 task3");
  var signal=prompt("Enter Signal Color?");
  if (signal==='red'){alert("Must Stop")}
  else if(signal==='green'){alert("Move Now")}
  else if(signal==='yellow'){alert("Ready To Move")}
  else
  {alert("thats not a signal")};
  //chapter 9-11 task4
  alert("Chapter 9-11 task4");
  var remainingfuel=parseFloat(prompt("Enter Remaing fuel:"));
  if (remainingfuel<0.25){alert("Please refill the fuel in your car!")}
  else {
    alert("you are good to go!!")
  }
  //chapter 9-11 task5a
  alert("Chapter 9-11 task5a");
  var a=4;
  if (++a===5){alert("given condition for a variable is true");}
  //chapter 9-11 task5b
  alert("Chapter 9-11 task5b");
  var b=82;
  if (b++ === 83){alert("given condtion for a variable is true");}
  //chapter 9-11 task5c
  alert("Chapter 9-11 task5c");
  var c=12;
  if (c++ === 13){alert("condition 1 is true");}
  if (c === 13){alert("condition 2 is true");}
  if (++c < 14){alert("condtion 3 is true");}
  if (c === 14){alert("condition 4 is true");}
 //chapter 9-11 task5d
  alert("Chapter 9-11 task5d");
  var materiaCost=20000;
  var laborCost=2000;
  var totalCost=materiaCost+laborCost;
  if (totalCost===laborCost+materiaCost){alert("the cost equals")}
//chapter 9-11 task5e
  alert("Chapter 9-11 task5e");
  if (true){alert("True")}
  if (false){alert("False")}
//chapter 9-11 task5f
  alert("Chapter 9-11 task5f");
  if ('car' < 'cat'){alert("car is smaller than cat");}
//chapter 9-11 task6
  alert("Chapter 9-11 task6");
  var firstsubject=prompt("Enter First Subject:");
var secondsubject=prompt("Enter Second Subject:");
var thirdsubject=prompt("Enter Third Subject:");
var firstsubjectmarks=parseInt(prompt("Enter "+firstsubject+" marks:"));
var secondsubjectmarks=parseInt(prompt("Enter "+secondsubject+" marks:"));
var thirdsubjectmarks=parseInt(prompt("Enter "+thirdsubject+" marks:"));
var totalmarksobtained=firstsubjectmarks+secondsubjectmarks+thirdsubjectmarks;
var maxmarks=100;
var totalmarks=maxmarks+maxmarks+maxmarks;
var per=totalmarksobtained/totalmarks*100;
  var grade='',remarks='';
  if (per >= 80){grade='A-ONE';remarks='Excellent';}
  else if (per >= 70){grade='A';remarks='Good';}
  else if (per >= 60){grade='B';remarks='You need to improve';}
  else if (per < 60){grade='Fail';remarks='Sorry';}
  document.write("<h3>Marks Sheet Chapter 9-11 task6</h3>");
  document.write("Total marks:"+totalmarks+"<br>Marks obtained:"+totalmarksobtained+"<br>Percentage:"+per+"<br>Grade:"+grade+"<br>Remarks:"+remarks);
  //chapter 9-11 task7
  alert("Chapter 9-11 task7");
  alert("Guess Game");
  var correctno=4;
  var guessno=parseInt(prompt("Enter Any no. ranging from 1-10;"));
  if (guessno===correctno){alert("Bingo! Correct Answer")}
  else if (guessno === ++correctno || guessno ===  (correctno-2)){alert("Close enough to the correct answer")}
  else{
    alert("tryagain");
  }
  //chapter 9-11 task8
  alert("Chapter 9-11 task8");
  var n=parseInt(prompt("Enter Any No."));
if (n%3 ===0){alert(n+" is divisble by 3");}
else{alert("Not divisible by 3")}
//chapter 9-11 task9
alert("Chapter 9-11 task9");
var n=parseInt(prompt("Enter Any No."));
if (n%2 ===0){alert(n+" is an even number");}
else{alert(n+" is an odd number");} 
//chapter 9-11 task10
alert("Chapter 9-11 task10");
var temp=parseFloat(prompt("Enter Temperature:"));
if (temp>40){alert("It is too hot outside");}
else if (temp>30){alert("The weather today is normal");}
else if (temp>20){alert("Today's weather is cool");}
else if (temp>10){alert("OMG! Today's weather is so cool")}
else {alert('It is freezing outside');}

//chapter 9-11 task11
alert("Chapter 9-11 task11");
var firstnumber=parseInt(prompt("Enter first no:"));
var Secondnumber=parseInt(prompt("Enter Second no:"));
var operation=prompt("1.+\n2.*\n3./\n4.-\n5.%\nEnter No. to perform operation:")
  if(operation==='1'){alert("Sum of "+firstnumber+" and "+secondnumber+" is "+(firstnumber+Secondnumber))}
  else if (operation==='2'){alert("Multiplication of "+firstnumber+" and "+Secondnumber+" is "+(firstnumber*Secondnumber) )}
  else if (operation==='3'){alert("Division of "+firstnumber+" and "+Secondnumber+" is "+(firstnumber/Secondnumber))}
  else if (operation==='4'){alert("Subtraction of "+firstnumber+" and "+Secondnumber+" is "+(firstnumber-Secondnumber))}
  else if (operation==='5'){alert("Remainder of "+firstnumber+" and "+Secondnumber+" is "+(firstnumber%Secondnumber))}
  else {alert("wrong input");}
  
  //chapter 12-13 task1
  alert("Chapter 12-13 task1");
  var input=prompt("Enter Any Character:");
if (input>='A' && input<='Z'){alert("Uppercase letter")}
else if (input>='a' && input<='z'){alert("lowercase letter")}
else if (!isNaN(input)){alert("number")}
else {alert("not a number or a string character")}
//chapter 12-13 task2
alert("Chapter 12-13 task2");

var jsno=parseInt(prompt("Enter Any no.:"));
var jsno2=parseInt(prompt("Enter Any no.:"));
if (jsno===jsno2){alert("both are equal")}
else if (jsno>jsno2){alert(jsno+" is greater than "+jsno2)}
else {alert(jsno+" is less than "+jsno2)}

//chapter 12-13 task3
alert("Chapter 12-13 task3");
var jsn=parseInt(prompt("Enter Any no.:")); 
if (jsn===0){alert("zero")}
else if (jsn<0){alert("negative")}

else if (jsn>0){alert("positive")}
else{alert("wrong input")}
//chapter 12-13 task4
alert("Chapter 12-13 task4");
var ch=prompt("enter any character:");
var vowel='aeiouAEIOU';
if(vowel.includes(ch)){alert(ch+" is a vowel")}
else{alert("not a vowel")}
//chapter 12-13 task5
alert("Chapter 12-13 task5");
var pass='321';
var enterpass=prompt("Enter Password");
if (!enterpass){alert("Please enter a password")}

else if (pass===enterpass){alert("Correct! The password you entered matches the original password")}
else{alert("Incorrect Passowrd")}

//chapter 12-13 task6
alert("Chapter 12-13 task6");
var greeting;
var hour=13;
if (hour<18){greeting="GoodMorning"}
else{greeting="GoodEvening"}
//chapter 12-13 task7
alert("Chapter 12-13 task7");
var time=prompt("Enter Your Time(format:1900-7pm)");
if (time>=0000 && time<1200){alert("Good Morning")}
else if (time>=1200 && time<1700){alert("Good Afternoon")}
else if (time>=1700 && time<2100){alert("Good Evening")}
else if (time>=2100 && 2359){alert("Good Night!")}
else {alert("wrong input")}

//chapter 14-16 task1
alert("Chapter 14-16 task1");
var array=[];
//chapter 14-16 task2
var strarray=new Array();
//chapter 14-16 task3
strarray=["ali","abid","rizvi"];
//chapter 14-16 task4
var numarray=[1,2,3,4];
//chapter 14-16 task5
var boolarray=[true,false];
//chapter 14-16 task6
var mixarray=[1,"ali",2,"abid",3];
//chapter 14-16 task7
var qualifications=['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PhD']
//chapter 14-16 task8
alert("Chapter 14-16 task8");
var studentnames=['ali','abid','rizvi'];
var marks=[320,230,480];
alert("Score of "+studentnames[0]+" is "+marks[0]+". Percentage:"+((marks[0]/500)*100)+"%");
alert("Score of "+studentnames[1]+" is "+marks[1]+". Percentage:"+((marks[1]/500)*100)+"%");
alert("Score of "+studentnames[2]+" is "+marks[2]+". Percentage:"+((marks[2]/500)*100)+"%");
//chapter 14-16 task9
document.write("Chapter 14-16 task9")
var colorarray=['red','green','blue'];
var askuser=prompt("what color you want to add in this color-array:");
colorarray.unshift(askuser);
document.write("adding color at the beginning of array"+colorarray);
var askuser1=prompt("what color you want to add at the end in  this color-array:");

colorarray.push(askuser1);
document.write("<br>adding color at the end of array: "+colorarray);
colorarray.unshift("purple","maroon");
document.write("<br>after adding two colors at the beginning of array: "+colorarray);
colorarray.shift();
document.write("after deleting first element in array:"+colorarray);
colorarray.pop();
document.write("after deleting last element in array:"+colorarray);
var colorindex=prompt("At what index you want to add color on (ranging from 0 to "+(colorarray.length-1))");
var colorname=prompt("which color you want to add");
colorarray.splice(colorindex,0,colorname);
document.write("<br> after adding : "+colorarray);
var colordelindex=prompt("At what index you want to add color on (ranging from 0 to "+(colorarray.length-1))");
var colordelcount=prompt("How many colors you want to delete from "+colorarray.length+" colors");
colorarray.splice(colordelindex,colordelcount);
document.write("<br> after deleting : "+colorarray);
//chapter 14-16 task10
alert("Chapter 14-16 task10");
var arr=[320,200,210];
alert("unsorted scores: "+arr);
alert("sorted scoresarray: "+(arr.sort()));

//chapter 14-16 task11
alert("Chapter 14-16 task11");
var citieslist=['karachi','lahore','quetta','sialkot'];
var selectedcities=citieslist.slice(0,3);
document.write("citieslist: "+citieslist+"<br>selected cities list: "+selectedcities);
//chapter 14-16 task12
alert("Chapter 14-16 task12");
var array=['this','is','my','cat'];
alert(array.join(" "));
//chapter 14-16 task13
alert("Chapter 14-16 task13");
var newarr=[];
newarr.push("keyboard");
newarr.push("mouse");
alert("newarr");
//chapter 14-16 task14
alert("Chapter 14-16 task14");
var narr=[];
narr.unshift("monitor");
narr.unshift("printer");
alert("narr");

//chapter 14-16 task 15
document.write("Chapter 14-16 task15");
var arri=['samsung','nokia'];
document.write("<select><option>"+arri[0]+"</option><option>"+arri[1]+"</option</select>");

//chapter 17-20 task1
alert("Chapter 17-20 task1");
var arrm=[[],[]];
//chapter 17-20 task2
alert("Chapter 17-20 task2");
var multiarray=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
alert(multiarray[0].join(" ")+"\n"+multiarray[1].join(" ")+"\n"+multiarray[2].join(" "));
//chapter 17-20 task3
document.write("<h3>Chapter 17-20 task3</h3>");
for(var v=1;v<11;v++){
  document.write(v+"<br>")
}
//chapter 17-20 task4
document.write("<h3>Chapter 17-20 task4</h3>");
 var numinput=prompt("Enter any no to create a table of it :");
 var tablelength=prompt("Enter length for table : ");
 for (var i=1;i<=tablelength;i++){
   document.write(numinput+"x"+i+"="+(i*numinput)+"<br>");
 }
 //chapter 17-20 task5
 document.write("<h3>Chapter 17-20 task5</h3>");
 var fruits=['apple','banana','mango','strawberry'];
 for(var i=0;i<fruits.length;i++){
   document.write(fruits[i]+"<br>");
 }
 for(var i=0;i<fruits.length;i++){
  document.write("Element at index"+i+" is "+fruits[i]+"<br>");
}
//chapter 17-20 task6
document.write("<h3>Chapter 17-20 task6</h3>");
var counting=[];
var reverse=[];
var even=[];
var odd=[];
var series=[];
for (var i=1;i<16;i++){
counting.push(i)
}
for(var i=15;i>=1;i--){
reverse.push(i)
}
for (var i=0;i<=20;i++){
if(i%2===0){
even.push(i)
}
}
for (var i=0;i<=20;i++){
if(i%2!=0){
odd.push(i)
}
}
for (var i=1;i<=10;i++){

series.push((i*2)+"k ");
}
document.write("counting: "+counting+"<br>"+"reverse: "+reverse+"<br>even: "+even+"<br>odd: "+odd+"<br>series: "+series);

//chapter 17-20 task7
alert("chapter 17-20 task7")
var a =['cake','applepie','cookie','patties','chips'];
var inputitem=prompt("Enter item to search");
for (var i=0;i<a.length;i++){
if (inputitem===a[i]){
alert(inputitem+" is found at "+i+" index");
break;
}
if(i===a.length-1){
alert("item is not found inthis list");
}
}
//chapter 17-20 task8
alert("chapter 17-20 task8")
var a=[24,53,74,91,12];
alert("Array items are :"+a+"\nlargest no in the array is :"+(a.sort()[a.length-1]))
//chapter 17-20 task9
alert("chapter 17-20 task9")
var a=[24,53,74,91,12];
alert("Array items are :"+a+"\nsmallest no in the array is :"+(a.sort()[0]))
//chapter 17-20 task10
alert("chapter 17-20 task10")
var result=[];
for (var o=1;o<=100;o++){
  if(o%5===0){
result.push(o);
  }
}
alert(result);




//Chapter21-25 Task1//
var firstName=prompt("Enter Your First Name:");
var secondName=prompt("Enter Second Name");
alert("Welcome! " +(firstName+" "+secondName));

//Chapter21-25 Task2//

var favcell=prompt("Enter Your Favourite Mobile Phone:");
document.write("String Length is: "+favcell.length);

//Chapter21-25 Task3//

var country="pakistani";
for (let i=0;i<country.length;i++){
    if (country[i]==='n'){
        document.write("<br>Index of 'n': "+i);
    }
}

//Chapter21-25 Task4//
var hello="Hello World";
document.write("<br>Last index of 'l' is "+(hello.lastIndexOf('l')))
var country="pakistani";
//Chapter21-25 Task5//
var country="pakistani";
for (let i=0;i<country.length;i++){
    if (i===3){
        document.write("<br>character at index 3 : "+country[3]);
    }
}
//Chapter21-25 Task6//
var firstName=prompt("Enter Your First Name:");
var secondName=prompt("Enter Second Name");
alert("Welcome! " +(firstName.concat(" ",secondName)));
//Chapter21-25 Task7//
var city='Hyderabad';

document.write("<br>City: "+city+"<br>After Replacment: "+(city.replace("Hyderabad","Islamabad")));
//Chapter21-25 Task8//
var message='Ali and Sami are best friends.They play cricket and football together.';
var message1=message.replace(/and/g,"&");
document.write("<br>"+message1);
//Chapter21-25 Task9//
var strValue="472";
var numValue=Number(strValue);
document.write("<br>Value: "+strValue+"<br>Type: "+(typeof strValue)+"<br>Value: "+numValue+"<br>Type: "+(typeof numValue))
//Chapter21-25 Task10//
var userInput="peanuts";
document.write("<br>User Input: "+userInput+"<br>Upper Case: "+userInput.toUpperCase());
//Chapter21-25 Task11//
var userInput="javascript";
document.write("<br>User Input: "+userInput+"<br>Title Case: "+(userInput.charAt(0).toUpperCase()+userInput.slice(1)));
//Chapter21-25 Task12//
var num=35.36;
var str=num.toString();
document.write("<br>Number: "+str+"<br>Result: "+(str.replace(".","")))
//Chapter21-25 Task13//
var name=prompt("USERNAME:");
for (let i=0;i<name.length;i++){
var asciiCode=name.charCodeAt(i);
if (asciiCode===33||asciiCode===44||asciiCode===46||asciiCode===64)
{
alert("ENTER A VALID NAME")
break;}
}

//Chapter21-25 Task14//
var a=['cake', 'applepie','cookie','chips','patties'];
var input=prompt("Search Here :");
if (a.includes(input.toLowerCase())){
alert(input+" is in the list at index: "+(a.indexOf(input)))}
else{alert(input+" is not in the list")}

//Chapter21-25 Task15//
var pass=prompt("Enter Password:");
if(pass.length>5){
    if(pass.charCodeAt(0)>47&&pass.charCodeAt(0)<58){
        alert("Entered Password: "+pass+"\nPassword can not start with a number\nPleast enter a valid password");
    }
    else{
        for (let i=0;i<pass.length;i++){
            var ascii=pass.charCodeAt(i);
            if  (!(ascii>47&&ascii<58||ascii>64&&ascii<91||ascii>96&&ascii<123)){
                alert("Entered Password: "+pass+"\nPassword must be only numbers and strings\nPleast enter a valid password");    
            }
        }
    }
}
else{
    alert("Entered Password: "+pass+"\nPassword must be atleast six character\nPleast enter a valid password");
}

//Chapter21-25 Task16//
var university='University of Karachi';
for (let i=0;i<university.length;i++){
    document.write(university[i]+"<br>")}
//Chapter21-25 Task17//
var userInput=prompt("Enter Something: ");
alert("User Input: "+userInput+"\nLast character of input: "+userInput[userInput.length-1]);
//Chapter21-25 Task18//
var str='the quick brown fox jumps over the lazy dog';
var count=str.match(/the/g)||[].length;
(count>0)?alert('Text: '+str+"\nThere are "+count+" occurence(s) of the word 'the'"):(alert("'the' doesnot exist "))
//Chapter26-30 Task1//
var inputNum=Number(prompt('Enter Any Positive No. :'));
if (inputNum<0){
    alert("Please Enter a Positive No.");
}
else{
    document.write("Number:"+inputNum+"<br>Round of value of the number:"+Math.round(inputNum)+"<br>Floor value: "+Math.floor(inputNum)+"<br>Ceil value: "+Math.ceil(inputNum))
}
//Chapter26-30 Task2//
var inputNum=Number(prompt('Enter Any Negative No. :'));
if (inputNum>0){
    alert("Please Enter a Negative No.");
}
else{
    document.write("Number:"+inputNum+"<br>Round of value of the number:"+Math.round(inputNum)+"<br>Floor value: "+Math.floor(inputNum)+"<br>Ceil value: "+Math.ceil(inputNum))
}
//Chapter26-30 Task3//
var no=prompt("Enter Any No. :");
alert("\n Absolute Value of No. :"+(math.abs(no)))
//Chapter26-30 Task4//
document.write("<br>Random Dice Value: "+(Math.floor(Math.random()*21)))
document.write("<br>Random Dice Value: "+(Math.floor(Math.random()*21)))
//Chapter26-30 Task5//
var randomCoinValue=Math.floor(Math.random() * (1 + 2 - 1)) + 1;
document.write("<br>"+randomCoinValue);
if(randomCoinValue===2){document.write("<br>random coin value: Heads")}
else{document.write("<br>random coin value: Tails")} 
//Chapter26-30 Task6//

var randomNumber=Math.floor(Math.random() * (1 + 100 - 1)) + 1;
document.write("<br>Random Number between 1 and 100 is "+randomNumber)

//Chapter26-30 Task7//
var weight=prompt("Enter Your Weight in Kilograms: ");
var match=weight.match(/\d+/g);
alert("The weight of user is "+(match.toString()).replace(",",".")+" kilograms");

//Chapter26-30 Task8//
var randomNumberGuess=Math.floor(Math.random() * (1 + 10 - 1)) + 1;
var number1=Number(prompt("Enter Any Number Between 1 and 10"));
if (number1===randomNumberGuess){
    alert("Congratulations")
}
else{alert("Try Again")}
//Chapter31-34 Task1//

var d = new Date();
document.write(d)
//Chapter31-34 Task2//
var d = new Date();
var month=new Array(12);
month[0] = "January";
month[1] = "Feburary";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10]= "November";
month[11]= "December";
var monthCurrent=month[d.getMonth()];
alert("Current Month: "+monthCurrent)

//Chapter31-34 Task3//

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";
var day = weekday[d.getDay()];
alert("Today is "+day);

//Chapter31-34 Task4//
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";
var day = weekday[d.getDay()];
if (day==="Sun"||day==="Sat"){
    alert("Its Fun Day");
}

//Chapter31-34 Task5//
var d = new Date();
var currentDate=d.getDate();
if (currentDate<16){alert("First Fifteen Days of Month")}
else{alert("Last Fifteen Days of Month")}
//Chapter31-34 Task6//
var d=new Date();
var dateTime1=d.getTime();
var dateTime2=new Date("01/01/1970");
var timeDiffInMilli = Math.abs(dateTime2.getTime() - dateTime1);
  var timeDiffInMinutes = Math.floor(timeDiffInMilli / 60000);
  
alert("Current Date:"+d+"\nElapsed milliseconds since januray 1 ,1970: "+timeDiffInMilli+"\nElapsed Minutes since januray 1,1970: "+timeDiffInMinutes );
//Chapter31-34 Task7//
var d=new Date();
if (d.getHours>12&&<24){alert("its PM")}
else{alert("its AM")}
//Chapter31-34 Task8//
var laterDate = new Date(2020, 11, 31, 00, 00, 00, 00);

//Chapter31-34 Task9//
var currentDate= new Date();
var ramadanDate=new Date(2015,06,15);

var dateDiff=Math.floor((currentDate.getTime()-ramadanDate.getTime())/(1000*3600*24));
alert(dateDiff+" has passed since 1st Ramadan,2015");

//Chapter31-34 Task10//
var refDate= new Date(1020,06,21);
var begDate=new Date(2015,00,00);
var secDiff=Math.abs(refDate.getTime()-begDate.getTime()/1000);
document.write("<br> On reffernce date :"+refDate+"<br>"+secDiff+" seconds had passed since beginning of 2015");
//Chapter31-34 Task11//
var currentDate=new Date();
document.write("Current Date: "+currentDate);
currentDate.setHours(currentDate.getHours()-1);
document.write("<br>1 hour ago it was :"+currentDate);
//Chapter31-34 Task12//
var currentDate=new Date();
document.write("Current Date: "+currentDate);
currentDate.setFullYear(currentDate.getFullYear()()-100);
document.write("<br>100 years back it was :"+currentDate);
//Chapter31-34 Task13//
var currentYear=new Date().getFullYear();
var birthYear=new Date(1993,01,00).getFullYear();
document.write("Your Age is "+(currentYear-birthYear)+"<br>Your birth year is "+birthYear);
//Chapter31-34 Task14//
var units=410;
var chargeperunit=16;
var latePaymentSurcharge=350;
var netAmount=Math.round((units*chargeperunit) * 100 + Number.EPSILON ) / 100;
document.write("<br><h2>K-Electric Bill</h2>");
document.write("<br>Customer Name: ABC customer");
document.write("<br>Current Month: June");
document.write("<br>Number of Units: 410");
document.write("<br>Charges per Unit: 16");
document.write("<br>Net Amount payble within due date: "+netAmount)
document.write("<br>Gross Amount Payable(After Due Date):"+(Math.round( (netAmount+latePaymentSurcharge) * 100 + Number.EPSILON ) / 100));
//Chapter35-38 Task1//
function CurrentDate(){
var d = new Date();
document.write(d)
}
CurrentDate();
//Chapter35-38 Task2//
function Greet(fname,lname){
    alert("Welcome "+(fname+" "+lname))
}
Greet('safi','saqlain')

//Chapter35-38 Task3//
var fno=Number(prompt("<br>Enter Any No.:"));
var Sno=Number(prompt("<br>Enter any Second No.:"));
function Sum(a,b){
    return a+b;
}
alert("Sum of "+fno+" and "+Sno+" is "+Sum(fno,Sno));
//Chapter35-38 Task4//

function Calculator(a,b,c){
    if (c==='+'){alert("Sum of "+a+" and "+b+" is "+(a+b))}
    else if(c==='-'){document.write("Sub of "+a+" and "+b+" is "+(a-b))}
    else if(c==='*'){document.write("Multiplication of "+a+" and "+b+" is "+(a*b))}
    else if(c==='/'){document.write("Division of "+a+" and "+b+" is"+(a/b))}
    else if(c==='%'){document.write("Remainder of "+a+" and"+b+" is"+(a%b))}
    else {document.write("wrong operator")}

}
Calculator(1,2,'+');

//Chapter35-38 Task5//
function sqr(a){
    return a*a;
}
sqr(2);
//Chapter35-38 Task6//

function factorial(a){

    for(let i=a-1;i>=1;i--){
        a=a*i
    }
    return a;
}

factorial(5);
//Chapter35-38 Task7//
function counting(a,b){
    for (let i=a;i<=b;i++){
        document.write("<br>"+i)
    }
}

//Chapter35-38 Task8//
function hypotenuse(a,b){
function sqr(c){
return c*c
}
return sqr(a)+sqr(b);
}
//Chapter35-38 Task9//
function areaofrectangle(a,b){
return a*b;
}
areaofrectangle(2,4);
var c=5,d=7;
areaofrectangle(c,d);

//Chapter35-38 Task10//
function palindrome(str){
var revstr=""
for (let i=str.length-1;i>=0;i--){
revstr=revstr+str[i];
}
if (revstr===str){alert(str+' is a palindrome')}
else{alert(str+' is not a palindrome')}
}
palindrome("civic");

//Chapter35-38 Task11//
   function titleCase(string) {
      var sentence = string.toLowerCase().split(" ");
      for(var i = 0; i< sentence.length; i++){
         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
   document.write("<br>input: "+string+"<br>Ouput: "+sentence.join(" "));
   return sentence;
   }
   titleCase("the quick brown fox");
//Chapter35-38 Task12//
   function longestString(string){
       var sentence=string.split("");
       var longest='';
       var num=0;
       for (let i=0;i<sentence.length;i++){
       if (sentence[i].length>num){
       num=sentence[i].length;
       longest=sentence[i]}
       }

       alert("String: "+string+"\nOutput: "+longest);

   }
   longestString("web development tutorial")
//Chapter35-38 Task13//
var string="JSResourceS.com";
function letterMaching(string,letter){
    var count=string.split("").filter(ch=>ch==letter).length;
(count>0)?(alert("'"+letter+"' exists "+count+" time(s) in this string")):(alert("'"+letter+"' doesnot exist"))
}
letterMaching(string,'o');

//Chapter35-38 Task14//
function calcCircumference(r){
    alert("The Circumference is "+(2*3.142*r))
    }
    
    function calcArea(r){
    alert("The Area "+(3.142*(r*r)))}

    calcCircumference(2);
    calcArea(5);



//Chapter 38-42 Task 1
function power(a,b){
    var value=a;
    for( var i=1;i<b;i++){
        value=value*a;
    }
    return value;
}
power(2,4);

//Chapter 38-42 Task 2

function leapYear(year){
if(year%4===0){
    return(year+" is a leap year");
    }
    else {
        return(year+" is not a leap year");
    }
}
leapYear(2015);

//Chapter 38-42 Task 3

function S(a,b,c){
    return (a+b+c)/2
}
function area(a,b,c){
    return S(a,b,c)*(S(a,b,c)-a)*(S(a,b,c)-b)*(S(a,b,c)-c)
}
area(2,2,2);
//Chapter 38-42 Task 4
function average(a,b,c){
    return (a+b+c)/3

}

function percentage(a,b,c){
    return  ((a+b+c)/300)*100
}
function mainFunction(a,b,c){
alert("Average of Marks is "+average(a,b,c)+"\nPercentage of Marks is "+percentage(a,b,c)+"%")
}

//Chapter 38-42 Task 5

function search(n,array){
   
    for (i=0;i<array.length;i++){
        if(array[i]===n){
            alert("\nfirst index of "+n+" is"+i);
            break;
        }
        else{
alert(n+ " is not present in array");
        }
    }

}
var beast=['a','b','c'];
search(b,beast);

//Chapter 38-42 Task 6
var text="hello my world";
function deleteVowels(str){
return str.replace(/[aeiou]/gi,"");
}
deleteVowels(text);


 
 
//Chapter 38-42 Task 7
function checkVowel(str)
{
  
var count = 0;
var found=0;


    console.log("Vowels in successions are :\n");

    for (var i = 0;i<str.length; i++)
    {
        if (isVowel(str[i]))
        {
            found++;
        }
        else
        {
            found = 0;
        }

        if (found == 2)
        {
            console.log("\n", str[i - 1], str[i]);
            found = 0;
            count++
        
        }
    }
    console.log("No of occurences are "+count)
}

    function isVowel(ch){
        switch (ch){
case 'a':
case 'e':
case 'i':
case 'o':
case 'u':
case 'A':
case 'E':
case 'I':
case 'O':
case 'U':
    return 1;
default:
    return 0;        
        }
    }

    checkVowel("my door is locked");

//Chapter 38-42 Task 8
    function distanceKm(){
        var f=0;
        var cm=0;
        var inch=0;
        var km=prompt("Enter distance in kilometers: ");
        
        /* calculate the conversion */
        m = km * 1000;
        cm = km * 1000 * 100;
        f = km * 3280.84;
        inch = km * 39370.08;
        alert("The distance in Feet:\n"+f.toFixed(2)+"\nThe distance in Inches:\n"+inch.toFixed(2)+"\nThe distance in Meters:\n"+m.toFixed(2)+"\nThe distance in Centimeters:\n"+cm.toFixed(2));}
        distanceKm();

//Chapter 38-42 Task 9
function overtime()
{
 var overtime=0;
 var time=parseInt(prompt("Enter the Hours for an employee worked above 40 hours :- "));
 i=1;
 while(i<=time)
 {
  overtime=i*12;
  i++;
 }
 alert("Overtime of this employee is Rs. :"+overtime);
}


//Chapter 38-42 Task 10
function withdrawn()
{

  
var amount=parseInt(prompt("Enter the amount to be withdrawn (in hundreds): "));


alert("\n\n You will have  : "+Math.floor(amount / 100)+" 100 note(s)"+
" "+((amount % 100) / 50)+" fifty note(s)"+
" "+(((amount % 100) % 50) / 10)+" ten note(s)"+
" and remaining Rs. : "+(((amount % 100) % 50) % 10));


}

//Chapter 43-48 Task 1

function func(){
    alert("hello world");
}
//Chapter 43-48 Task 2
function phone(){
    alert("Thanks for purchasing the phone with us");
}
//Chapter 43-48 Task 3
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }

  //Chapter 43-48 Task 4

  function over(x){
      x.src="https://tse2.explicit.bing.net/th?id=OIP.WsMZhEDh91-kyhlI1UxrWwHaEK&pid=Api&P=0&w=268&h=152";
  }
  function out(x){
      x.src="https://tse2.mm.bing.net/th?id=OIP.QQFZO_M6PszgbmK4griaFwAAAA&pid=Api&P=0&w=250&h=167";
  }

   //Chapter 43-48 Task 5
   var clicks = 0;
   function inc() {
       
       clicks += 1;
     document.getElementById("counter").innerHTML = clicks;
   
 
       }

   function dec() {
       if (clicks>0){
       clicks -= 1;
       document.getElementById("counter").innerHTML = clicks;}
       

   }

//Chapter 49-52 Task 1
function display() {
    message = "<ul><li><b>NAME: </b>" + document.form1.yourname.value;
    message += "<li><b>ADDRESS: </b>" + document.form1.address.value;
    message += "<li><b>PHONE: </b>" + document.form1.phone.value + "</ul>";
    document.getElementById("formData").innerHTML=message;

  }
//Chapter 49-52 Task 2
function viewMoreOrLess(){
    var btn=document.getElementById("details");
    var moreData=document.getElementById("more");
    if (moreData.style.display==="none"){
   moreData.style.display="block";
   btn.innerHTML="ReadLess"
 
}
else{
    moreData.style.display="none";
    btn.innerHTML="ReadMore";
  
    
}

}

//Chapter 49-52 Task 3

function removeRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("stdTable").deleteRow(i);
  }



  function edit(){
   var form=document.getElementById("hform");
   form.style.display="block";
    var table = document.getElementById('stdTable');
                
    for(var i=0; i < table.rows.length; i++)
    {
        console.log('table i',table.rows[i],i);
        table.rows[i].onclick = function()
        {
             //rIndex = this.rowIndex
             for(j=0;j<i;j++){

             document.getElementById("hname").value = document.getElementsByClassName('he1')[j].innerHTML;
             document.getElementById("haddress").value = document.getElementsByClassName('he2')[j].innerHTML;
             document.getElementById("hclass").value =  document.getElementsByClassName('he3')[j].innerHTML;
             }
            
        }
    }

  }

function add() {
    var stdTable = document.getElementById('stdTable');

    var rowCnt = stdTable.rows.length; 
     // get the number of rows.
    var tr = stdTable.insertRow(rowCnt); // table row.
  

    for (var c = 0; c <= 4; c++) {
        var td = document.createElement('td');          // TABLE DEFINITION.
        td = tr.insertCell(c);

        if (c == 0) {   // if its the first column of the table.
            // add a button control.
            var button = document.createElement('input');

            // set the attributes.
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');

            // add button's "onclick" event.
            button.setAttribute('onclick', 'removeRow(this)');

            td.appendChild(button);
        }
        else if (c==1) {
            // the 2nd, 3rd and 4th column, will have textbox.
            var ele = document.createElement('text');
            ele.setAttribute('type', 'text');
            ele.setAttribute('class','he1')
            ele.innerHTML=document.stdForm.yourname.value;
            


            td.appendChild(ele);
            document.stdForm.yourname.value="";
            

        }
        
        else if (c==2) {
            // the 2nd, 3rd and 4th column, will have textbox.
            var ele = document.createElement('p');
            ele.setAttribute('type', 'text');
            ele.setAttribute('class','he2');
            ele.innerHTML=document.stdForm.address.value;
            


            td.appendChild(ele);
            document.stdForm.address.value="";
            

        }
        else if (c==3) {
            // the 2nd, 3rd and 4th column, will have textbox.
            var ele = document.createElement('p');
            ele.setAttribute('type', 'text');
            ele.setAttribute('class','he3');
            ele.innerHTML=document.stdForm.class.value;
            


            td.appendChild(ele);
            document.stdForm.class.value="";
            

        }
       
        else  {
            // the 2nd, 3rd and 4th column, will have textbox.
            var button = document.createElement('input');

            // set the attributes.
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Edit');

            // add button's "onclick" event.
            button.setAttribute('onclick', 'edit(this)');

            td.appendChild(button);
            
        }
    }

}





   
  






 

//chapter 53-58 task 1

var array=["./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.png"];
var container=document.getElementById("container");
for (var i=0;i<array.length;i++){
   container.innerHTML+="<img  src="+array[i]+" height=200px width=200px onclick=onOpenImagModal(event) />"
 container.style.display="flex";
 container.style.justifyContent="space-around";

 
 }
 


function onOpenImagModal(event){

  var modal=document.getElementById('modal');
  modal.classList.add('modal-open');
  modal.classList.remove('modal-close');
  modal.style.display="block";
  modalImg=document.getElementById('modal-img');
modalImg.src=event.target.src;
  console.log(event.target.src);
 

}
function onClosedImagModal(){
  var modal=document.getElementById('modal');
  modal.classList.add('modal-close');
  modal.classList.remove('modal-open');
  setTimeout(()=>{ modal.style.display = "none"; }, 550)
  
}

//chapter 53-58 task2
var para=document.createElement('p');
para.setAttribute('id','pa');
var pg=document.getElementById("pa");
var text=document.createTextNode("hello world how are you all doing?");
para.appendChild(text);
var body=document.getElementById("body");
body.appendChild(para);
var zoomIn=document.createElement('button');
var zoomtext=document.createTextNode("ZoomIn");
zoomIn.appendChild(zoomtext);
body.appendChild(zoomIn);
var zoomOut=document.createElement('button');
var zoomTextOut=document.createTextNode("ZoomOut");
zoomOut.appendChild(zoomTextOut);
body.appendChild(zoomOut);
zoomIn.onclick=function(){
  document.getElementById("pa").style.fontSize="26px";
  
}
zoomOut.onclick=function(){
  document.getElementById("pa").style.fontSize="1rem";
  
}


 //chapter 58-67 task1
          //i
          var mainId=document.getElementById("main-content");
          //ii
          console.log("children:",mainId.children);
          //iii
          var render=mainId.getElementsByClassName("render");
   
          for(var i=0;i<render.length;i++){
      document.write(render[i].innerHTML)
    
        }
        //iv
        var input=document.getElementById("first-name");
        input.value="safi";

        //v
        var linput=document.getElementById("last-name");
        linput.value="saqlain";
        var ginput=document.getElementById("email");
        ginput.value="safisaqlain@gmail.com";
         
        //chapter 58-67 task2
        //i

     var formc=document.getElementById("form-content").nodeType;
     document.write("<br>nodetype of id formcontent is"+formc);
     
     //ii
     var lastName=document.getElementById("lastName");
     document.write("lastname:"+lastName.nodeType);
     document.write("<br>childnodes"+lastName.childNodes.length);
     
     
     //iii
     var textnode = document.createTextNode("Water");


var item = document.getElementById("lastName").childNodes[0];


lastName.replaceChild(textnode,item);

//
//iv

var lastChild= document.getElementById("main-content").lastElementChild.innerHTML;
var firstChild= document.getElementById("main-content").firstElementChild.innerHTML;
document.write("<br>first child:"+firstChild+"<br>last child:"+lastChild);

//v
var x = document.getElementById("lastName").previousElementSibling.nodeName;
var y=document.getElementById("lastName").nextElementSibling.nodeName;
      document.write("<br>previous sibling:"+x+"<br>next sibling:"+y);

//vi
      var emailparent = document.getElementById("email").parentNode.nodeName;
      var emailtype=document.getElementById("email").nodeType;
      document.write("<br>parent node of email is :"+emailparent+"<br> nodetype of email is :"+emailtype);