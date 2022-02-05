class WordApi{

    static getWord(level){
        if(level=="difficult")
            return this.getDifficultWord();
        else
            return this.getEasyWord();
    }

    static async getDifficultWord(){
        let BaseUrl = "https://random-word-api.herokuapp.com/word?number=1";
        return await fetch(BaseUrl).then(word=>word.json());
    }

    static getEasyWord(){

    }

}

export default WordApi;