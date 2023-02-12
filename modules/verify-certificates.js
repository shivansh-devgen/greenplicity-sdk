import CertificatesSDK from "./CertificatesSDK";

const sdk = new CertificatesSDK("http://localhost:1323");

export function verifyCertificate(certificateId) {
  return sdk
    .verifyCertificate(certificateId)
    .then((response) => {
      if (response.status === "valid") {
        // handle success
        //for example, you can add a modal dialog to show the certificate information
        showCertificateModal(response.data);
        sendNotification("Certificate verified successfully.");
        logEvent("Certificate Verification", "Success", response.data.id);
      } else {
        // handle error
        //for example, you can add a modal dialog to show the error message
        showErrorModal(response.error);
        // send a notification to the user
        sendNotification("Certificate verification failed. " + response.error);
        //log the event
        logEvent("Certificate Verification", "Error", response.error);
      }
    })
    .catch((error) => {
      // handle error
      console.error(error);
      //for example, you can add a modal dialog to show the error message
      showErrorModal(error);
      // send a notification to the user
      sendNotification(
        "An error occurred while trying to verify the certificate. Please try again later."
      );
      //log the event
      logEvent("Certificate Verification", "Error", error);
    });
}
