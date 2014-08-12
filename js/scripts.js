
//////////////////////////////
/*    write global navs     */
//////////////////////////////
function wParentNav() {
	document.write('<div class="container" id="parent-nav"><div class="row"><div class="hidden-xs col-xs-12 col-sm-8"><ul class="list-unstyled"><li><a href="http://www.cvs.com" title="CVS.com" target="_self"><img src="/img/global/nav/cvs.png" alt="CVS.com" /></a></li><li><a href="/default.aspx" title="CVS DVD Transfer Services" target="_self"><img src="/img/global/nav/dvd-transfer-services.png" alt="CVS DVD Transfer Services" /></a></li><li><a href="http://www.cvsphoto.com" title"CVS Photo" target="_self"><img src="/img/global/nav/photo.png" alt="CVS Photo" /></a></li></ul></div>');
  document.write('<div class="col-xs-12 col-sm-4" id="signup"><a href="#" data-reveal-id="getoffers" title="Get Special Offers" class=""><img src="/img/global/nav/get-special-offers.png" alt="Get Special Offers" /></a></div>');
  document.write('</div></div><!-- end #parent-nav.container --><div class="clearfix"></div>');
}

function wSubNavRow() {
	document.write('<div class="container" id="sub-nav-row"><div class="row"><div class="col-xs-12 col-sm-6"><div class="logorow"><span id="logoCVS"><a href="http://www.cvsphoto.com" title="CVSYesDVD.com" target="_self"><img src="/img/global/nav/logo-cvs.png" alt="CVS Photo DVD services provided by YesVideo" /></a></span><span class="pole"><a href="#" title="">&nbsp;</a></span><span id="logoYesVideo"><a href="http://www.cvsyesdvd.com" title="YesVideo.com" target="_self"><img src="/img/global/nav/logo-yesvideo.png" alt="CVS Photo DVD services provided by YesVideo" id="logoYesVideo" /></a></span></div></div><div class="hidden-xs col-sm-6"><ul class="list-unstyled" id="sub-nav"><li><a href="/track-my-order.aspx" target="_self">Track My Order</a></li><li> | </li><li><a href="/help.aspx" target="_self">Help</a></li>');
	//<!--
    //<li> | </li>
    //<li><a href="" target="_self"><img src="/img/global/nav/cart.gif" alt="Shopping Cart" id="cart" /></a> <a href="" target="_self">Shopping Cart</a></li>
    //-->
    document.write('</ul><ul class="list-unstyled" id="sub-nav-text"><li>Questions? Call 1-877-817-5375</li></ul></div></div></div><!-- end: #sub-nav-row.container --><div class="clearfix"></div>');
}

function wMainNav() {
	document.write('<div class="container" id="main-nav"><div class="row"><div class="col-xs-12 hidden-xs"><ul class="list-unstyled"><a href="/default.aspx" target="_self"><li class="col-xs-2">Home</li></a><a href="/services-pricing.aspx" target="_self"><li class="col-xs-3">Services &amp; Pricing</li></a><a href="/how-it-works.aspx" target="_self"><li class="col-xs-2">How It Works</li></a><a href="/mobile-apps.aspx" target="_self"><li class="col-xs-2">Mobile Apps</li></a><a href="/my-videos.aspx" target="_self"><li class="col-xs-3">My Videos</li></a></ul></div></div></div><div class="container" id="mobile-nav"><div class="row" id="mobile-nav"><div class="col-xs-12 visible-xs"><div class="btn-group"><button class="btn dropdown-toggle" data-toggle="dropdown" type="button">Menu</button><button class="btn dropdown-toggle" data-toggle="dropdown" type="button"><span class="caret"></span></button><ul class="dropdown-menu pull-right"><li><a role="menuitem" data-target="#" href="/default.aspx">Home</a></li><li><a role="menuitem" data-target="#" href="/services-pricing.aspx">Services &amp; Pricing</a></li><li><a role="menuitem" data-target="#" href="/how-it-works.aspx">How It Works</a></li><li><a role="menuitem" data-target="#" href="/mobile-apps.aspx">Mobile Apps</a></li><li><a role="menuitem" data-target="#" href="/my-videos.aspx">My Videos</a></li><li><a role="menuitem" data-target="#" href="/track-my-order.aspx">Track My Order</a></li><li><a role="menuitem" data-target="#" href="/help.aspx">Help</a></li></ul></div></div></div></div><!-- end: #main-nav --><div class="clearfix"></div>');
}

//////////////////////////////
/*          footer          */
//////////////////////////////

var today = new Date();
var yyyy = today.getFullYear();

function wFooter() {
  document.write('<div class="container" id="footer"><div class="row"><div class="col-xs-12"><h5>Transfer Home Videos, Camcorder Tapes, Film, Slides, Prints or Negatives to DVD</h5><p>Two easy ordering options, simply bring your video tape, movie film, slides, prints or negatives to your local CVS Photo or order online and send your tapes and reels directly to YesVideo. We\'ll easily transfer your video to DVD! You can even check the status of your videos to DVD or image scanning order anytime. CVS Photo and YesVideo will return your originals and your new DVDs when your DVD conversion is complete.</p>Copyright &copy;'+yyyy+' CVS and YesVideo, Inc. All rights reserved.</div></div><div class="row"><div class="col-xs-12"><ul class="list-unstyled"><li><a href="/default.aspx" target="_self">Home</a></li><li class="pole"></li><li><a href="/services-pricing.aspx" target="_self">Services &amp; Pricing</a></li><li class="pole"></li><li><a href="/how-it-works.aspx" target="_self">How It Works</a></li><li class="pole"></li><li><a href="/mobile-apps.aspx" target="_self">Mobile Apps</a></li><li class="pole"></li><li><a href="/my-videos.aspx" target="_self">My Videos</a></li></ul></div></div></div><!-- end: #footer --><div class="clearfix"></div>');
}

