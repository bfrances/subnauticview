
import router from '@/router';

/**
 * Service to manage navigation between views and rewrite url
 */
class NavigationService {
  static changeView(route) {
    router.push(route);
  }

  static replaceView(route) {
    router.replace(route);
  }

  static isSameRoute(route) {
    return router.currentRoute.name === route;
  }

  static getRouteParams(params) {
    return router.currentRoute.params[params];
  }
}

export default NavigationService;
