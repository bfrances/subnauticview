import NauticBase from '@/models/NauticBase';
import navigationService from '@/services/NavigationService';
import httpService from '@/services/HttpService';

export default {
  name: 'Form',
  data() {
    return {
      nauticBase: new NauticBase(),
    };
  },
  mounted() {
    if (navigationService.getRouteParams('id')) {
      httpService.get(`nauticbases/${navigationService.getRouteParams('id')}`, httpService.getDefaultHeaders(), (response) => {
        this.nauticBase = (new NauticBase('')).unmarshall(response.data);
      }, (error) => {
        console.error(error);
        alert('[TODO] Erreur de communication regarder la console');
      });
    }
  },
  methods: {
    cancel() {
      if (this.isNewNauticBase()) {
        navigationService.changeView('/');
      } else {
        navigationService.changeView(`/nauticBase/${this.nauticBase.id}`);
      }
    },
    isNewNauticBase() {
      return this.nauticBase.id === -1;
    },
    createNewNauticBase() {
      httpService.post('nauticbases', this.nauticBase, httpService.getDefaultHeaders(), (response) => {
        navigationService.changeView(`/nauticBase/${response.data.id}`);
      }, (error) => {
        console.error(error);
        alert('[TODO] Erreur de communication regarder la console');
      });
    },
    editNauticBase() {
      if (!this.isNewNauticBase()) {
        httpService.put(`nauticbases/${this.nauticBase.id}`, this.nauticBase, httpService.getDefaultHeaders(), (response) => {
          navigationService.changeView(`/nauticBase/${response.data.id}`);
        }, (error) => {
          console.error(error);
          alert('[TODO] Erreur de communication regarder la console');
        });
      }
    },
  },
};
