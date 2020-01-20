$(document).ready(function() {
    $(document).on("click", "ul.prod-gram .init", function() {
      $(this).parent().find('li:not(.init)').toggle();
    });
    var allOptions = $("ul.prod-gram").children('li:not(.init)');
    $("ul.prod-gram").on("click", "li:not(.init)", function() {
      allOptions.removeClass('selected');
      $(this).addClass('selected');
      $(this).parent().children('.init').html($(this).html());
      $(this).parent().find('li:not(.init)').toggle();
    });
  });  