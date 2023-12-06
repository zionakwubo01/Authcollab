import axios from "axios";

const URL: string = "http://localhost:3000/data";

export const createTask = async (data: any) => {
  try {
    return axios.post(`${URL}/`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getTask = async () => {
  try {
    return axios.get(`${URL}/`).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};







// const id = Math.floor(Math.random() * new Date().getTime());
// const data = {
//   id,
//   time: new Date().getTime(),
//   urgency,
//   task,
// };

// createTask(data).then(() => {
//   navigate("/");



//   const [state, setState] = useState<Array<{}>>([]);

//   useEffect(() => {
//     getTask().then((res) => {
//       setState(res);
//     });
//   }, []);