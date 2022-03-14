let columns = ['toggle', 'tog', 'togg'];
columns.forEach((col)=>{
  $(`#${col}-col`).click((e)=>{
    e.preventDefault();
    $(`.${col}-info`).toggle();
    $(`.${col}-icon`).toggle();
  })
});


let projects = ['hover', 'cursor', 'pose', 'col', 'first', 'second', 'third', 'fourth']
projects.forEach((project)=>{
  $(`#${project}`).hover(()=>{
    $(`#${project} .overlay`).css('opacity',1);
  }, ()=>{
    $(`#${project} .overlay`).css('opacity',0);
  })
});


$('#mc-embedded-subscribe-form').submit(function (e){
  e.preventDefault();
  var em = $('#email').val().toLowerCase();
  var name = $('#name').val();
  var message = $('#message').val();

  validateForm(name, em, message);

  if (validateEmail(em) !== true) {
    alert("Enter a valid email");
    return;
  }
  else {
    alert("Thank you for contacting us! We'll be sure to get back to you.");

    this.reset();
  }
});
function validateEmail(email) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.match(regex)) {

      return (true);
  }
  else {

      return (false);
  }

}
function validateForm(name, email, message) {
  if (name === "") {
      alert("Please input name");
      return;
  }
  else if (email === "") {
      alert("Please input email");
      return;
  }
  else if (message === "") {
      alert("Please input your message");
      return;
  }
}