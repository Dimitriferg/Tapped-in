$(document).ready(function () {
  $("#login").click(function () {
    $("#modal-login").modal("show");
    console.log("clicked", $("#modal-login"));
  });
});

$(document).ready(function () {
  $("#close-login").click(function () {
    $("#modal-login").modal("hide");
  });
});

$(document).ready(function () {
  $("#sign-up").click(function () {
    $("#modal-signup").modal("show");
  });
});

$(document).ready(function () {
  $("#close-signup").click(function () {
    $("#modal-signup").modal("hide");
  });
});
