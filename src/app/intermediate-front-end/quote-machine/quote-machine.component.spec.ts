// import {
//     addProviders,
//     setBaseTestProviders
//  } from '@angular/core/testing';
// import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
// import { QuoteMachineComponent } from './quote-machine.component';
// import { QuoteMachineService } from './quote-machine.service';
// import { provide } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
// import {
//   TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS,
//   TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
// } from '@angular/platform-browser-dynamic/testing';

// setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
//  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);


// class MockQuoteMachineService extends QuoteMachineService {
//     constructor() {
//         super(null);
//     }

//     getQuote() {
//         return Observable.of('test quote');
//     }
// }

// describe('QuoteMachineComponent', () => {
//     beforeEach(() => {
//         addProviders([
//             TestComponentBuilder,
//             provide(QuoteMachineService, {useClass: MockQuoteMachineService})]);
//     });

//     it('should get quote', injectAsync(
//         [TestComponentBuilder], (tcb) => {
//             return tcb
//             .overrideProviders(QuoteMachineComponent,
//             [provide(QuoteMachineService, { useClass: MockQuoteMachineService })])
//             .createAsync(QuoteMachineComponent).then((fixture) => {
//                 fixture.debugElement.componentInstance.getQuote();

//                 fixture.detectChanges();
//                 var compiled = fixture.debugElement.nativeElement;
//                 expect(compiled.querySelector('p')).toHaveText('test quote');
//             });
//         })
//     );
// });
