

function abc(){

    const h = document.getElementById("h").value;
    hfloat=parseFloat(h);
    const ca = document.getElementById("ca").value;    
        const co = document.getElementById("co").value;
      if(co==0 && ca!=0 && h!=0){

        catetopu=((h*h)-(ca*ca));
        document.getElementById("resultado").innerHTML = "El Cateto Opuesto es  "+Math.sqrt(catetopu);
    
      }else if(ca==0 && co!=0 && h!=0){
    
        catetoadya=((h*h)-(co*co));
        document.getElementById("resultado").innerHTML = "El Cateto adyacente es  "+Math.sqrt(catetoadya);

      }else if(h==0 && ca!=0 && co!=0){
    
        hipo=((co*co)+(ca*ca));
   
        document.getElementById("resultado").innerHTML = "La hipotenusa es "+Math.sqrt(hipo);
    
      }else alert("Ingresa solo dos datos");
}

function lll(){
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const c = document.getElementById("c").value;
  cosA=(Math.pow(b,2)+Math.pow(c,2)-Math.pow(a,2))/(2*b*c);
  angA=Math.acos(cosA) * 180 / Math.PI;
 

  /*	(c2 + a2 − b2) / 2ca*/
  cosB=(Math.pow(c,2)+Math.pow(a,2)-Math.pow(b,2))/(2*c*a);
  angB=Math.acos(cosB) * 180 / Math.PI;
 
  angC=180-angA-angB;
  document.calc.A.value = angA;
  document.calc.B.value = angB;
  document.calc.C.value = angC;
}

function lal(){
  const a = document.getElementById("a").value;
  const c = document.getElementById("c").value;
  const B = document.getElementById("B").value;
  rad=B* Math.PI / 180;
  ladob=(Math.pow(a,2)+Math.pow(c,2)-((2*a*c)* Math.cos(rad)));
  ladob=Math.sqrt(ladob);
angA=(Math.asin(a*Math.sin(rad)/ladob));
angA=angA* 180 / Math.PI;
angC=180-B-angA;
 
  document.calc.b.value = ladob;
  document.calc.A.value = angA;
  document.calc.C.value = angC;
  
}
function lla(){
  const a = document.getElementById("a").value;
  const c = document.getElementById("c").value;
  const A = document.getElementById("A").value;
  rad=A* Math.PI / 180;
angC=(Math.asin(c*Math.sin(rad)/a));
angC=angC* 180 / Math.PI;
angB=180-A-angC;
radB=angB* Math.PI / 180;

ladob=(Math.sin(radB)* a) / Math.sin(rad);

 
  document.calc.C.value = angC;
  document.calc.B.value = angB;
  document.calc.b.value = ladob;
  
}
function ala(){
  const A = document.getElementById("A").value;
  const c = document.getElementById("c").value;
  const B = document.getElementById("B").value;
  radA=A* Math.PI / 180;
  radB=B* Math.PI / 180;
  angC=180-A-B;
  radC=angC* Math.PI / 180;
ladoa=(Math.sin(radA) * c) / Math.sin(radC);
ladob=(Math.sin(radB) * c) / Math.sin(radC);
 
  document.calc.C.value = angC;
  document.calc.a.value = ladoa;
  document.calc.b.value = ladob;
  
}
function aal(){
  const A = document.getElementById("A").value;
  const a = document.getElementById("a").value;
  const B = document.getElementById("B").value;
  angC=180-A-B;
  radA=A* Math.PI / 180;
  radB=B* Math.PI / 180;
  radC=angC* Math.PI / 180;
ladob=(Math.sin(radB) * a) / Math.sin(radA);
ladoc=(Math.sin(radC) * a) / Math.sin(radA);
 
  document.calc.C.value = angC;
  document.calc.b.value = ladob;
  document.calc.c.value = ladoc;
  
}

