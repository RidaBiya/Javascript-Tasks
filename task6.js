// making calculator
function calculator()
// calculator=()=> arrow function
{
    var a=parseFloat(prompt("Enter Firt Number"))
    var oper=prompt("enter any operator + - * /")
    var b=parseFloat(prompt("Enter second Number"))

    if
        (oper=='+')
        alert(a+b)

    else if
        (oper=='-')
        alert(a-b)
   else if
        (oper=='*')
        alert(a*b)
    else if
        (oper=='/')
        alert(a/b)
        
    else{
            alert('Invalid Operator')
        }
}



function max()
{
    var arr=[100,200,300,400,500,600,700,800,900]
    max=arr[0]
    for(let i=0; i<arr.length; i++)
     {
        if(arr[i]>max)
      {
          max=arr[i]
      }
    }
    alert(max)
}




// function sum(height,width)
// {
//     var area=height*width
//     return area
// }
// let x=sum(1,2)
// alert(x)
// function volume(breadth)
// {
// volume=height*width*breadth
// }
// let x1=area(5,6)
// alert(x)

 function attandas (att)
 {
     return att
 }
 attandas(10)
 function student_name()
 {
     let a=parseInt(prompt("enter attandas"))
     let x=attandas(10)
     alert("name of student"+name+"his attandence"+x)
 }




