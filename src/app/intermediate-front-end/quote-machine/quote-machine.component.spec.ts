import {
    addProviders,
    TestComponentBuilder,
    inject,
    async
 } from '@angular/core/testing';
import { QuoteMachineComponent } from './quote-machine.component';
import { QuoteMachineService } from './quote-machine.service';
import { provide } from '@angular/core';
import { Observable } from 'rxjs/Rx';

class MockQuoteMachineService extends QuoteMachineService {
    constructor() {
        super(null);
    }

    getQuote() {
        return Observable.of('test quote');
    }
}

describe('QuoteMachineComponent', () => {
    beforeEach(() => {
        addProviders([
            TestComponentBuilder,
            provide(QuoteMachineService, {useClass: MockQuoteMachineService})]);
    });

    it('should get quote', async(inject(
        [TestComponentBuilder], (tcb) => {
            return tcb
            .createAsync(QuoteMachineComponent).then((fixture) => {
                fixture.debugElement.componentInstance.getQuote();

                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                expect(compiled.querySelector('p')).toEqual('test quote');
            });
        }))
    );
});
