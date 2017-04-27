/**
 * Created by facelessmind on 27.04.2017.
 */
function hello(...strs){
    let ff=strs[strs.length-1];
    for (let i=0;i<strs.length-1;i++){
        console.log(ff(strs[i]));
    }
}

hello("abc","def","ghi",function (s){
    return s.toUpperCase()
});