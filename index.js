function show_result(){
    let k = parseFloat(document.getElementById('k').value);
    let m = parseFloat(document.getElementById('m').value);
    let b = parseFloat(document.getElementById('b').value);
    let p = parseFloat(document.getElementById('p').value);
    let h = parseFloat(document.getElementById('h').value);
    let e = parseFloat(document.getElementById('e').value);
    let c = parseFloat(document.getElementById('c').value);
    
    let total=k+m+p+b+c+h+(e-25);
    document.getElementById('total').innerHTML=total;
    let mention;
    if(total>=427&&total<=475){
        mention='A';
    }else if(total>=380&&total<=426){
        mention='B';
    }else if(total>=332&&total<=379){
        mention='C';
    }else if(total>=286&&total<=331){
        mention='D';
    }else if(total>=237&&total<=285){
        mention='E';
    }else if(total<237){
        mention='F';
    }
    document.getElementById('mention').innerHTML=mention;
    let result=total>=237?'ជាប់':'ធ្លាក់';document.getElementById('final_result').innerHTML=result;
}