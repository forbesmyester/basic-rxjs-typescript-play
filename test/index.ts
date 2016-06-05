import Twitter from '../src/index';
import * as Types from '../src/types';
import {expect} from 'chai';

describe('Can', function() {

    it('Message tweeted when tweed', function() {
        let twitter = new Twitter();
        twitter.message("Hi");
        expect(twitter.getMessages()).to.eql([
            { txt: "Starting!" },
            { txt: 'Hi' }
        ]);
    });

});
