class ApiService {
  async getRubrics() {
    try {
      const rubrics = await fetch(
        "https://www.klerk.ru/yindex.php/v3/event/rubrics",
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            // 'Content-Type': 'application/json',
              // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods':'*',
            // 'Access-Control-Allow-Headers':'content-type',
            'Content-Type': 'application/x-www-form-urlencoded',
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
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return rubricsAndEmpties.json();
    } catch (err) {
      console.log(err);
    }
  }
}
export default new ApiService();
