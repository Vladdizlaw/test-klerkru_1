import axios from "axios";


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
          }
        }
      );
      return rubrics.json();
    } catch (err) {
      console.log(err);
    }
  }
  async getAllRubrics() {
    try {
      const rubricsAndEmpties = await fetch(
        "https://www.klerk.ru/yindex.php/v3/event/rubrics?allowEmpty=1",
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
      return rubricsAndEmpties.json();
    } catch (err) {
      console.log(err);
    }
  }
}
export default new ApiService()
