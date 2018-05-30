console.log("javascript working!")

//this function adds items to the array, or lists on the page, deletes items when the delete button is clicked, and includes the limitation of no additional delete buttons.
function addItem(e){
  e.preventDefault();
  var formData= $('form').serializeArray();
  if(!formData[0].value == ''){
  $('.item-insert').append("<div class='item'><button type='button' class='delete'>Delete</button><h5>" + formData[0].value + "</h5><p>" + formData[1].value + "</p></div>")
  $('input')[0].value = '';
  $('input')[1].value = '';
}
//.focus, focuses the items back on the first input field, based on the classname.
  $('.itemName').focus();
  $('.delete').click(function() {
  $(this).parent().remove();
    }
  )
};

$(document).ready(function(){
  console.log('jquery is working-ish');
  $('.form').submit(addItem);
  }
);
