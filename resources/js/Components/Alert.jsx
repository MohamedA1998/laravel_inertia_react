import Swal from "sweetalert2";

export default function Alert(
    text = "Do you want to continue?", 
    title = "Successfuly", 
    icon = "success",
    confirmButtonText = "OK"
) {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
  });
}
