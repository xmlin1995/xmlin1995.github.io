function f_brokenheart(e){if(e>=3.8&&e<=3.9){return new="" array(-2.2,-2.4,1.8,2,2.2)}var="" t="-5;var" n="5;var" r="new" array;var="" i="false;var" s;for(s="t;s<n;s+=.001){var" o="17*Math.pow(s,2)-16*Math.abs(s)*e+17*Math.pow(e,2)+350/Math.abs(5*s+Math.sin(5*e))<225;if(i^o){r.push(s)}i=o}return" r}function="" getheartpoint(e){var="" array(offsetx+n,offsety+r)}function="" startheartanimation(){var="" e="-6;var">t){clearInterval(i);showMessages()}else{r+=.2}},n)}function timeElapse(e){var t=Date();var n=(Date.parse(t)-Date.parse(e))/1e3;var r=Math.floor(n/(3600*24));n=n%(3600*24);var i=Math.floor(n/3600);if(i<10){i="0"+i}n=n%3600;var s="Math.floor(n/60);if(s<10){s="0"+s}n=n%60;if(n<10){n="0"+n}var" o="    <span class="digit">" +r+'<="" span=""> days <span class="digit">'+i+'</span> hrs <span class="digit"><br>  '+s+'</span> mins <span class="digit">'+n+"</span> secs";$("#elapseClock").html(o)}function showMessages(){adjustWordsPosition();$("#messages").fadeIn(5e3,function(){showLoveU()})}function adjustWordsPosition(){$("#words").css("position","absolute");$("#words").css("top",$("#garden").position().top+130);$("#words").css("left",$("#garden").position().left+83)}function adjustCodePosition(){$("#code").css("margin-top",($("#garden").height()-$("#code").height())/2)}function showLoveU(){$("#loveu").fadeIn(3e3)}var $window=$(window),gardenCtx,gardenCanvas,$garden,garden;var clientWidth=$(window).width();var clientHeight=$(window).height();$(function(){$loveHeart=$("#loveHeart");var e=$loveHeart.width()/2;var t=$loveHeart.height()/2;$garden=$("#garden");gardenCanvas=$garden[0];gardenCanvas.width=$("#loveHeart").width();gardenCanvas.height=$("#loveHeart").height();gardenCtx=gardenCanvas.getContext("2d");gardenCtx.globalCompositeOperation="lighter";garden=new Garden(gardenCtx,gardenCanvas);$("#content").css("width",$loveHeart.width()+$("#code").width());$("#content").css("height",Math.max($loveHeart.height(),$("#code").height()));$("#content").css("margin-top",Math.max(($window.height()-$("#content").height())/2,10));$("#content").css("margin-left",Math.max(($window.width()-$("#content").width())/2,10));setInterval(function(){garden.render()},Garden.options.growSpeed)});$(window).resize(function(){var e=$(window).width();var t=$(window).height();if(e!=clientWidth&&t!=clientHeight){location.replace(location)}});(function(e){e.fn.typewriter=function(){this.each(function(){var t=e(this),n=t.html(),r=0;t.html("");var i=setInterval(function(){var e=n.substr(r,1);if(e=="<"){r=n.indexof(">",r)+1}else{r++}t.html(n.substring(0,r)+(r&1?"_":""));if(r>=n.length){clearInterval(i)}},17)});return this}})(jQuery);
function Vector(e,t){this.x=e;this.y=t}function Petal(e,t,n,r,i,s){this.stretchA=e;this.stretchB=t;this.startAngle=n;this.angle=r;this.bloom=s;this.growFactor=i;this.r=1;this.isfinished=false}function Bloom(e,t,n,r,i){this.p=e;this.r=t;this.c=n;this.pc=r;this.petals=[];this.garden=i;this.init();this.garden.addBloom(this)}function Garden(e,t){this.blooms=[];this.element=t;this.ctx=e}Vector.prototype={rotate:function(e){var t=this.x;var n=this.y;this.x=Math.cos(e)*t-Math.sin(e)*n;this.y=Math.sin(e)*t+Math.cos(e)*n;return this},mult:function(e){this.x*=e;this.y*=e;return this},clone:function(){return new Vector(this.x,this.y)},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},subtract:function(e){this.x-=e.x;this.y-=e.y;return this},set:function(e,t){this.x=e;this.y=t;return this}};Petal.prototype={draw:function(){var e=this.bloom.garden.ctx;var t,n,r,i;t=(new Vector(0,this.r)).rotate(Garden.degrad(this.startAngle));n=t.clone().rotate(Garden.degrad(this.angle));r=t.clone().mult(this.stretchA);i=n.clone().mult(this.stretchB);e.strokeStyle=this.bloom.c;e.beginPath();e.moveTo(t.x,t.y);e.bezierCurveTo(r.x,r.y,i.x,i.y,n.x,n.y);e.stroke()},render:function(){if(this.r</"){r=n.indexof("></10){i="0"+i}n=n%3600;var></=3.9){return>