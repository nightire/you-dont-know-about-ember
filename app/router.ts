import EmberRouter from '@ember/routing/router';
import config from 'you-dont-konw-about-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
Router.map(function () {});
