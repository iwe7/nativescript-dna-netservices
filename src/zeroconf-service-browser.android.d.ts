import { Observable } from "rxjs";
import { ZeroConf } from "./netservice.common";
export declare class ZeroConfServiceBrowser {
    private _rxdnssd;
    constructor();
    searchForBrowsableDomains(): Observable<ZeroConf>;
    searchForRegistrationDomains(): Observable<ZeroConf>;
    searchForServicesOfTypeInDomain(type: string, domain: string): Observable<ZeroConf>;
    stop(): void;
}
