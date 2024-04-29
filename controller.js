

// basic functionalities
$(document).ready(function () {

  client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

  client.on("connect", function () {
    $("#status").val("Connected !");
    console.log("successfully connected");
    $("#Onbutton").click(function () {

      var topic = 'group1/laser';
      var payload = 'on';
      //var payload = 'Turn On:' + moment().format('MMMM Do YYYY, h:mm:ss a');
      $("#Sstatus").val('The device is on');
      client.publish(topic, payload);
    });

    $("#Offbutton").click(function () {
      var topic = 'group1/laser';
        var payload = 'off';
      //var payload = 'Turn off:' + moment().format('MMMM Do YYYY, h:mm:ss a');
      $("#Sstatus").val('The device is Off');
      client.publish(topic, payload);
    });
  })


})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});





