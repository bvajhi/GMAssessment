import axios from 'axios';

let APIKit = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000,
});


export function getCurrentRepoCommits() {

    return APIKit.get('repos/bvajhi/GMAssessment/commits')
        .then(
            response => {
                console.log(response);
                return response;
            }
        )
        .catch (
            error => {
                console.log(error);
            }
        )

}