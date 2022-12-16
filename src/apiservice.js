import axios from "axios";

// axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded'
// axios.defaults.headers.get['Access-Control-Allow-Headers']='Content-Type, X-Auth-Token, Origin'
// axios.defaults.headers.get['Access-Control-Allow-Methods']='POST, GET, OPTIONS, PUT, DELETE'
class ApiService {
  async getRubrics() {
    try {
      const rubrics = await fetch(
        "https://www.klerk.ru/yindex.php/v3/event/rubrics",
        {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
      );
      console.log(rubrics)
      return rubrics.json();
    } catch (err) {
      console.log(err);
    }
  }
  async getAllRubrics() {
    try {
      const rubricsAndEmpties = await axios.get(
        "https://www.klerk.ru/yindex.php/v3/event/rubrics?allowEmpty=1"
      );
      return rubricsAndEmpties.data;
    } catch (err) {
      console.log(err);
    }
  }
}
export default new ApiService()
