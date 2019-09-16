import React from 'react';
import {
    shallow
} from 'enzyme';
import Commit from '/imports/ui/Commit'
import assert from 'assert';

describe('Commit component', function () {
    it('should be yellow on sha ended with number', function () {
        const commitProp = {
            sha: 'aaaaa1',
            message: 'test message',
            authorName: 'some author',
            authorEmail: 'author@email.com'
        }

        const commit = shallow( <Commit commit={commitProp} />);

        assert(commit.hasClass('yellow-row'), 'row should have .yellow-row class');
    });

    it('should not be yellow on sha not ended with number', function () {
        const commitProp = {
            sha: '111111bbbb',
            message: 'test message',
            authorName: 'some author',
            authorEmail: 'author@email.com'
        }

        const commit = shallow( <Commit commit={commitProp} />);

        assert(!commit.hasClass('yellow-row'), 'row should not have .yellow-row class');
    });
});