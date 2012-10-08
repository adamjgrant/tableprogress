$('td.bar').each(function() {
   var inlineWidth = "" + this.style.cssText;
   inlineWidth = inlineWidth.replace('%','').replace(';','').replace(':','').replace(' ','').replace('width','');
   inlineWidth = parseInt(inlineWidth, 10);
   var colSpan = $(this).attr('colspan');
   var newWidth = inlineWidth * colSpan + '%';
   $(this).css('width', newWidth);
})
.on('mouseover',function() {
   $(this).parent().next().css('color','transparent'); 
})
.on('mouseleave', function() {
   $(this).parent().next().css('color','inherit');
});
