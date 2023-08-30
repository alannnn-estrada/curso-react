import { getCLS, getFID, getLCP, getTTFB } from "web-vitals";

export default function sendToAnalytics(metric) {
  // Envía la métrica a tu herramienta de análisis o lugar deseado.
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
