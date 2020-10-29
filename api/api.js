import axios from 'axios';

let APIKit = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000,
});


export function getCurrentRepoCommits() {

    APIKit.get('repos/bvajhi/GMAssessment/commits')
        .then(
            response => {
                console.log(response);
            }
        )
        .catch (
            error => {
                console.log(error);
            }
        )

}