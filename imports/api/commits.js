import {
    Meteor
} from "meteor/meteor";

import {
    getVueRepoCommits
} from "./infrastructure/github";

// DTO (Data Transfer Object) simple object needed for frontend
const toCommitDTO = (commit) => ({
    sha: commit.sha,
    message: commit.commit.message,
    url: commit.url,
    date: commit.commit.author.date,
    authorName: commit.commit.author.name,
    authorEmail: commit.commit.author.email
})

if (Meteor.isServer) {
    Meteor.methods({
            'commits.getList': async function getCommits() {
                const commits = await getVueRepoCommits();     

                return Array.from(commits).map(toCommitDTO);
            }
    });
}