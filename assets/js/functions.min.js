$(function(){isMob()
smoothScroll(300);playOnScroll();showEventDetails();changeFrame();$("header h1").fitText(1,{minFontSize:'38px',maxFontSize:'72px'});$(".info p").fitText(1,{minFontSize:'14px',maxFontSize:'20px'});$(".biglink").fitText(1.5);$('textarea').autosize();$(".rotate").click(function(){$(':nth-child(3)',this).toggleClass('down');})});function changeFrame(){$('#cont_c8d46d3f4ddbd6b23245b21e43430211').css('display','flex');$('#cont_c8d46d3f4ddbd6b23245b21e43430211').css('justify-content','center');$('#cont_c8d46d3f4ddbd6b23245b21e43430211').css('align-items','center');$('#cont_c8d46d3f4ddbd6b23245b21e43430211').css('height','520px');}
function playOnScroll(){var selection=$('#titlecontent')
$(window).scroll(function(e){if($('#story').visible()){selection.addClass('play');$(window).off('scroll');}});$('#story').click(function(){selection.css('animation-play-state','running')
selection.removeClass('play')
selection.toggleClass('pause')
console.log("ok")});}
function isMob(){var isMobile=window.matchMedia("only screen and (max-width: 760px)");if(isMobile.matches){$('a[href="schedule.html"]').attr('href','#mobile-cal')}}
function showEventDetails(){$(".event-container").click(function(){$eventInfo=$(this).siblings(".event-info");if($eventInfo.is(":visible")===true){$eventInfo.toggle();return;}
$(".event-info").hide();$eventInfo.toggle();})
$(".event-info").click(function(){$(this).siblings(".event-container").click();})}
function smoothScroll(duration){$('a[href^="#"]').on('click',function(event){var target=$($(this).attr('href'));if(target.length){event.preventDefault();$('html, body').animate({scrollTop:target.offset().top},duration);}});}
function workLoad(){$.ajaxSetup({cache:false});$('.thumb-unit').click(function(){var $this=$(this),newFolder=$this.data('folder')
newTitle=$this.find('strong').text()
var spinner='<div class="loader">Loading...</div>',newHTML='/work/'+newFolder+'.html';$('.project-load').html(spinner).load(newHTML);$('.project-title').text(newTitle)});}
(function($){$.fn.fitText=function(kompressor,options){var compressor=kompressor||1,settings=$.extend({'minFontSize':Number.NEGATIVE_INFINITY,'maxFontSize':Number.POSITIVE_INFINITY},options);return this.each(function(){var $this=$(this);var resizer=function(){$this.css('font-size',Math.max(Math.min($this.width()/(compressor*10),parseFloat(settings.maxFontSize)),parseFloat(settings.minFontSize)));};resizer();$(window).on('resize.fittext orientationchange.fittext',resizer);});};})(jQuery);(function($){var
defaults={className:'autosizejs',id:'autosizejs',append:'\n',callback:false,resizeDelay:10,placeholder:true},copy='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',typographyStyles=['fontFamily','fontSize','fontWeight','fontStyle','letterSpacing','textTransform','wordSpacing','textIndent','whiteSpace'],mirrored,mirror=$(copy).data('autosize',true)[0];mirror.style.lineHeight='99px';if($(mirror).css('lineHeight')==='99px'){typographyStyles.push('lineHeight');}
mirror.style.lineHeight='';$.fn.autosize=function(options){if(!this.length){return this;}
options=$.extend({},defaults,options||{});if(mirror.parentNode!==document.body){$(document.body).append(mirror);}
return this.each(function(){var
ta=this,$ta=$(ta),maxHeight,minHeight,boxOffset=0,callback=$.isFunction(options.callback),originalStyles={height:ta.style.height,overflow:ta.style.overflow,overflowY:ta.style.overflowY,wordWrap:ta.style.wordWrap,resize:ta.style.resize},timeout,width=$ta.width(),taResize=$ta.css('resize');if($ta.data('autosize')){return;}
$ta.data('autosize',true);if($ta.css('box-sizing')==='border-box'||$ta.css('-moz-box-sizing')==='border-box'||$ta.css('-webkit-box-sizing')==='border-box'){boxOffset=$ta.outerHeight()-$ta.height();}
minHeight=Math.max(parseInt($ta.css('minHeight'),10)-boxOffset||0,$ta.height());$ta.css({overflow:'hidden',overflowY:'hidden',wordWrap:'break-word'});if(taResize==='vertical'){$ta.css('resize','none');}else if(taResize==='both'){$ta.css('resize','horizontal');}
function setWidth(){var width;var style=window.getComputedStyle?window.getComputedStyle(ta,null):false;if(style){width=ta.getBoundingClientRect().width;if(width===0||typeof width!=='number'){width=parseInt(style.width,10);}
$.each(['paddingLeft','paddingRight','borderLeftWidth','borderRightWidth'],function(i,val){width-=parseInt(style[val],10);});}else{width=$ta.width();}
mirror.style.width=Math.max(width,0)+'px';}
function initMirror(){var styles={};mirrored=ta;mirror.className=options.className;mirror.id=options.id;maxHeight=parseInt($ta.css('maxHeight'),10);$.each(typographyStyles,function(i,val){styles[val]=$ta.css(val);});$(mirror).css(styles).attr('wrap',$ta.attr('wrap'));setWidth();if(window.chrome){var width=ta.style.width;ta.style.width='0px';var ignore=ta.offsetWidth;ta.style.width=width;}}
function adjust(){var height,original;if(mirrored!==ta){initMirror();}else{setWidth();}
if(!ta.value&&options.placeholder){mirror.value=($ta.attr("placeholder")||'')+options.append;}else{mirror.value=ta.value+options.append;}
mirror.style.overflowY=ta.style.overflowY;original=parseInt(ta.style.height,10);mirror.scrollTop=0;mirror.scrollTop=9e4;height=mirror.scrollTop;if(maxHeight&&height>maxHeight){ta.style.overflowY='scroll';height=maxHeight;}else{ta.style.overflowY='hidden';if(height<minHeight){height=minHeight;}}
height+=boxOffset;if(original!==height){ta.style.height=height+'px';if(callback){options.callback.call(ta,ta);}
$ta.trigger('autosize.resized');}}
function resize(){clearTimeout(timeout);timeout=setTimeout(function(){var newWidth=$ta.width();if(newWidth!==width){width=newWidth;adjust();}},parseInt(options.resizeDelay,10));}
if('onpropertychange'in ta){if('oninput'in ta){$ta.on('input.autosize keyup.autosize',adjust);}else{$ta.on('propertychange.autosize',function(){if(event.propertyName==='value'){adjust();}});}}else{$ta.on('input.autosize',adjust);}
if(options.resizeDelay!==false){$(window).on('resize.autosize',resize);}
$ta.on('autosize.resize',adjust);$ta.on('autosize.resizeIncludeStyle',function(){mirrored=null;adjust();});$ta.on('autosize.destroy',function(){mirrored=null;clearTimeout(timeout);$(window).off('resize',resize);$ta.off('autosize').off('.autosize').css(originalStyles).removeData('autosize');});adjust();});};}(jQuery||$));