import CertificatesSDK from '../CertificatesSDK';

const sdk = new CertificatesSDK('http://localhost:1323');

export function createCertificate() {
    const producerId = document.getElementById('producer-id').value;
    const mwh = document.getElementById('mwh').value;
    const validUntil = document.getElementById('valid-until').value;
    const certificate = document.getElementById('certificate').files[0];

    sdk.createCertificate(producerId, mwh, validUntil, certificate)
        .then(response => {
            // handle success
            console.log(response);
        })
        .catch(error => {
            // handle error
            console.error(error);
        });
}

