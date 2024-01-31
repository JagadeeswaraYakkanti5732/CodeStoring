// arthematic operators 
/*let x=56;
let y =90;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x**y); 
console.log(x);*/

// function createCircle(radius)
// {
//     return{
//         radius,
//         draw()
//         {
//             console.log('ok');
//         }
//     };
// }
//     createCircle(1);

    //finding elements (primitive)

    /*const numbers =[1,2,3,1,4];

    console.log(numbers.indexOf('a'));

    console.log(numbers.indexOf('1'));

    console.log(numbers.indexOf(1));

    console.log(numbers.indexOf(2));

    console.log(numbers.lastIndexOf(1));

    console.log(numbers.indexOf(1) !==-1);

    console.log(numbers.includes(1));

    console.log(numbers.indexOf(1,2));*/


    //finding elememts (reference types )

    const courses=[

        
        
        {id:1, name1:'a'},   
        {id:2, name1:'b'},   
     ];

     //console.log(courses.includes({id:1,name1:'a'}));

    //  const course =courses.find(function(course){

    //     return course.name1 ==='a'
        //return course.name1 ==='xy' -- undefined

        const course =courses.findIndex(function(course){

              return course.name1 ==='a'


     });

     console.log(course);






    


