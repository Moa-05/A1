class Node {
  constructor(name) {
    this.name = name;
    this.dependencies = [];
  }

  addDependency(node) {
    this.dependencies.push(node);
  }

  printNode(level = 0) {
    console.log('  '.repeat(level) + this.name);
    this.dependencies.forEach(dep => dep.printNode(level + 1));
  }
}

function createNetworkPlan() {
  // Förberedelsefas
  const preparation = new Node('Förberedelsefas');
  const initiation = new Node('Projektinitiering');
  const needsAnalysis = new Node('Behovsanalyser');
  const marketAnalysis = new Node('Marknadsanalys');
  const technicalAnalysis = new Node('Teknisk analys');
  const swotAnalysis = new Node('SWOT-analys');
  const riskAnalysis = new Node('Riskanalys');

  preparation.addDependency(initiation);
  initiation.addDependency(needsAnalysis);
  needsAnalysis.addDependency(marketAnalysis);
  marketAnalysis.addDependency(technicalAnalysis);
  technicalAnalysis.addDependency(swotAnalysis);
  swotAnalysis.addDependency(riskAnalysis);

  // Planeringsfas
  const planning = new Node('Planeringsfas');
  const projectPlan = new Node('Utveckla projektplan');
  const scopeDefinition = new Node('Definiera omfattning');
  const schedulePlan = new Node('Skapa tidsplan');
  const benefitPlan = new Node('Nyttoplan (PENG-analys)');
  const costPlan = new Node('Kostnadsplan');
  const documents = new Node('Ta fram styrdokument');
  const requirementSpec = new Node('Kravspecifikation');
  const communicationPlan = new Node('Kommunikationsplan');
  const riskPlan = new Node('Riskhanteringsplan');

  planning.addDependency(projectPlan);
  projectPlan.addDependency(scopeDefinition);
  projectPlan.addDependency(schedulePlan);
  projectPlan.addDependency(benefitPlan);
  projectPlan.addDependency(costPlan);
  planning.addDependency(documents);
  documents.addDependency(requirementSpec);
  documents.addDependency(communicationPlan);
  documents.addDependency(riskPlan);

  // Utvecklingsfas
  const development = new Node('Utvecklingsfas');
  const systemDesign = new Node('Systemdesign');
  const uiDesign = new Node('Användargränssnittdesign');
  const dbSchema = new Node('Databasschema');
  const sysArchitecture = new Node('Systemarkitektur');
  const systemDev = new Node('Systemutveckling');
  const frontendDev = new Node('Frontend-utveckling');
  const backendDev = new Node('Backend-utveckling');
  const paymentIntegration = new Node('Integration av betalningslösningar');
  const testing = new Node('Testning');
  const unitTests = new Node('Enhetstester');
  const integrationTests = new Node('Integrationstester');
  const userTests = new Node('Användartester');

  development.addDependency(systemDesign);
  systemDesign.addDependency(uiDesign);
  systemDesign.addDependency(dbSchema);
  systemDesign.addDependency(sysArchitecture);
  development.addDependency(systemDev);
  systemDev.addDependency(frontendDev);
  systemDev.addDependency(backendDev);
  systemDev.addDependency(paymentIntegration);
  development.addDependency(testing);
  testing.addDependency(unitTests);
  testing.addDependency(integrationTests);
  testing.addDependency(userTests);

  // Implementeringsfas
  const implementation = new Node('Implementeringsfas');
  const systemImpl = new Node('Implementering av systemet');
  const installation = new Node('Installation och konfiguration');
  const dataMigration = new Node('Migrering av data');
  const training = new Node('Utbildning av personal');
  const launch = new Node('Lansering');
  const launchPlanning = new Node('Planering av lansering');
  const marketing = new Node('Marknadsföring');
  const customerSupport = new Node('Kundsupport');

  implementation.addDependency(systemImpl);
  systemImpl.addDependency(installation);
  systemImpl.addDependency(dataMigration);
  systemImpl.addDependency(training);
  implementation.addDependency(launch);
  launch.addDependency(launchPlanning);
  launch.addDependency(marketing);
  launch.addDependency(customerSupport);

  // Uppföljningsfas
  const followUp = new Node('Uppföljningsfas');
  const followUpSystem = new Node('Uppföljning av systemanvändning');
  const feedback = new Node('Insamling av feedback');
  const adjustments = new Node('Justeringar och förbättringar');
  const maintenance = new Node('Löpande underhåll');
  const updates = new Node('Systemuppdateringar');
  const bugFixes = new Node('Hantering av buggar och problem');
  const securityUpdates = new Node('Säkerhetsuppdateringar');

  followUp.addDependency(followUpSystem);
  followUpSystem.addDependency(feedback);
  followUpSystem.addDependency(adjustments);
  followUp.addDependency(maintenance);
  maintenance.addDependency(updates);
  maintenance.addDependency(bugFixes);
  maintenance.addDependency(securityUpdates);

  // Print the network plan
  console.log('Network Plan:');
  preparation.printNode();
  planning.printNode();
  development.printNode();
  implementation.printNode();
  followUp.printNode();
}

createNetworkPlan();
