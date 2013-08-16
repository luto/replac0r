var go = $('#go');
var input = $('#input');
var prepend = $('#prepend > input');
var append = $('#append > input');
var format = $('#format > input');

go.click(
  function ()
  {
    var prependVal = prepend.val();
    var appendVal = append.val();
    var formatVal = format.val();

    var lines = input.val().split('\n');

    for(var i = 0; i < lines.length; i++)
    {
      lines[i] = prependVal + lines[i];
      lines[i] = lines[i] + appendVal;
    }

    input.val(lines.join('\n'));
  }
);
