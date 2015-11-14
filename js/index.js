$(function() {
    document.addEventListener("deviceready", onDeviceReady, true);
});
function onDeviceReady() {
    // alert('in onDeviceReady');
    console.log('in onDeviceReady');
    localStorage.setItem('size', 10);
    localStorage.setItem('pageNumber', 0);
    var size= localStorage.getItem('size');
    var page= localStorage.getItem('pageNumber');
    showLoading();
    $.ajax({
        type: 'GET',
        url: 'http://52.26.182.191:9000/scrap/blog/recent?page='+page+'&size='+size,
        dataType: 'json',
        success: function(log_data, status) {
            // alert('success');
            console.log('GET log_data',log_data);
            console.log('GET status',status);
            var resLen=log_data.length;
            console.log('resLen',resLen);
            var data = { resultData:log_data, length: resLen};
             console.log('data',data);
            var tpl = _.template($('#titleDetail').html());
    		$('#blog').append(tpl(data));
    		hideLoading();
    		size=parseInt(size)+10;
    		localStorage.setItem('size', size);
        },
        error: function(e) {
            console.log(e);
            return false;
        }
    });
}

$(window).scroll(function () {
    console.log('$(window).height()',$(window).height());
    console.log('$(window).scrollTop()',$(window).scrollTop());
    console.log('$(document).height()',$(document).height());
        if ($(window).height() + $(window).scrollTop() == $(document).height()) {
        	var page= localStorage.getItem('pageNumber');
        	var size= localStorage.getItem('size');
        	showLoading();
            $.ajax({
		        type: 'GET',
		        url: 'http://52.26.182.191:9000/scrap/blog/recent?page='+page+'&size='+size,
		        dataType: 'json',
		        success: function(log_data, status) {
		        	if(log_data.length>0){
		        		// alert('success');
			            console.log('GET log_data',log_data);
			            console.log('GET status',status);
			            var resLen=log_data.length;
			            console.log('resLen',resLen);
			            var data = { resultData:log_data, length: resLen};
			             console.log('data',data);
			            var tpl = _.template($('#titleDetail').html());
			    		$('#blog').append(tpl(data));
			    	    hideLoading();
			    		var size= localStorage.getItem('size');
			    		size=parseInt(size)+10;
    					localStorage.setItem('size', size);
		        	}else{
		        		pageNumber=parseInt(pageNumber)+10;
    					var page = localStorage.getItem('pageNumber');
    					page=parseInt(page)+1;
    					localStorage.setItem('pageNumber', page);
    					localStorage.setItem('size', 10);
    					var size=localStorage.getItem('size');
    					showLoading();
		        		$.ajax({
					        type: 'GET',
					        url: 'http://52.26.182.191:9000/scrap/blog/recent?page='+page+'&size='+size,
					        dataType: 'json',
					        success: function(log_data, status) {
					        	// if(log_data.length>0){
					        		// alert('success');
						            console.log('GET log_data',log_data);
						            console.log('GET status',status);
						            var resLen=log_data.length;
						            console.log('resLen',resLen);
						            var data = { resultData:log_data, length: resLen};
						             console.log('data',data);
						            var tpl = _.template($('#titleDetail').html());
						    		$('#blog').append(tpl(data));
						    		hideLoading();
						    		var size= localStorage.getItem('size');
						    		size=parseInt(size)+10;
			    					localStorage.setItem('size', size);
					        	// }else{
					        		
					        	// }
					            
					        },
					        error: function(e) {
					            console.log(e);
					            return false;
					        }
					    });  

		        	}
		            
		        },
		        error: function(e) {
		            console.log(e);
		            return false;
		        }
		    });  
        }
});