//////////////////////////////
/*  write order now module  */
/*     on service pages     */
//////////////////////////////

function wOrderNow() {
  document.write('<div class="row" id="ordernow"><div class="col-xs-12"><div class="steptext"><h2>Order Now</h2></div></div><div class="col-xs-12 col-sm-4"><div class="stepimg"><img src="/img/services/cvs-store.jpg" alt="" /></div></div><div class="col-xs-12 col-sm-8"><div class="steptext"><h5>Placing your transfer order is easy. Fill out your order form online, then bring it to your local CVS Photo or ship directly to YesVideo.</h5><div class="choices"><button type="button" class="btnOrange h5" onclick="location.href=\'http://order.yesvideo.com/StoreSelector.aspx?pid=37&rtid=0&st=0\';">Drop off at CVS</button> <span>OR</span> <button type="button" class="btnOrange h5" onclick="location.href=\'http://cvsphoto.yesvideo.com\';">Ship to YesVideo</button></div></div></div></div>');
}

//////////////////////////////
/*      reveal modals       */
//////////////////////////////

function wOrderNowModal() {
  document.write('<div id="ordernowmodal" class="reveal-modal"><h2>Order Now</h2><h3>How would you like to place your order?</h3><div class="dropoffbox"><h4>Drop Off at CVS Photo</h4><img src="/img/global/ordernow/imgDropoff.jpg" alt="" /><p>Prepare your order to bring to your local CVS/pharmacy</p><button type="button" class="btnOrange h4" onclick="location.href=\'http://order.yesvideo.com/StoreSelector.aspx?pid=37&rtid=0&st=0\';">Go!</button></div><div class="shipbox"><h4>Order Online</h4><img src="/img/global/ordernow/imgShip.jpg" alt="" /><p>Ship directly to YesVideo<br /><br /></p><button type="button" class="btnOrange h4" onclick="location.href=\'http://cvsphoto.yesvideo.com\';">Go!</button></div><div class="clear"></div><a class="close-reveal-modal">&#215;</a></div>');
}

function wGetOffers() {
  document.write('<div id="getoffers" class="reveal-modal"><h2>Special Offers from CVS Photo &amp; YesVideo</h2><h3>Enter your email below to receive special offers from YesVideo and CVSPhoto.</h3><form action="http://whatcounts.com/bin/listctrl" method="POST"><input type="hidden" name="slid" value="5C84B893BD6D939E5899171A16ACC8F29F5EDC9A5AB4FEBA"><input type="hidden" name="cmd" value="subscribe"><input type="hidden" name="goto" value="http://www.lindapinda.com/thank-you.aspx"><input type="hidden" name="errors_to" value="http://www.lindapinda.com/thank-you.aspx"><input type="text" id="email" value="your email" name="email" size="25" onfocus="if($(this).val() == \'your email\') $(this).val(\'\')" onblur="if($(this).val() == \'\') $(this).val(\'your email\')"><input type="hidden" id="format_html" name="format" value="html"><div class="btnsignup"><button type="submit" class="btnOrange h4">Sign Up</button></div></form><div class="clear"></div><a class="close-reveal-modal">&#215;</a></div>');
}

function wGetOffersThankYou() {
  document.write('<div id="getoffersthankyou" class="reveal-modal"><h2>Thanks for signing up!</h2><div class="btnsignup"><button type="button" class="btnOrange h4 close-reveal-modal">Return to CVSYesDVD.com</button></div><div class="clear"></div><a class="close-reveal-modal">&#215;</a></div>');
}

function wNoAccount() {
  document.write('<div id="noaccount" class="reveal-modal"><h2>No account?</h2><p>Every home video transfer through YesVideo and CVS Photo includes a free unlimited online video library. Here you can view, edit, and share videos with friends and family miles away. This account must be created with your email address at the time of order. If you did not provide your email address at the time of order and would still like to create a free online account click here.</p><button type="button" class="btnOrange h4" onclick="location.href=\'http://share.yesvideo.com\';">Create Account</button><a class="close-reveal-modal">&#215;</a></div>');
}


//////////////////////////////
/*        tracking          */
//////////////////////////////

function passValues() {
  var lastName = document.getElementsByName('lastname')[0].value;
  var envNum = document.getElementsByName('Envelope')[0].value;
  var phone = document.getElementsByName('areacode')[0].value+document.getElementsByName('phone')[0].value+document.getElementsByName('phone2')[0].value;
  
  if (envNum) {
    document.forms[0].action += "&envelope=" + envNum;
  }
  if (phone) {
    document.forms[0].action += "&phone=" + phone;
  }
  if (lastName) {
    document.forms[0].action += "&lastname=" + lastName;
  }

  return true;
}

//////////////////////////////
/*     tracking results     */
//////////////////////////////
var urlParams = {};
(function () {
  var e,
  a = /\+/g,  // Regex for replacing addition symbol with a space
  r = /([^&=]+)=?([^&]*)/g,
  d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
  q = window.location.search.substring(1);

  while (e = r.exec(q))
    urlParams[d(e[1])] = d(e[2]);
}) ();

// Create a href string from the URL params and our known URL
var theLocation = "http://oms2beta.yesvideo.com/OMS.Support/Customer/OrderStatus.aspx?1=1";
if (urlParams["envelope"]) theLocation += "&envelope=" + urlParams["envelope"];
if (urlParams["lastname"]) theLocation += "&lastname="+urlParams["lastname"];
if (urlParams["phone"]) theLocation += "&phone="+urlParams["phone"];

//alert(theLocation);
//if (document.getElementById('theIframe')) {
  document.getElementById('theIframe').src = theLocation;
//}