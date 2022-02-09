import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import Application from 'you-dont-konw-about-ember/app';
import config from 'you-dont-konw-about-ember/config/environment';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
