$(window).ready(function(){
    $.get(`/sde_design/skin2/inc/header.html`,(data)=>{$("#header").prepend(data)})
    $.get(`/sde_design/skin2/inc/footer.html`,(data)=>{$("#footer").prepend(data)})
})