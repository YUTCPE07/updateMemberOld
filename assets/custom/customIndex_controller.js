$("body").fadeIn();

$(".imgWellcome_buy").click(function(){
	console.log('buy')
	
	window.location.href = 'https://www.memberin.com/promotion.php';
	
});

$(".appleStore").click(function(){
	console.log('appleStore')
});

$(".googlePlay").click(function(){
	console.log('googlePlay')
});

$(".regiter").click(function(){
	console.log('regiter')
	window.location.href = 'https://www.memberin.com/signregister.php';
});

$(".footerIconSocial.mail").click(function(){
	console.log('mail')
});

$(".footerIconSocial.line").click(function(){
	console.log('line')
});

$(".footerIconSocial.facebook").click(function(){
	console.log('facebook')
	window.location.href = 'https://www.facebook.com/MemberInApp/';
});

$(".footerIconSocial.youtube").click(function(){
	console.log('youtube')
	window.location.href = 'https://www.youtube.com/channel/UCQwsfxA8-AzRLJ4NGwezqrg/featured';
});

$(".footerIconSocial.instagram").click(function(){
	console.log('instagram')
});

$(".footerIconSocial.google").click(function(){
	console.log('google')
});





function backToTop(){
	$('html, body').animate({scrollTop:0}, 2000);
	
}


