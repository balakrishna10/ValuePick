$(function() {
    document.addEventListener("deviceready", onDeviceReady, true);
});
function onDeviceReady() {
    alert('in onDeviceReady');
    console.log('in onDeviceReady');
    $.ajax({
        type: 'GET',
        url: 'http://52.26.182.191:9000/scrap/blog/recent?page=1&size=10',
        dataType: 'json',
        success: function(log_data, status) {
            alert('success');
            console.log('GET log_data',log_data);
            console.log('GET status',status);
            var resLen=log_data.length;
            console.log('resLen',resLen);
            var data = { resultData:log_data, length: resLen};
             console.log('data',data);
            var tpl = _.template($('#titleDetail').html());
    		$('#blog').append(tpl(data));
        },
        error: function(e) {
            console.log(e);
            return false;
        }
    });
}