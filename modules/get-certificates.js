import CertificatesSDK from '../CertificatesSDK';

const sdk = new CertificatesSDK('http://localhost:1323');

export function getCertificates() {
    return sdk.getAllCertificates()
        .then(certificates => {
            // render the certificates list in the UI
            const certificateList = document.getElementById('certificate-list');
            certificates.forEach(certificate => {
                const certificateItem = document.createElement('li');
                certificateItem.innerText = certificate.ID;
                certificateList.appendChild(certificateItem);
            });
        })
        .catch(error => {
            // handle error
            console.error(error);
        });
}

