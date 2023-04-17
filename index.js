document.addEventListener('click' function(e){
    return navHtml1(e.target.dataset.nav);
    

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

    document.getElementById('navigation').innerHTML = navHtml1;

};