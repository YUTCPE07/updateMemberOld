$("body").fadeIn();


$(".head-text-btnBuy").click(function(){
	window.open("https://www.memberin.com/promotion.php");
});

$(".appleStore").click(function(){
	window.open('https://itunes.apple.com/th/app/memberln/id1099214746?mt=8');
});

$(".googlePlay").click(function(){
	window.open('https://play.google.com/store/apps/details?id=com.prompt.memberin');
});

$(".regiter").click(function(){
	console.log('regiter')
	window.open('https://www.memberin.com/signregister.php');
});

$(".footerIconSocial.mail").click(function(){
	console.log('mail')
});

$(".footerIconSocial.line").click(function(){
	console.log('line')
});

$(".facebook").click(function(){
	console.log('facebook')
	// window.open('https://www.facebook.com/MemberInApp/');
	// window.open('https://www.facebook.com/MemberInApp/', '_blank', 'location=yes,height=768,width=1024,scrollbars=yes,status=yes');
	popup('https://www.facebook.com/MemberInApp/',1024,768);
});

$(".youtube").click(function(){
	console.log('youtube')
	popup('https://www.youtube.com/channel/UCQwsfxA8-AzRLJ4NGwezqrg/featured',1024,768);
	// window.open('https://www.youtube.com/channel/UCQwsfxA8-AzRLJ4NGwezqrg/featured');
});

$(".footerIconSocial.instagram").click(function(){
	console.log('instagram')
});

$(".footerIconSocial.google").click(function(){
	console.log('google')
});

function popup(e,n,o){var t=screen.width?(screen.width-n)/2:100,s=screen.height?(screen.height-o)/2:100,h="",i="menubar=no,toolbar=no,resizable=yes,scrollbars=yes";i=i+",width="+n+",height="+o+",top="+s+",left="+t+";",window.open(e,h,i)}

function backToTop(){
	$('html, body').animate({scrollTop:0}, 2000);
	
}


