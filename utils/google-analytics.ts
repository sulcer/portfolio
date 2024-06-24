declare global {
  interface Window {
    gtag: (command: string, targetId: string, config: object) => void;
  }
}

export const page_view = (GA_MEASUREMENT_ID: string, url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