function sumar() {

  var totalG = 0;
  var totalM = 0;
  var totalS = 0;
  
  $(".monto").each(function() {
  
  if (isNaN(parseInt($(this).val()))) {
  
    totalG += 0;
  
  } else {
  
    totalG += parseInt($(this).val());
  
  }
  
  });
  $(".monto2").each(function() {
  
    if (isNaN(parseInt($(this).val()))) {
    
      totalM += 0;
    
    } else {
    
      totalM += parseInt($(this).val());
    
    }
    
    });
    $(".monto3").each(function() {
  
      if (isNaN(parseInt($(this).val()))) {
      
        totalS += 0;
      
      } else {
      
        totalS += parseInt($(this).val());

      
      }
      
      });
  if(totalS>=60){
    totalM=totalM+(totalS/60);
    totalS=totalS%60;
  }
  if(totalM>=60){
    totalG=totalG+(totalM/60);
    totalM=totalM%60;
  }
  //alert(total);
  document.getElementById('spGrados').innerHTML = totalG+"°  "+totalM+"'  "+totalS+"'' ";
  
  }

  function restar() {

    var totalG = 0;
    var totalM = 0;
    var totalS = 0;
    
    $(".monto").each(function() {
    
    if (isNaN(parseInt($(this).val()))) {
    
      totalG += 0;
    
    } else {
    
      totalG += parseInt($(this).val());
    
    }
    
    });
    $(".monto2").each(function() {
    
      if (isNaN(parseInt($(this).val()))) {
      
        totalM += 0;
      
      } else {
      
        totalM += parseInt($(this).val());
      
      }
      
      });
      $(".monto3").each(function() {
    
        if (isNaN(parseInt($(this).val()))) {
        
          totalS += 0;
        
        } else {
        
          totalS += parseInt($(this).val());
  
        
        }
        
        });
    if(totalS>=60){
      totalM=totalM+(totalS/60);
      totalS=totalS%60;
    }
    if(totalM>=60){
      totalG=totalG+(totalM/60);
      totalM=totalM%60;
    }
    //alert(total);
    document.getElementById('spGrados').innerHTML = totalG+"°  "+totalM+"'  "+totalS+"'' ";
    
    }
    function complementario() {

      var Ang = 0;
      var AngComp = 0;
      var totalS = 0;
      
      $(".monto").each(function() {
      
      if (isNaN(parseInt($(this).val()))) {
      
        Ang = 0;
      
      } else {
      
        Ang = parseInt($(this).val());
      
      }
      
      });  
      $(".monto2").each(function() {
      
        if (isNaN(parseInt($(this).val()))) {
        
          AngComp = 0;
        
        } else if(Ang<=90){
            AngComp=90-Ang;
            AngComp = parseInt($(this).val(90-Ang));
         
          }  else {alert("Ingresa un valor valido");}
           
        
        
        });  
     
      
      }
      function suplementario() {

        var Ang = 0;
        var AngSup = 0;
        var totalS = 0;
        
        $(".monto").each(function() {
        
        if (isNaN(parseInt($(this).val()))) {
        
          Ang = 0;
        
        } else {
        
          Ang = parseInt($(this).val());
        
        }
        
        });  
        $(".monto2").each(function() {
        
          if (isNaN(parseInt($(this).val()))) {
          
            AngSup = 0;
          
          } else if(Ang<=180){
            AngSup=180-Ang;
            AngSup = parseInt($(this).val(180-Ang));
           
            }  else {alert("Ingresa un valor valido");}
             
          
          
          });  
       
        
        }

        function gradoradianes() {

          var g = 0;
          var m = 0;
          var s = 0;
          var rad = 0;
          
          $(".monto").each(function() {
          
          if (isNaN(parseInt($(this).val()))) {
          
            g = 0;
          
          } else {
          
            g = parseInt($(this).val());
          
          }
          
          });  
          $(".monto2").each(function() {
          
            if (isNaN(parseInt($(this).val()))) {
            
              m = 0;
            
            } else {
            
              m = parseInt($(this).val());
            
            }
            
            }); 
            $(".monto3").each(function() {
          
              if (isNaN(parseInt($(this).val()))) {
              
                s = 0;
              
              } else {
              
                s = parseInt($(this).val());
              
              }
              
              }); 

          $(".monto4").each(function() {
          
            if (isNaN(parseInt($(this).val()))) {
            
              rad = 0;
            
            } else if(g>=0){
              grados=g+(m/60)+(s/3600);
              rad = parseInt($(this).val(grados*(Math.PI/180)));
             
              }  else {alert("Ingresa un valor valido");}
               
            
            
            });  
         
          
          }



    function comprueba(e) {
      if ( e.value.length < 1 ) {
        e.value = '-'
      } else if ( !e.value.match(/^-/) ) {
        e.value = '-' + e.value
      }
    }





function OnFuncChange()
{
  var sel1 = document.getElementById("sel1");
  var sel2 = document.getElementById("sel2");
  var i = document.getElementById("func").selectedIndex;
  if( i<=5 )
  {
    sel1.style.display = "";
    sel2.style.display = "none";
  }
  else
  {
    sel1.style.display = "none";
    sel2.style.display = "";
  }
}
function OnSelChange()
{
  calc();
}
function calc()
{
  var i = document.getElementById("func").selectedIndex;
  var i1 = document.getElementById("degtype").selectedIndex;
  var i2 = document.getElementById("degtype2").selectedIndex;
  var x = document.calcform.x.value;
  //if( (i==3 || i==4) && (x<-1 || x>1) )
  //{
  //	alert("The value should be from -1 to 1"); 
  //	return;
  //}
  var y;
  if( i<=5 && i1==0 ) x*=Math.PI/180;
  if( i==0 ) y = Math.sin(x);
  else if( i==1 ) y = Math.cos(x);
  else if( i==2 ) y = Math.tan(x);
  else if( i==3 ) y = 1/Math.sin(x);
  else if( i==4 ) y = 1/Math.cos(x);
  else if( i==5 ) y = 1/Math.tan(x);
  else if( i==6 ) y = Math.asin(x);
  else if( i==7 ) y = Math.acos(x);
  else if( i==8 ) y = Math.atan(x);
  else if( i==9 ) y = Math.asin(1/x);
  else if( i==10 ) y = Math.acos(1/x);
  else y = Math.atan(1/x);
  if( i>=6 && i2==0 ) y*=180/Math.PI;
   y = roundnum2(y,8);
  document.calcform.y.value = y;
}
