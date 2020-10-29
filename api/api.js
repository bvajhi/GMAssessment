import axios from 'axios';

let APIKit = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000,
});


export function getCurrentRepoCommits() {
    const returnArray = [];
    return APIKit.get('repos/bvajhi/GMAssessment/commits')
        .then(
            response => {
                console.log(response);
                response.data.forEach(element => {
                    const dataObj = {
                        commitHash: element.sha,
                        author: element.commit.author.name,
                        commitMessage: element.commit.message,
                    }
                    returnArray.push(dataObj);
                    
                });


                return returnArray;
            }
        )
        .catch (
            error => {
                console.log(error);
                return {
                    fail: true,
                }
            }
        )

}