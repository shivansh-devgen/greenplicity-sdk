import axios from "axios"

class CertificatesSDK {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async createCertificate(producerId, mwh, validUntil, certificate) {
        try {
            const response = await axios.post(`${this.apiUrl}/certificates`, {
                producerId,
                mwh,
                validUntil,
                certificate
            });
            return response.data;
        } catch (err) {
            throw new Error(err);
        }
    }

    async verifyCertificate(certificateId) {
        try {
            const response = await axios.get(`${this.apiUrl}/certificates/${certificateId}/verify`);
            return response.data;
        } catch (err) {
            throw new Error(err);
        }
    }
}

