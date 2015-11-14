$(function() {
    document.addEventListener("deviceready", onDeviceReady, true);
});
function onDeviceReady() {
    alert('in onDeviceReady');
    console.log('in onDeviceReady');
}