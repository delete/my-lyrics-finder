// describe('Contact', () => {
//   beforeEach(() => {
//     angular.mock.module('common.app');
//     angular.mock.module(($stateProvider) => {
//       $stateProvider.state('mockApp', {
//         redirectTo: 'home',
//         url: '/'
//       });
//     });
//   });

//   describe('Routes', () => {
//     let $state;
//     let $location;
//     let $rootScope;

//     function goTo(url) {
//       $location.url(url);
//       $rootScope.$digest();
//     }

//     beforeEach(inject(($injector) => {
//       $state = $injector.get('$state');
//       $location = $injector.get('$location');
//       $rootScope = $injector.get('$rootScope');
//     }));

//     it('should go to the home state', () => {
//       goTo('/');
//       expect($state.current.name).toEqual('home')
//     });
//   });
// });