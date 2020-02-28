import navigationService from '@/services/NavigationService';
import NauticBase from '@/models/NauticBase';
import httpService from '@/services/HttpService';

export default {
  name: 'Home',
  data() {
    return {
      nauticBases: [],
      pagination: {
        page: 1,
        nbPages: 0,
      },
    };
  },
  mounted() {
    this.getNauticBases(1);
  },
  methods: {
    goCreateView() {
      navigationService.changeView('form');
    },
    goNauticBaseView(id) {
      navigationService.changeView(`nauticBase/${id}`);
    },
    getNauticBases(page) {
      httpService.get(`nauticbases?page=${page}`, httpService.getDefaultHeaders(), (response) => {
        this.nauticBases = [];
        const nauticBases = response.data.nauticBases;
        for (let i = 0; i < nauticBases.length; i++) {
          this.nauticBases.push((new NauticBase('')).unmarshall(nauticBases[i]));
        }
        this.pagination = response.data.pagination;
      }, (error) => {
        alert('[TODO] Erreur de communication regarder la console');
      });
    },
  },
};
