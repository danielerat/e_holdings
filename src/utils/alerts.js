import Swal from "sweetalert2";
function alert(param = { title: "xxxxx", type: "error" }) {
  const Toast = Swal.mixin({
    toast: true,
    timer: 4000,
    position: "top-end",
    showConfirmButton: false,
    showCloseButton: true,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: ["error", "success", "info", "warning"].includes(param.type)
      ? param.type
      : "error",
    text: param.title,
    // text: "Something went wrong!",
  });
}
export default alert;
