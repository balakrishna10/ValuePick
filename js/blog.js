$(function() {
    document.addEventListener("deviceready", onDeviceReady, true);
});
function onDeviceReady() {
    var titleId= localStorage.getItem('titleId');
    console.log('titleId',titleId);
    showLoading();
    $.ajax({
        type: 'GET',
        url: 'http://52.26.182.191:9000/scrap/blog/post?id='+titleId,
        dataType: 'json',
        success: function(log_data, status) {
            
            var data = {resultData:log_data};
            console.log('log_data.content', log_data.content);
            var tpl = _.template($('#blogDetail').html());
            $('.blog-page').append(tpl(data));
            hideLoading();
        },
        error: function(e) {
            console.log(e);
            return false;
        }
    });  
}

function showLoading() {
    $("#loading").show();
}

function hideLoading() {
    $("#loading").hide();
}
