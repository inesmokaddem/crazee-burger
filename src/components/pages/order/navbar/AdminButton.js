import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminButton() {

    const notify = () => toast.info("Mode admin activé", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar',
        theme: "dark"
      });


    return (
        <div>
            <button onClick={notify}>Notify !</button>
            <ToastContainer />
        </div>
    )
}
