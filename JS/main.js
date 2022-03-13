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


$('button:submit').click(()=>{
  alert("Thank you for contacting us! We'll be sure to get back to you.");
});