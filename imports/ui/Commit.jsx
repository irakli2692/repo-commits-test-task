import React from 'react';

function endsWithNumber(string) {
    const lastChar = string.charAt(string.length - 1);

    return !Number.isNaN(parseInt(lastChar));
}

function Commit(props) {
    return <div className={endsWithNumber(props.commit.sha) ? 'yellow-row' : ''}>
        <h3>{props.commit.message}</h3>
        <h3>{props.commit.sha}</h3>
        <h5>{props.commit.authorName}</h5>
        <h5>{props.commit.authorEmail}</h5>
    </div>
}

export default Commit;