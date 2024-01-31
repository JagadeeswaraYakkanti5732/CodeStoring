const matheMatical={
    a:1,
    b:3,
    c:null,
    add:function() {
        console.log(c=this.a+this.b);  
       
    },
    sub:function() {
        console.log(c=this.a-this.b);  
    },
    swp:function() {
        c=this.a;
        a=this.b;
        b=c;
        console.log('swapping numbers :',a,b);  
           
        }
    };
 
   
 matheMatical.add();
 matheMatical.sub();
 matheMatical.swp();
