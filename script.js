var go = $('#go');
var prepend = $('#prepend > input');
var append = $('#append > input');
var format = $('#format > input');

go.click(
  function ()
  {
    var prependVal = prepend.val();
    var appendVal = append.val();
    var formatVal = format.val();
    alert("pre: " + prependVal + "\npost: " + appendVal + "\nformat: " + formatVal);
  }
);
