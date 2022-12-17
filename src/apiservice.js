class ApiService {
  async getRubrics() {
    try {
      const rubrics = await fetch(
        "/api",
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
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
        "/api?allowEmpty=1",
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
