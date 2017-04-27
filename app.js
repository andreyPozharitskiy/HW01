/**
 * Created by facelessmind on 27.04.2017.
 */
let str=prompt(`Введтите строку`);

function poly(s){
    let normalizedStr="";
    for (let i=0;i<s.length;i++){
        if (s[i]!=" "){
            normalizedStr+=s[i];
        }
    }

    normalizedStr=normalizedStr.toLowerCase();
    let reflection="";

    for (let i=normalizedStr.length-1;i>=0;i--){
        reflection+=normalizedStr[i];
    }

    if (reflection==normalizedStr){
        return true;
    }else{
        return false;
    }

}

alert ((poly(str))?(`Строка "${str}" является полиндромом.`):(`Строка "${str}" не является полиндромом.`));