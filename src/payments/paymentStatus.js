import axios from '../redux/app/customAxios';
import { showSuccessMessage } from '../utils/toast';

const paymentStatus = async (id) => {
  try {
    const { data } = await axios.get(`/payments/success?paymentId=${id}`);
    showSuccessMessage(`${data.message}`);
  } catch (error) {
    console.log(error);
  }
};

export default paymentStatus;
