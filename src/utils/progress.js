import Swal from "sweetalert2";
function progress(param = { title: "processing", timer: 2000 }) {
  let timerInterval;
  Swal.fire({
    title: param.title,
    toast: true,
    position: "top-end",
    timer: param.timer,
    showConfirmButton: false,
    showCloseButton: true,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
  //   .then((result) => {
  //     /* Read more about handling dismissals below */
  //     if (result.dismiss === Swal.DismissReason.timer) {
  //       window.location.href = "/";
  //     }
  //   });
}

export default progress;
