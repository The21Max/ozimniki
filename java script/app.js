function cheack(){
    var hisobla = 0 ;
    var rad11 = document.getElementById('rad11')
    var rad12 = document.getElementById('rad12')
    var rad13 = document.getElementById('rad13')
    var rad14 = document.getElementById('rad14')

    var rad21 = document.getElementById('rad21')
    var rad22 = document.getElementById('rad22')
    var rad23 = document.getElementById('rad23')
    var rad24 = document.getElementById('rad24')

    var rad31 = document.getElementById('rad31')
    var rad32 = document.getElementById('rad32')
    var rad33 = document.getElementById('rad33')
    var rad34 = document.getElementById('rad34')

    var rad41 = document.getElementById('rad31')
    var rad42 = document.getElementById('rad32')
    var rad43 = document.getElementById('rad33')
    var rad44 = document.getElementById('rad34')
    
    var rad51 = document.getElementById('rad51')
    var rad52 = document.getElementById('rad52')
    var rad53 = document.getElementById('rad53')
    var rad54 = document.getElementById('rad54')

    var modal = document.getElementsByClassName('modal')
    var h11 = document.getElementById('h11')

// 1-savol

if(rad11.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// 2-savol

if(rad21.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// 3-savol

if(rad31.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// 4-savol

if(rad41.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`
}
else{
    h11.innerText= "notogri";
}

// 5-savol

if(rad51.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// 6-savol

if(rad61.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// 7-savol

if(rad71.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// 8-savol

if(rad81.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// 9-savol

if(rad91.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// 10-savol

if(rad101.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// 11-savol

if(rad111.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// 12-savol

if(rad121.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// 13-savol

if(rad131.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// 14-savol

if(rad141.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// 15-savol

if(rad151.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// 16-savol

if(rad161.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// 17-savol

if(rad171.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// 18-savol

if(rad181.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}
// 19-savol

if(rad191.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}
// 20-savol

if(rad201.checked == true){
    ++hisobla
    h11.innerText = `100% natijadan ${hisobla *10} % togri`;
}
else{
    h11.innerText= "notogri";
}

// javob

if(hisobla <= 14){
    h11.style.color = 'red';
    h11.innerText = `${hisobla *5}%`;
    h11.style.textAlign = 'center'
}
else{
    h11.style.color = 'green';
    h11.innerText = `${hisobla *5}%`;
    h11.style.textAlign = 'center'
}
    console.log(rad1.checked,rad2.checked,rad3.checked,rad4.checked);
}