
const percentage = document.querySelector(".percentage");
const progress_colour = document.getElementById("progress");

const checkbattery = () => {
  navigator.getBattery().then(function (battery) {
    const level = battery.level;
    const status = level * 100;
    if (status > 60) {
      progress_colour.classList.add("bg-success");
      percentage.classList.add("text-success");
    } else if (status < 60 && status > 20) {
      progress_colour.classList.add("bg-warning");
      if (progress_colour.classList.contains("text-success")) {
        progress_colour.classList.remove("text-success");
      }
      percentage.classList.add("text-warning");
    } else {
      progress_colour.classList.add("bg-danger");
      if (progress_colour.classList.contains("text-warning")) {
        progress_colour.classList.remove("text-warning");
      }
      percentage.classList.add("text-danger");
    }
    $('.progress-bar').css('width', 0 + '%');
    $(".progress-bar").animate({
      width: status + "%"
    }, 2000);
    percentage.innerHTML = status + "%";
  });
}


document.getElementById("refresh-btn").addEventListener("click", function () {
  document.getElementById("rotate").classList.add("rotating");
  $(".btn-primary").addClass('disabled');
  setTimeout(() => {
    document.getElementById("rotate").classList.remove("rotating");
    $(".btn-primary").removeClass('disabled');
    checkbattery();
  }, 1000);
})


