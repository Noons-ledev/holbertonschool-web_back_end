export default function loadBalancer(chinaDownload, USDownload) {
  const race = Promise.race([chinaDownload, USDownload]);
  return race;
}
