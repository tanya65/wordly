const BaseUrl = "http://localhost:8000/wordly/api/word/all";

class MainApi{

    static sampleApi(){
        console.log("here in sample api")
        return fetch(BaseUrl,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
        }
       }).then(resp=>resp.json()).then(resp=>console.log(resp));
    }

}
export default MainApi;