import { HTTP } from "meteor/http";

const API_BASE_URL = 'https://api.github.com/repos';

function callGet(url, options = {}) {
    return new Promise((resolve, reject) => {
        HTTP.get(url, options, (err, result) => {
            if (err) return reject(err);

            resolve(JSON.parse(result.content));
        });
    });
}

// https://api.github.com/repos/vuejs/vue/commits?per_page=50

function getRepoCommits(repositoryOwner, repositoryName) {
    return callGet(`${API_BASE_URL}/${repositoryOwner}/${repositoryName}/commits`, {
        query: {per_page: 50},
        headers: {
            'User-Agent': 'Meteor-Node'
        }
    });
}

export function getVueRepoCommits() {
    return getRepoCommits('vuejs', 'vue');
}