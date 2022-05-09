$(window).ready(function(){
    $.get(`/sde_design/skin2/inc/header.html`,(data)=>{$("#header").prepend(data)})
})