var Style=
{
	style:null,
	className:
	{
		module:"module-",
		header:"blackheader",
		nav:"blacknav",
		blacktheme:"blacktheme",
		navButton:"navbutton",
		button:"blackbutton",
		footer:"module-footer",
		carouselLeftButton:"carouselleftbutton",
		carouselRightButton:"carouselrightbutton",
		formInputTitle:"forminputtitle",
		formInputHolder:"forminputholder",
		formTextArea:"formtextarea",
		formInput:"forminput",
		homeIcon:"home-icon",
		tablecell:"tablecell",
		view:"view",
		pageNav:"page-nav",
		clearBoth:"clearboth"
	},
	defaultStyle:".pageScroller{background-color: #333;}.floatLeft{float:left;}.social-holder{overflow:hidden;height:25px;}.view{background-color: #fff;height: 100%;}@import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:700,400); @import url(http://fonts.googleapis.com/css?family=Roboto:500,400); @font-face { font-family: 'FontAwesome'; src: url('http://fahimchowdhury.com/fonts/fontawesome-webfont.eot?v=3.0.1'); src: url('http://fahimchowdhury.com/fonts/fontawesome-webfont.eot?#iefix&v=3.0.1') format('embedded-opentype'), url('http://fahimchowdhury.com/fonts/fontawesome-webfont.woff?v=3.0.1') format('woff'), url('http://fahimchowdhury.com/fonts/fontawesome-webfont.ttf?v=3.0.1') format('truetype'); font-weight: normal; font-style: normal; } .blacktheme { min-height:45px; width:100%; background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2JhKDU4LDY3LDc0LDEpOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYmEoMjIsMzEsMzgsMSk7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjZ3JhZGllbnQpIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiAvPjwvc3ZnPg==); /* Opera 11.10+ */ background: -o-linear-gradient(top, rgba(58,67,74,1), rgba(22,31,38,1)); /* Firefox 3.6+ */ background: -moz-linear-gradient(top, rgba(58,67,74,1), rgba(22,31,38,1)); /* Chrome 7+ & Safari 5.03+ */ background: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(58,67,74,1)), color-stop(1, rgba(22,31,38,1))); /* IE5.5 - IE7 */ filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0,StartColorStr=#FF3A434A,EndColorStr=#FF161F26); /* IE8 */ -ms-filter: 'progid:DXImageTransform.Microsoft.Gradient(GradientType=0,StartColorStr=#FF3A434A,EndColorStr=#FF161F26)'; } .blackheader { text-align: center; } .blackheader p { color: #fff; padding-top: 10px; font-family: 'Roboto Condensed', sans-serif; font-weight: 700; } .blacknav { background: #172027; width:100%; margin-left: auto; margin-right: auto; } .blacknav .navbutton { background: #172027; border-right: 1px solid #394249; min-height: 40px; text-align: center; float: left; cursor: pointer; color:#fff; } .blacknav .navbutton.last { border-right: 0px solid #394249; } .blacknav .navbutton:hover { background: #5998c8; color:#fff; } .blacknav .navbutton p{ margin-top: 10px; font-family: 'Roboto Condensed', sans-serif; font-weight: 700; font-size: 1em; } .clearboth { clear: both; } .blackbutton { margin-top:8px; margin-bottom:8px; margin-left:auto; margin-right:auto; text-align:center; border: 1px solid #111 /*{a-bup-border}*/; -moz-box-shadow: 0px 1px 4px /*{global-box-shadow-size}*/ rgba(0,0,0,.3) /*{global-box-shadow-color}*/; -webkit-box-shadow: 0px 1px 4px /*{global-box-shadow-size}*/ rgba(0,0,0,.3) /*{global-box-shadow-color}*/; box-shadow: 0px 1px 4px /*{global-box-shadow-size}*/ rgba(0,0,0,.3) /*{global-box-shadow-color}*/; width:90%; min-height:40px; -moz-border-radius: 1em; -webkit-border-radius: 1em; -khtml-border-radius: 1em; border-radius: 1em; text-shadow: 0 /*{a-bup-shadow-x}*/ 1px /*{a-bup-shadow-y}*/ 1px /*{a-bup-shadow-radius}*/ #111 /*{a-bup-shadow-color}*/; cursor: pointer; } .blackbutton p { color: #fff; margin-top: 10px; text-shadow: 0 /*{a-bup-shadow-x}*/ 1px /*{a-bup-shadow-y}*/ 1px /*{a-bup-shadow-radius}*/ #111 /*{a-bup-shadow-color}*/; font-weight: bold; } .blackbutton:hover { border: 1px solid #000 /*{a-bhover-border}*/; background: #444 /*{a-bhover-background-color}*/; font-weight: bold; color: #fff /*{a-bhover-color}*/; text-shadow: 0 /*{a-bhover-shadow-x}*/ 1px /*{a-bhover-shadow-y}*/ 1px /*{a-bhover-shadow-radius}*/ #111 /*{a-bhover-shadow-color}*/; background-image: -webkit-gradient(linear, left top, left bottom, from( #555 /*{a-bhover-background-start}*/), to( #383838 /*{a-bhover-background-end}*/)); /* Saf4+, Chrome */ background-image: -webkit-linear-gradient( #555 /*{a-bhover-background-start}*/, #383838 /*{a-bhover-background-end}*/); /* Chrome 10+, Saf5.1+ */ background-image: -moz-linear-gradient( #555 /*{a-bhover-background-start}*/, #383838 /*{a-bhover-background-end}*/); /* FF3.6 */ background-image: -ms-linear-gradient( #555 /*{a-bhover-background-start}*/, #383838 /*{a-bhover-background-end}*/); /* IE10 */ background-image: -o-linear-gradient( #555 /*{a-bhover-background-start}*/, #383838 /*{a-bhover-background-end}*/); /* Opera 11.10+ */ background-image: linear-gradient( #555 /*{a-bhover-background-start}*/, #383838 /*{a-bhover-background-end}*/); } .carouselleftbutton { position:absolute; top:50%; margin-top:-15px; width:30px; height:30px; background:#333; -moz-border-radius: 30px; -webkit-border-radius: 30px; -khtml-border-radius: 30px; border-radius: 30px; text-align: center; cursor: pointer; } .carouselleftbutton p { color: #fff; margin-top: 7px; font-weight: bold; font-family: 'Roboto Condensed', sans-serif; } .carouselrightbutton { position:absolute; top:50%; right:0; margin-top:-15px; width:30px; height:30px; background:#333; -moz-border-radius: 30px; -webkit-border-radius: 30px; -khtml-border-radius: 30px; border-radius: 30px; text-align: center; cursor: pointer; } .carouselrightbutton p { color: #fff; margin-top: 7px; font-weight: bold; font-family: 'Roboto Condensed', sans-serif; } .module-carousel { margin-left: auto; margin-right: auto; } .forminputholder { width:90%; margin-left:auto; margin-right:auto; margin-top: 10px; } .forminputtitle { width:100%; font-family: 'Roboto', sans-serif; margin-bottom: 5px; } .forminput { width:95%; padding-left:5%; min-height:30px; -moz-box-shadow: inset 0px 1px 4px rgba(0,0,0,.2); -webkit-box-shadow: inset 0px 1px 4px rgba(0,0,0,.2); box-shadow: inset 0px 1px 4px rgba(0,0,0,.2); -webkit-background-clip: padding-box; -moz-background-clip: padding; background-clip: padding-box; -moz-border-radius: .6em /*{global-radii-blocks}*/; -webkit-border-radius: .6em /*{global-radii-blocks}*/; border-radius: .6em /*{global-radii-blocks}*/; border: 1px solid #aaa /*{c-body-border}*/; color: #333 /*{c-body-color}*/; text-shadow: 0 /*{c-body-shadow-x}*/ 1px /*{c-body-shadow-y}*/ 0 /*{c-body-shadow-radius}*/ #fff /*{c-body-shadow-color}*/; background: #f9f9f9 /*{c-body-background-color}*/; background-image: -webkit-gradient(linear, left top, left bottom, from( #f9f9f9 /*{c-body-background-start}*/), to( #eee /*{c-body-background-end}*/)); /* Saf4+, Chrome */ background-image: -webkit-linear-gradient( #f9f9f9 /*{c-body-background-start}*/, #eee /*{c-body-background-end}*/); /* Chrome 10+, Saf5.1+ */ background-image: -moz-linear-gradient( #f9f9f9 /*{c-body-background-start}*/, #eee /*{c-body-background-end}*/); /* FF3.6 */ background-image: -ms-linear-gradient( #f9f9f9 /*{c-body-background-start}*/, #eee /*{c-body-background-end}*/); /* IE10 */ background-image: -o-linear-gradient( #f9f9f9 /*{c-body-background-start}*/, #eee /*{c-body-background-end}*/); /* Opera 11.10+ */ background-image: linear-gradient( #f9f9f9 /*{c-body-background-start}*/, #eee /*{c-body-background-end}*/); } .formtextarea { min-height: 100px; } .tablecell { float:left; height:100%; overflow: hidden; } .module-table { margin: 20px; } .module-text { min-height:100%; width:100%; display: block; } .pageHeader { color: #FFF; width: 100%; height: 35px; background: #172027; border-bottom: 2px solid #333; text-align: center; } .pageHeader p { padding-left: 20px; padding-top: 10px; font-weight: bold; text-align: center; } .page-nav { height:20px; margin: 10px; } .home-icon { width:20px; height:100%; cursor: pointer; } .page-nav li { float:left; padding-right: 5px; padding-left: 5px; border-left: 1px solid #e4e4e4; } .module-footer { font-size:11px; min-height:0; padding-bottom:10px; }",
	pageHolder:function(holder)
	{
		holder.style.height=Utensil.stageHeight();
		holder.style.width=Utensil.stageWidth();
		
	},
	addDefault:function()
	{
		Spider.data.className.scroller = "pageScroller";
		this.style = document.createElement("style")
		this.style.setAttribute("rel", "stylesheet")
		this.style.setAttribute("type", "text/css")
		this.style.setAttribute("id", "defaultStyle")

		document.getElementsByTagName("head")[0].appendChild(this.style);
		if (localStorage)
			localStorage.setItem('styleData', this.defaultStyle);
		if (this.style.styleSheet) {// IE

			this.style.styleSheet.cssText = this.defaultStyle;

		} else {
			this.style.appendChild(document.createTextNode(this.defaultStyle));
		}
	}
};
