/**
 * jquery.flips.js
 * 
 * Copyright 2011, Pedro Botelho / Codrops
 * Free to use under the MIT license.
 *
 * Date: Fri May 4 2012
 */
 
/**
 * Note: This is highly experimental and just a proof-of-concept! 
 * There are some few "hacks", probably some bugs, and some functionality 
 * is incomplete... definitely not ready for a production environment.
 *
 *
 * Tested and working on:
 * - Google Chrome 18.0.1025.168
 * - Apple Safari 5.1.5
 * - Apple Safari 5.1 Mobile
 * 
 */

(function( window, undefined ) {
	
		
			/*make the pictures clickable for colopbox;*/
      $( '#hahn' ).click(function(){
                    $.colorbox({ajax:true, href:'html/huehner.html', title:'Hühner'});
            });
			
			$( '#schwein' ).click(function(){
                        $.colorbox({ajax:true, href:'html/schwein.html', title:'Schweine'});
                });
			
			$( '#schaf' ).click(function(){
                        $.colorbox({ajax:true, href:'html/schaf.html', title:'Schweine'});
                });

			//functions for the tumblr intergration
           
            function ajaxtumblr(adress, j){
                $( '#tel' + j ).click(function(){
                        $.colorbox({html:adress, width:'500px', height:'600px'});
                   
                })
             }
			//Rezepte
            $.ajax({ 
                type: 'GET', 
                url: 'http://api.tumblr.com/v2/blog/kleinelandwirtschaftrezepte.tumblr.com/posts?api_key=d6TTmPxwLvGW4OPsdNAETdHtvDooKJoO20CIoyahBzqfy6qhCs&limit=9', 
                data: { get_param: 'value' }, 
                dataType: 'jsonp',
                success: function (data) { 
                    for (i = 0; i <= 2; i++) {
                        $('#tumblr').append('<figure><div id="tel' + i + '" class="tumblrelement" style="background-image:url(' + data.response.posts[i].photos[0].alt_sizes[3].url + ')">' + data.response.posts[i].caption + '</div></figure><br/><br/>');
                        $('.tumblrelement').find('p:not(:first)').hide();
                        $('.tumblrelement').find('p:first').css('top','6.5vw');
                        ajaxtumblr('<div id="tel' + i + '" class="tel" style="background-image:url(' + data.response.posts[i].photos[0].alt_sizes[2].url + ')"></div><div id="tumblrtext"' + data.response.posts[i].caption + '</div>', i);
                    }
                    for (i = 3; i <= 5; i++) {
                        $('#tumblr2').append('<figure><div id="tel' + i + '" class="tumblrelement" style="background-image:url(' + data.response.posts[i].photos[0].alt_sizes[3].url + ')">' + data.response.posts[i].caption + '</div></figure><br/><br/>');
                        $('.tumblrelement').find('p:not(:first)').hide();
                        $('.tumblrelement').find('p:first').css('top','6.5vw');
                        ajaxtumblr('<div id="tel' + i + '" class="tel" style="background-image:url(' + data.response.posts[i].photos[0].alt_sizes[2].url + ')"></div><div id="tumblrtext"' + data.response.posts[i].caption + '</div>', i);
                        
                    }
                    for (i = 6; i <= 8; i++) {
                        $('#tumblr3').append('<figure><div id="tel' + i + '" class="tumblrelement" style="background-image:url(' + data.response.posts[i].photos[0].alt_sizes[3].url + ')">' + data.response.posts[i].caption + '</div></figure><br/><br/>');
                        $('.tumblrelement').find('p:not(:first)').hide();
                        $('.tumblrelement').find('p:first').css('top','6.5vw');
                        ajaxtumblr('<div id="tel' + i + '" class="tel" style="background-image:url(' + data.response.posts[i].photos[0].alt_sizes[2].url + ')"></div><div id="tumblrtext"' + data.response.posts[i].caption + '</div>', i);
                        
                    }
                }
            });
			
			//Grünzeug
			$.ajax({ 
                type: 'GET', 
                url: 'http://api.tumblr.com/v2/blog/kleinelandwirtschaftgruenzeug.tumblr.com/posts?api_key=d6TTmPxwLvGW4OPsdNAETdHtvDooKJoO20CIoyahBzqfy6qhCs&limit=1', 
                data: { get_param: 'value' }, 
                dataType: 'jsonp',
                success: function (data) { 
                        $('.grunzeug').css("background-image", "url(" + data.response.posts[0].photos[0].alt_sizes[2].url + ")");
                        $('.grunzeugtext').html(data.response.posts[0].caption);
                }
                
            });
            
      //Blog
            $.ajax({ 
                type: 'GET', 
                url: 'http://api.tumblr.com/v2/blog/kleinelandwirtschaft.tumblr.com/posts?api_key=d6TTmPxwLvGW4OPsdNAETdHtvDooKJoO20CIoyahBzqfy6qhCs&limit=1', 
                data: { get_param: 'value' }, 
                dataType: 'jsonp',
                success: function (data) { 
                        $('.blog').css("background-image", "url(" + data.response.posts[0].photos[0].alt_sizes[2].url + ")");
                        $('.blogtext').html(data.response.posts[0].caption);
                }
                
            });
            

})( window );
