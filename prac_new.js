let nam="Kwame";
let where_picker=2;
let where_inaction;
let student={
    name:nam,
    gender:"male",
    education:{
        basic:{ where:"Beposo",when:"2003",cert:"bece"},
        secondary:{ where:"Wa",when:"2016",cert:"Wassce"},
        tertiary:{ where:"Wenchi",when:"2019",cert:"Bsc Degree"},

         fullname:function(){
            return   
         }
    }
}
function wher(){
if(where_picker==1){
where_inaction=student.education.basic.where
};
if(where_picker==2){
    where_inaction=student.education.secondary.where
};
if(where_picker==3){
    where_inaction=student.education.tertiary.where
};
return where_inaction;
}
console.log(wher());
