// gak mau

function gak(ini) {
  ini.style.position = "absolute";
  ini.style.left = `${Math.floor(Math.random() * 90)}%`;
  ini.style.top = `${Math.floor(Math.random() * 90)}%`;
}

// form
//<![CDATA[
$(document).on("click", ".send_form", function () {
  var input_blanter = document.getElementById("wa_message");

  /* Whatsapp Settings */
  var walink = "https://web.whatsapp.com/send",
    phone = "082143007827",
    walink2 = "Ini jawaban jujur dari aku",
    text_yes = "Terkirim😊",
    text_no = "Isi semua lalu klik kirim ⚠️";

  /* Smartphone Support */
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    var walink = "whatsapp://send";
  }

  if ("" != input_blanter.value) {
    /* Call Input Form */
    var input_select1 = $("#wa_select :selected").text(),
      input_answer1 = $("#wa_answer").val(),
      input_message1 = $("#wa_message").val();

    /* Final Whatsapp URL */
    var blanter_whatsapp =
      walink +
      "?phone=" +
      phone +
      "&text=" +
      walink2 +
      "%0A%0A" +
      "Jawaban : " +
      input_answer1 +
      "%0A" +
      "Pesan : " +
      input_message1 +
      "%0A";

    /* Whatsapp Window Open */
    window.open(blanter_whatsapp, "_blank");
    document.getElementById("text-info").innerHTML =
      '<span class="yes" style="color:white; font-size:12px;">' +
      text_yes +
      "</span>";
  } else {
    document.getElementById("text-info").innerHTML =
      '<span class="no" style="color:white; font-size:12px;">' +
      text_no +
      "</span>";
  }
});
//]]>

// gshap

gsap.from(".logo", { duration: 1, y: -100 });
