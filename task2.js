$(document).ready(function(){


    $("button").click(function() {
        id = "#" + this.id
        btnTitle = "#" + this.id + "-title"
        btnContent = "#" + this.id + "-content"

        $(btnContent).toggle(0);
        $(btnTitle).toggle(0);
        $(id).toggleClass("btn-effect");
        $(id).toggleClass("btn-content-after");
    });

    $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbar-fixed-top");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });
})