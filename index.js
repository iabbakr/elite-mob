document.addEventListener('click' function(e){
    navHtml1(e.target.da);
    

});


function navHtml(){
    let navHtml1 = `
            
    <div class="aside-nav">phones</div>
            <div class="aside-nav">phones</div>
            <div class="aside-nav">phones</div>
            <div class="aside-nav">phones</div>
            <div class="aside-nav">phones</div>
            <div class="aside-nav">phones</div>
            <div class="aside-nav">phones</div>
    `;

    document.getElementById('navigation').innerHTML += navHtml1;

};