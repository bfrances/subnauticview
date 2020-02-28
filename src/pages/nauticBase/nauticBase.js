import NauticBase from '@/models/NauticBase';
import navigationService from '@/services/NavigationService';
import httpService from '@/services/HttpService';

export default {
  name: 'NauticBase',
  data() {
    return {
      nauticBase: new NauticBase(''),
    };
  },
  mounted() {
    httpService.get(`nauticbases/${navigationService.getRouteParams('id')}`, httpService.getDefaultHeaders(), (response) => {
      this.nauticBase = (new NauticBase('')).unmarshall(response.data);
    }, (error) => {
      navigationService.changeView('/');
    });
  },
  methods: {
    goEditView() {
      navigationService.changeView(`/form/${this.nauticBase.id}`);
    },
    goHomeView() {
      navigationService.changeView('/');
    },
    deleteNauticBase() {
      if (confirm('Êtes-vous sur ?')) {
        httpService.delete(`nauticbases/${this.nauticBase.id}`, httpService.getDefaultHeaders(), (response) => {
          this.goHomeView();
        }, (error) => {
          alert('[TODO] Erreur de communication regarder la console');
        });
      }
    },
  },
};
