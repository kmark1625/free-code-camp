import { inject, addProviders } from '@angular/core/testing';
import { QuoteMachineService } from './quote-machine.service';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { provide } from '@angular/core';

describe('QuoteMachineService', () => {
    beforeEach(() => {
        addProviders([
            QuoteMachineService,
            BaseRequestOptions,
            MockBackend,
            provide(Http, {
                useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
                },
                deps: [MockBackend, BaseRequestOptions]
        })]);
    });

    beforeEach(inject([MockBackend], (backend: MockBackend) => {
        const baseResponse = new Response(new ResponseOptions({body: {
            value: { id: 297, joke: 'test joke' }
        }}));
        backend.connections.subscribe((c: MockConnection) => {
            c.mockRespond(baseResponse);
        });
    }));

    it('should return a string quote when subscribed to getQuote',
        inject([QuoteMachineService], (quoteMachineService: QuoteMachineService) => {
            quoteMachineService.getQuote().subscribe((quote: string) => {
                expect(quote).toBe('test joke');
            });
        })
    );
});

