import axios from "axios";
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded'
class ApiService {
  async getRubrics() {
    try {
      const rubrics = await axios.get(
        "https://www.klerk.ru/yindex.php/v3/event/rubrics"
      );
      return rubrics.data;
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
