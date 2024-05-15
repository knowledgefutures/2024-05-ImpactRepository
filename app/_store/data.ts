import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

export type Pub = {
	id: string;
	pubType: string;
	published: boolean;
	title?: string;
	description?: string;
	authors?: string;
	url?: string;
	content?: string;
	budget?: string;
	objectives?: Array<string>;
	challenges?: Array<string>;
};
export type PubLibrary = Array<Pub>;

export type PubType = { name: string; fields: Array<string> };
export type PubTypeLibrary = Array<PubType>;

export type Connection = {
	sourceId: string;
	destinationId: string;
};
export type ConnectionLibrary = Array<Connection>;

export const $pubTypeLibrary = atom<PubTypeLibrary>([
	{ name: 'Project', fields: [] },
	{ name: 'File', fields: ['url'] },
	{ name: 'Git Repo', fields: ['url'] },
	{ name: 'Document', fields: ['content'] },
	{ name: 'Proposal', fields: ['content', 'budget', 'objectives', 'challenges'] },
	{ name: 'Dataset', fields: ['url'] },
	{ name: 'Topic', fields: [] },
	{ name: 'Audience', fields: [] },
]);

export const $pubs = persistentAtom<PubLibrary>(
	'pubLibrary',
	[
		{
			pubType: 'Project',
			id: '10.1244/1234.24',
			title: 'Synthetic Biomes in Agroecology',
			description:
				'Fabricating controlled agroecological zones to study microclimate effects on crop resilience.',
			published: true,
		},
		{
			pubType: 'Project',
			id: '10.1244/1234.25',
			title: 'Topological Insulators in Quantum Circuits',
			description:
				'Investigating the role of topological insulators in enhancing qubit stability for quantum computing.',
			published: true,
		},
		{
			pubType: 'Project',
			id: '10.1244/1234.26',
			title: 'Predictive Modelling of Atmospheric Anomalies',
			description:
				'Developing predictive models to analyze and forecast complex atmospheric perturbations using AI.',
			published: true,
		},
		{
			pubType: 'Project',
			id: '10.1244/1234.27',
			title: 'Cryptic Species Diversity in Deep Oceans',
			description:
				'Exploring hidden biodiversity in deep-sea environments to understand ecological niches and adaptations.',
			published: true,
		},
		{
			pubType: 'Project',
			id: '10.1244/1234.28',
			title: 'Next-Gen Photonic Crystals for Solar',
			description:
				'Engineering advanced photonic crystal structures to radically boost photovoltaic efficiency.',
			published: true,
		},
		{
			pubType: 'Project',
			id: '10.1244/1234.29',
			title: 'Metabolic Pathways in Personalized Medicine',
			description:
				'Deciphering individual metabolic pathways to tailor medical treatments through genomics.',
			published: true,
		},
		{
			pubType: 'Project',
			id: '10.1244/1234.30',
			title: 'Advanced Carbon Sequestration in Biochar',
			description:
				'Optimizing biochar composition for enhanced carbon sequestration capabilities in industrial applications.',
			published: true,
		},
		{
			pubType: 'Project',
			id: '10.1244/1234.31',
			title: 'Intelligent Transit Systems in Megacities',
			description:
				'Designing AI-driven transit systems to optimize flow and reduce congestion in large urban centers.',
			published: true,
		},

		{
			id: '10.497/66476',
			pubType: 'Git Repo',
			published: false,
			title: 'Arcadia-Science/metagenomics',
			url: 'github.com',
		},
		{
			id: '10.227/20651',
			pubType: 'Git Repo',
			published: false,
			title: 'Arcadia-Science/metagenomics',
			url: 'https://github.com/Arcadia-Science/metagenomics',
		},
		{
			id: '10.326/87758',
			pubType: 'Git Repo',
			published: false,
			title: 'Arcadia-Science/2023-nr-clustering',
			url: 'https://github.com/Arcadia-Science/2023-nr-clustering',
		},
		{
			id: '10.461/69764',
			pubType: 'Git Repo',
			published: false,
			title: 'Arcadia-Science/2023-nr-clustering',
			url: 'https://github.com/Arcadia-Science/2023-nr-clustering',
		},
		{
			id: '10.543/26671',
			pubType: 'Git Repo',
			published: true,
			title: 'Arcadia-Science/seqqc',
			url: 'https://github.com/Arcadia-Science/seqqc',
		},
		{
			id: '10.453/39031',
			pubType: 'Git Repo',
			published: false,
			title: 'Arcadia-Science/metagenomics',
			url: 'https://github.com/Arcadia-Science/metagenomics',
		},
		{
			id: '10.271/58086',
			pubType: 'Git Repo',
			published: true,
			title: 'Arcadia-Science/noveltree',
			url: 'https://github.com/Arcadia-Science/noveltree',
		},
		{
			id: '10.826/22310',
			pubType: 'File',
			published: true,
			title: 'projectArchive.zip',
			url: 'https://blob-storage.com/123',
		},
		{
			id: '10.826/22311',
			pubType: 'File',
			published: true,
			title: 'dataSetCollection.zip',
			url: 'https://blob-storage.com/124',
		},
		{
			id: '10.826/22312',
			pubType: 'File',
			published: true,
			title: 'finalReport.pdf',
			url: 'https://blob-storage.com/125',
		},
		{
			id: '10.826/22313',
			pubType: 'File',
			published: true,
			title: 'researchDocumentation.docx',
			url: 'https://blob-storage.com/126',
		},
		{
			id: '10.826/22314',
			pubType: 'File',
			published: true,
			title: 'supplementaryMaterials.zip',
			url: 'https://blob-storage.com/127',
		},
		{
			id: '10.826/22315',
			pubType: 'File',
			published: true,
			title: 'projectCodeRepository.zip',
			url: 'https://blob-storage.com/128',
		},
		{
			id: '10.6678/80901',
			pubType: 'Document',
			published: true,
			title: 'Advanced Techniques in Electron Microscopy',
			content:
				'This document explores the latest advancements in electron microscopy, detailing the development of ultra-high resolution imaging techniques that enable scientists to observe atomic structures in unprecedented detail. These innovations are critical for materials science, biology, and nanotechnology, offering new insights into atomic interactions and molecular arrangements.',
		},
		{
			id: '10.6678/80902',
			pubType: 'Document',
			published: true,
			title: 'Fluorescence Microscopy Innovations',
			content:
				'Fluorescence microscopy has been revolutionized by the introduction of new dyes and imaging techniques that enhance the visualization of cellular structures and complex biological processes. This document discusses the integration of these methodologies with live-cell imaging to track dynamic cellular events in real time, providing a deeper understanding of cellular function and disease pathology.',
		},
		{
			id: '10.6678/80903',
			pubType: 'Document',
			published: true,
			title: 'Cryo-Electron Microscopy and Protein Mapping',
			content:
				'This paper details the use of cryo-electron microscopy for detailed protein mapping, a technique that has dramatically advanced the field of structural biology. By freezing protein complexes at cryogenic temperatures, researchers can observe the arrangement of molecules without the artifacts introduced by traditional fixation methods.',
		},
		{
			id: '10.6678/80904',
			pubType: 'Document',
			published: true,
			title: 'Quantitative Phase Imaging in Clinical Diagnosis',
			content:
				'Quantitative phase imaging (QPI) techniques are increasingly used in clinical settings to provide non-invasive diagnostics. This document elaborates on how QPI provides detailed cellular morphology and can detect subtle changes that are indicative of disease, potentially leading to early diagnosis and improved treatment strategies.',
		},
		{
			id: '10.6678/80905',
			pubType: 'Document',
			published: true,
			title: 'Nanoparticle Tracking Using Atomic Force Microscopy',
			content:
				'This document examines the use of atomic force microscopy (AFM) for tracking nanoparticles within various environments. AFM provides a powerful tool for the study of particle dynamics at the nanoscale, enhancing our understanding of colloidal stability and nanoparticle interactions with biological systems.',
		},
		{
			id: '10.6678/80906',
			pubType: 'Document',
			published: true,
			title: 'Applications of Super-Resolution Microscopy in Neuroscience',
			content:
				'Super-resolution microscopy techniques, such as STED and PALM, are highlighted in this document for their pivotal role in neuroscience research. By breaking the diffraction limit of light, these methods allow for the visualization of neural structures and processes at the molecular level, offering new insights into neural pathways and synaptic functions.',
		},
		{
			id: '10.6678/80907',
			pubType: 'Document',
			published: true,
			title: 'Environmental Scanning Electron Microscopy in Geology',
			content:
				'The application of environmental scanning electron microscopy in geology provides detailed analyses of mineral compositions and real-time chemical reactions. This document describes how these observations are essential for understanding geological formations and processes, offering significant insights into earth science studies.',
		},
		{
			id: '10.6678/80908',
			pubType: 'Document',
			published: true,
			title: 'High-Speed Atomic Force Microscopy in Live-Cell Imaging',
			content:
				'This paper presents the applications of high-speed atomic force microscopy in live-cell imaging, focusing on its ability to provide dynamic topographical imaging of cellular processes. The document details how this technique has enabled the observation of cellular interactions and mechanical properties with high temporal resolution.',
		},
		{
			id: '10.6678/80909',
			pubType: 'Document',
			published: true,
			title: 'Multiphoton Excitation Microscopy in Deep Tissue Imaging',
			content:
				'Multiphoton excitation microscopy is detailed in this document as a crucial tool for deep tissue imaging, particularly in biomedical research. Its ability to provide high-resolution images deep within tissues allows for better understanding of complex biological systems and the progression of deep-seated diseases.',
		},
		{
			id: '10.6678/80910',
			pubType: 'Document',
			published: true,
			title: 'Phase Contrast Microscopy in Cancer Research',
			content:
				'This document reviews the application of phase contrast microscopy in cancer research, emphasizing its utility in visualizing unstained cells and tissues. By enhancing contrast in transparent specimens, researchers can better understand cellular morphology and tumor progression without the need for invasive dyes or chemicals.',
		},
		{
			id: '10.6678/80911',
			pubType: 'Document',
			published: true,
			title: 'Correlative Light and Electron Microscopy Techniques',
			content:
				'Correlative light and electron microscopy (CLEM) techniques bridge the resolution gap between light and electron microscopy, providing comprehensive insights into cellular structures and their functions. This document elaborates on how CLEM is used to correlate functional imaging with ultrastructural analysis, enhancing the accuracy of biological observations.',
		},
		{
			id: '10.6678/80912',
			pubType: 'Document',
			published: true,
			title: 'Innovations in Live-cell X-ray Microscopy',
			content:
				'This document discusses the advancements in live-cell X-ray microscopy, a technique that offers unique capabilities to visualize the internal structures of living cells without disruption. The content highlights the potential of this technique in providing critical insights into cellular functions and disease mechanisms.',
		},
		{
			id: '10.2128/pr.12987',
			pubType: 'Proposal',
			published: true,
			title: 'An Open Map for Collaborative Knowledge',
			content:
				'This proposal seeks to create an open-access platform that maps the connections between various scientific disciplines, facilitating interdisciplinary research and knowledge sharing.',
			budget: '$2,350,000',
			objectives: [
				'Develop an interactive, web-based platform for knowledge sharing',
				'Establish partnerships with major research institutions',
			],
			challenges: [
				'Integrating diverse fields of study',
				'Ensuring user-friendly interface and experience',
			],
		},
		{
			id: '10.2128/pr.12988',
			pubType: 'Proposal',
			published: false,
			title: 'Decoding Neural Mechanisms in Real-Time',
			content:
				'This research aims to utilize advanced imaging techniques to observe and decode neural activity as it occurs, enhancing our understanding of brain functions.',
			budget: '$4,600,000',
			objectives: [
				'Upgrade imaging facilities with real-time processing capabilities',
				'Train researchers in neuroimaging and data analysis',
			],
			challenges: [
				'Developing non-invasive real-time imaging technologies',
				'Handling and processing large datasets in real time',
			],
		},
		{
			id: '10.2128/pr.12989',
			pubType: 'Proposal',
			published: true,
			title: 'Artificial Photosynthesis for Sustainable Energy',
			content:
				'The project proposes to develop a system mimicking natural photosynthesis to create sustainable energy sources, reducing dependency on fossil fuels.',
			budget: '$5,500,000',
			objectives: [
				'Design and prototype artificial leaf technology',
				'Conduct field tests to evaluate efficiency and scalability',
			],
			challenges: [
				'Achieving cost-effective energy conversion',
				'Ensuring environmental compatibility and durability of materials',
			],
		},
		{
			id: '10.2128/pr.12990',
			pubType: 'Proposal',
			published: true,
			title: 'Quantum Computing to Revolutionize Cryptography',
			content:
				'This proposal focuses on using quantum computing technologies to develop next-generation cryptography methods that are secure against quantum attacks.',
			budget: '$8,000,000',
			objectives: [
				'Develop quantum-resistant encryption algorithms',
				'Collaborate with tech companies for implementation',
			],
			challenges: [
				'Quantum hardware development and stability',
				'Integration with current digital security infrastructure',
			],
		},
		{
			id: '10.2128/pr.12991',
			pubType: 'Proposal',
			published: true,
			title: 'Global Climate Modeling and Prediction Enhancement',
			content:
				'This project aims to enhance global climate models to predict weather and climate changes more accurately through advanced computing and satellite data.',
			budget: '$7,250,000',
			objectives: [
				'Improve computational models for climate prediction',
				'Expand the database with more comprehensive satellite data',
			],
			challenges: [
				'Increasing model resolution',
				'Improving data assimilation from multiple sources',
			],
		},
		{
			id: '10.2128/pr.12992',
			pubType: 'Proposal',
			published: false,
			title: 'Pioneering Gene Therapy for Rare Genetic Disorders',
			content:
				'This proposal focuses on developing gene therapies for rare genetic disorders, potentially providing life-saving treatments to patients with limited options.',
			budget: '$12,000,000',
			objectives: [
				'Identify and target specific genetic mutations',
				'Conduct clinical trials to test therapy efficacy and safety',
			],
			challenges: [
				'Ethical concerns and regulatory approval',
				'Scaling up production for widespread clinical use',
			],
		},
		{
			id: '10.2128/pr.12993',
			pubType: 'Proposal',
			published: false,
			title: 'Harnessing Microbial Fuel Cells',
			content:
				'This project aims to develop microbial fuel cells that can efficiently convert organic waste into electricity, offering an innovative solution to waste management and sustainable energy production.',
			budget: '$6,000,000',
			objectives: [
				'Optimize microbial consortia for higher energy output',
				'Pilot scale testing in urban waste management systems',
			],
			challenges: [
				'Maintaining system efficiency over long periods',
				'Integrating technology into existing waste management infrastructure',
			],
		},
		{
			id: '10.2128/pr.12994',
			pubType: 'Proposal',
			published: false,
			title: 'Synthetic Biopolymer Development',
			content:
				'This research proposes to synthesize biodegradable polymers that can replace conventional plastics, significantly reducing environmental pollution.',
			budget: '$4,200,000',
			objectives: [
				'Develop and test new biopolymer formulas',
				'Assess environmental impact and degradation rates',
			],
			challenges: [
				'Achieving performance parity with synthetic plastics',
				'Cost-effective production at scale',
			],
		},
		{
			id: '10.2128/pr.12995',
			pubType: 'Proposal',
			published: false,
			title: 'Revolutionizing Drug Delivery with Nanotechnology',
			content:
				'This proposal seeks to develop novel nanotechnology-based drug delivery systems to target diseased cells more effectively, minimizing side effects and improving patient outcomes.',
			budget: '$9,800,000',
			objectives: [
				'Design targeted delivery mechanisms',
				'Conduct pre-clinical trials to determine efficacy and safety',
			],
			challenges: [
				'Navigating the regulatory landscape for new medical devices',
				'Ensuring precision in targeting mechanisms',
			],
		},
		{
			id: '10.2128/pr.12996',
			pubType: 'Proposal',
			published: false,
			title: 'Next Generation Telescopes for Exoplanet Discovery',
			content:
				'The aim of this project is to develop advanced optical and sensing technologies for next-generation telescopes to enhance our capability to discover and study exoplanets.',
			budget: '$11,500,000',
			objectives: [
				'Develop ultra-sensitive imaging sensors',
				'Expand our understanding of potentially habitable planets',
			],
			challenges: [
				'Technical challenges in developing high-resolution sensors',
				'Large data processing requirements',
			],
		},
		{
			id: '10.2128/pr.12997',
			pubType: 'Proposal',
			published: false,
			title: 'AI-Driven Approaches to Historical Data Analysis',
			content:
				'This proposal aims to apply artificial intelligence techniques to analyze and interpret vast amounts of historical data, potentially transforming our understanding of historical events.',
			budget: '$3,300,000',
			objectives: [
				'Develop AI models to process and analyze historical texts',
				'Create a public digital archive of historical documents',
			],
			challenges: [
				'Accuracy of AI in understanding historical context',
				'Digitizing and curating large volumes of data',
			],
		},
		{
			id: '10.2128/pr.12998',
			pubType: 'Proposal',
			published: false,
			title: 'Mitigating Urban Heat Islands with Innovative Materials',
			content:
				'This research proposes to develop and implement innovative building materials designed to reduce urban heat island effects, thus lowering urban temperatures and improving living conditions.',
			budget: '$7,800,000',
			objectives: [
				'Test new reflective and cooling materials in urban settings',
				'Analyze the impact on local climate and energy consumption',
			],
			challenges: [
				'Adapting materials for diverse urban environments',
				'Community acceptance and implementation',
			],
		},
		{
			id: '10.2128/pr.12999',
			pubType: 'Proposal',
			published: false,
			title: 'Deep Sea Exploration Technologies',
			content:
				'The focus of this proposal is to advance deep-sea exploration technologies to enable detailed study of oceanic depths, unlocking mysteries of underwater ecosystems and geological formations.',
			budget: '$14,000,000',
			objectives: [
				'Develop remote-operated vehicles for deep-sea exploration',
				'Discover and document new marine species and habitats',
			],
			challenges: [
				'High-pressure and low-temperature operational challenges',
				'Data transmission over long distances underwater',
			],
		},
		{
			id: '10.2128/pr.13000',
			pubType: 'Proposal',
			published: false,
			title: 'Automating Soil Analysis for Sustainable Agriculture',
			content:
				'This proposal aims to automate soil analysis using advanced sensors and AI, providing farmers with real-time data to enhance crop production while maintaining environmental sustainability.',
			budget: '$5,100,000',
			objectives: [
				'Develop integrated sensor networks for soil assessment',
				'Implement AI algorithms for real-time data interpretation',
			],
			challenges: [
				'Ensuring accuracy and reliability of sensors in diverse agricultural environments',
				'User adoption and integration with existing farming practices',
			],
		},
		{
			id: '10.2128/pr.13001',
			pubType: 'Proposal',
			published: false,
			title: 'Innovative Therapies for Neurodegenerative Diseases',
			content:
				'This research intends to develop innovative therapeutic strategies for neurodegenerative diseases, focusing on early detection and halting disease progression through novel drug targets.',
			budget: '$12,400,000',
			objectives: [
				'Identify new biomarkers for early diagnosis',
				'Test novel compounds in preclinical models',
			],
			challenges: [
				'Crossing the blood-brain barrier with therapeutic agents',
				'Ethical considerations in clinical trials',
			],
		},
		{
			id: '10.2128/pr.13002',
			pubType: 'Proposal',
			published: false,
			title: 'Precision Agriculture Techniques for Water Conservation',
			content:
				'The project aims to develop and implement precision agriculture techniques to optimize water usage, reducing waste and improving yields in water-scarce regions.',
			budget: '$6,700,000',
			objectives: [
				'Utilize satellite imagery and IoT for crop water management',
				'Develop models for predictive irrigation',
			],
			challenges: [
				'Technical integration across diverse agricultural systems',
				'Training farmers to adopt new technologies',
			],
		},
		{
			id: '10.2128/pr.13003',
			pubType: 'Proposal',
			published: false,
			title: 'Breakthroughs in Non-Invasive Cancer Diagnostics',
			content:
				'This proposal is focused on developing non-invasive diagnostic tools that can detect cancer at its earliest stages, improving patient outcomes and reducing healthcare costs.',
			budget: '$8,500,000',
			objectives: [
				'Create sensitive biomarker detection systems',
				'Validate diagnostic tools in clinical settings',
			],
			challenges: [
				'Achieving high specificity and sensitivity',
				'Regulatory and market acceptance',
			],
		},
		{
			id: '10.2128/pr.13004',
			pubType: 'Proposal',
			published: false,
			title: "Mapping the Microbiome's Role in Human Health",
			content:
				'This research seeks to map the complex interactions within the human microbiome, elucidating its role in health and disease with the goal of developing microbiome-modulating therapies.',
			budget: '$9,300,000',
			objectives: [
				'Catalog comprehensive microbiome profiles',
				'Identify correlations between microbiome and disease',
			],
			challenges: [
				'Complexity of microbiome interactions',
				'Developing safe and effective microbiome therapies',
			],
		},
		{
			id: '10.2128/pr.13005',
			pubType: 'Proposal',
			published: false,
			title: 'Exploring the Quantum Materials Frontier',
			content:
				'This proposal aims to explore and understand new quantum materials that could revolutionize electronics through superconductivity, magnetoresistance, and other novel properties.',
			budget: '$13,500,000',
			objectives: [
				'Synthesize and characterize novel quantum materials',
				'Investigate practical applications in electronics and computing',
			],
			challenges: [
				'Stability and reproducibility of materials',
				'Scaling from laboratory to industry',
			],
		},
		{
			id: '10.2128/pr.13006',
			pubType: 'Proposal',
			published: false,
			title: 'Advancements in Remote Sensing for Environmental Monitoring',
			content:
				'This research proposal focuses on the advancement of remote sensing technologies to monitor environmental changes and assist in the management of natural resources.',
			budget: '$7,450,000',
			objectives: [
				'Develop more accurate and resilient sensing technologies',
				'Integrate data with global environmental management systems',
			],
			challenges: [
				'Data accuracy and resolution at large scales',
				'Interoperability of different remote sensing data sources',
			],
		},
		{
			id: '10.2128/pr.13007',
			pubType: 'Proposal',
			published: false,
			title: 'Synthetic Genome Construction for Medical Research',
			content:
				'The project proposes constructing synthetic genomes to better understand genetic diseases and develop targeted treatments, advancing the field of synthetic biology.',
			budget: '$14,200,000',
			objectives: [
				'Construct fully synthetic chromosomes for disease research',
				'Utilize synthetic genomes in drug development processes',
			],
			challenges: [
				'Ethical and safety considerations of synthetic biology',
				'Technical difficulties in genome synthesis',
			],
		},
		{
			id: '10.2128/pr.13008',
			pubType: 'Proposal',
			published: false,
			title: 'Sustainable Urban Infrastructure',
			content:
				'This project focuses on designing sustainable urban infrastructure solutions that integrate green technology and innovative materials to improve urban living environments.',
			budget: '$10,000,000',
			objectives: [
				'Develop new construction materials that reduce environmental impact',
				'Implement green roofs and walls in urban areas',
			],
			challenges: [
				'Adapting infrastructure to existing urban layouts',
				'Long-term maintenance and sustainability of green installations',
			],
		},
		{
			id: '10.2128/pr.13009',
			pubType: 'Proposal',
			published: false,
			title: 'Advanced Robotics in Pediatric Medicine',
			content:
				'This proposal aims to develop advanced robotic systems to assist in pediatric medicine, enhancing surgical precision and improving patient safety during complex procedures.',
			budget: '$8,250,000',
			objectives: [
				'Design robotic systems for pediatric surgery',
				'Train medical staff in robotic operation and maintenance',
			],
			challenges: [
				'Ensuring the safety and reliability of robotic systems',
				'Integrating robotics into current medical practice',
			],
		},
		{
			id: '10.2128/pr.13010',
			pubType: 'Proposal',
			published: false,
			title: 'The Next Generation of Internet Security',
			content:
				'This research proposal focuses on creating next-generation cybersecurity solutions to protect against the evolving landscape of Internet threats.',
			budget: '$12,750,000',
			objectives: [
				'Develop advanced cryptographic techniques',
				'Create a decentralized system for internet security',
			],
			challenges: [
				'Keeping pace with rapid advancements in hacking techniques',
				'Ensuring user privacy and data protection',
			],
		},
		{
			id: '10.2128/pr.13011',
			pubType: 'Proposal',
			published: false,
			title: 'Harnessing Ocean Energy',
			content:
				'The proposal seeks to harness ocean energy efficiently through the development of new technologies that capture wave and tidal energy, providing a sustainable energy source.',
			budget: '$9,900,000',
			objectives: [
				'Design and test new devices for capturing tidal and wave energy',
				'Assess the environmental impacts of these technologies',
			],
			challenges: [
				'Technology durability in harsh ocean conditions',
				'Cost-effectiveness of energy production',
			],
		},
		{
			id: '10.2128/pr.13012',
			pubType: 'Proposal',
			published: false,
			title: 'Biodegradable Electronics for Sustainable Tech',
			content:
				'This project proposes the development of fully biodegradable electronics, aiming to reduce e-waste and promote sustainability in technology.',
			budget: '$7,600,000',
			objectives: [
				'Develop materials and components for biodegradable electronics',
				'Pilot the recycling and decomposition processes',
			],
			challenges: [
				'Ensuring performance and durability of biodegradable components',
				'Consumer acceptance and market transition',
			],
		},
		{
			id: '10.2128/pr.13013',
			pubType: 'Proposal',
			published: false,
			title: 'Antimicrobial Resistance: New Frontiers',
			content:
				'This proposal aims to tackle the growing challenge of antimicrobial resistance through innovative research into new drugs and treatment strategies.',
			budget: '$11,300,000',
			objectives: [
				'Discover new antimicrobial agents',
				'Develop alternative treatment approaches',
			],
			challenges: [
				'Rapid evolution of resistant pathogens',
				'Clinical trial design and regulatory hurdles',
			],
		},
		{
			id: '10.2128/pr.13014',
			pubType: 'Proposal',
			published: false,
			title: 'Artificial Intelligence in Judicial Systems',
			content:
				'The project seeks to integrate artificial intelligence into judicial systems to improve efficiency and fairness in legal proceedings.',
			budget: '$6,800,000',
			objectives: [
				'Develop AI tools for case analysis and legal research',
				'Test AI interventions in mock trial scenarios',
			],
			challenges: [
				'Ethical considerations and bias in AI applications',
				'Acceptance and trust from legal professionals',
			],
		},
		{
			id: '10.2128/pr.13015',
			pubType: 'Proposal',
			published: false,
			title: 'Climate Change and Infectious Diseases',
			content:
				'This research focuses on understanding the link between climate change and the spread of infectious diseases, aiming to predict and mitigate future outbreaks.',
			budget: '$8,000,000',
			objectives: [
				'Model disease vectors and climate data',
				'Develop strategies for outbreak prevention and control',
			],
			challenges: [
				'Accuracy of predictive modeling',
				'Coordination between public health and climate science agencies',
			],
		},
		{
			id: '10.2128/pr.13016',
			pubType: 'Proposal',
			published: false,
			title: 'Expanding Telemedicine Capabilities',
			content:
				'The proposal aims to expand telemedicine capabilities to provide healthcare services to remote and underserved populations, enhancing access to medical care.',
			budget: '$5,500,000',
			objectives: [
				'Develop and deploy telemedicine platforms',
				'Train healthcare providers in digital health technologies',
			],
			challenges: [
				'Technology infrastructure in rural areas',
				'Ensuring privacy and security of medical data',
			],
		},
		{
			id: '10.2128/pr.13017',
			pubType: 'Proposal',
			published: false,
			title: 'Advanced Particle Accelerators for Medical Applications',
			content:
				'This proposal aims to develop advanced particle accelerators that can be used in medical applications, particularly in cancer therapy, to improve treatment precision and outcomes.',
			budget: '$13,400,000',
			objectives: [
				'Miniaturize particle accelerator technology for clinical use',
				'Conduct trials to compare effectiveness with existing therapies',
			],
			challenges: [
				'Engineering challenges in scaling down technology',
				'Regulatory and clinical adoption',
			],
		},
		{
			id: '10.2128/pr.13018',
			pubType: 'Proposal',
			published: false,
			title: 'Smart Grid Technology for Energy Efficiency',
			content:
				'This research aims to develop and implement smart grid technologies to improve energy efficiency and manage consumer energy usage in an environmentally sustainable manner.',
			budget: '$10,200,000',
			objectives: [
				'Enhance grid infrastructure with IoT devices',
				'Implement energy management systems in urban areas',
			],
			challenges: [
				'Integration of renewable energy sources',
				'Consumer adoption of energy management technologies',
			],
		},
		{
			id: '10.2128/pr.13019',
			pubType: 'Proposal',
			published: false,
			title: 'Cognitive Computing in Business Analytics',
			content:
				'The proposal explores the application of cognitive computing to revolutionize business analytics, enhancing decision-making processes with AI-driven insights.',
			budget: '$9,150,000',
			objectives: [
				'Develop cognitive computing solutions for real-time analytics',
				'Integrate AI with existing business intelligence tools',
			],
			challenges: [
				'Data privacy and ethical use of AI',
				'Scalability of AI systems across different industries',
			],
		},
		{
			id: '10.2128/pr.13020',
			pubType: 'Proposal',
			published: false,
			title: 'Revitalizing Coral Reefs with Genetic Engineering',
			content:
				'This innovative proposal seeks to use genetic engineering to develop coral species that can withstand the harsh conditions caused by climate change, aiming to revitalize dying coral reefs.',
			budget: '$7,750,000',
			objectives: [
				'Genetically modify corals for enhanced thermal resistance',
				'Deploy engineered corals in affected reef areas',
			],
			challenges: [
				'Potential ecological impacts of genetically modified corals',
				'Public and regulatory acceptance of genetic interventions in natural ecosystems',
			],
		},
		{
			id: 'dataset.01',
			pubType: 'Dataset',
			title: 'Global Temperature Anomalies',
			url: 'assets.pubpub.org/data/global-temperature-anomalies.csv',
			published: true,
		},
		{
			id: 'dataset.02',
			pubType: 'Dataset',
			title: 'Arctic Sea Ice Extent',
			url: 'assets.pubpub.org/data/arctic-sea-ice-extent.csv',
			published: true,
		},
		{
			id: 'dataset.03',
			pubType: 'Dataset',
			title: 'Atmospheric CO2 Concentrations',
			url: 'assets.pubpub.org/data/atmospheric-co2-concentrations.csv',
			published: true,
		},
		{
			id: 'dataset.04',
			pubType: 'Dataset',
			title: 'Global Precipitation Patterns',
			url: 'assets.pubpub.org/data/global-precipitation-patterns.csv',
			published: true,
		},
		{
			id: 'dataset.05',
			pubType: 'Dataset',
			title: 'Sea Level Rise Data',
			url: 'assets.pubpub.org/data/sea-level-rise-data.csv',
			published: true,
		},
		{
			id: 'dataset.06',
			pubType: 'Dataset',
			title: 'Ocean Acidification Levels',
			url: 'assets.pubpub.org/data/ocean-acidification-levels.csv',
			published: true,
		},
		{
			id: 'dataset.07',
			pubType: 'Dataset',
			title: 'Deforestation Rates',
			url: 'assets.pubpub.org/data/deforestation-rates.csv',
			published: true,
		},
		{
			id: 'dataset.08',
			pubType: 'Dataset',
			title: 'Coral Reef Bleaching Events',
			url: 'assets.pubpub.org/data/coral-reef-bleaching-events.csv',
			published: true,
		},
		{
			id: 'dataset.09',
			pubType: 'Dataset',
			title: 'Greenhouse Gas Emissions',
			url: 'assets.pubpub.org/data/greenhouse-gas-emissions.csv',
			published: true,
		},
		{
			id: 'dataset.10',
			pubType: 'Dataset',
			title: 'Glacier Mass Balance',
			url: 'assets.pubpub.org/data/glacier-mass-balance.csv',
			published: true,
		},

		{
			id: 'tag.01',
			pubType: 'Topic',
			title: 'Molecular Biology',
			published: true,
		},
		{
			id: 'tag.02',
			pubType: 'Topic',
			title: 'Quantum Mechanics',
			published: true,
		},
		{
			id: 'tag.03',
			pubType: 'Topic',
			title: 'Environmental Science',
			published: true,
		},
		{
			id: 'tag.04',
			pubType: 'Topic',
			title: 'Neuroscience',
			published: true,
		},
		{
			id: 'tag.05',
			pubType: 'Topic',
			title: 'Artificial Intelligence',
			published: true,
		},
		{
			id: 'tag.06',
			pubType: 'Topic',
			title: 'Astrophysics',
			published: true,
		},
		{
			id: 'tag.07',
			pubType: 'Topic',
			title: 'Epidemiology',
			published: true,
		},
		{
			id: 'tag.08',
			pubType: 'Topic',
			title: 'Materials Science',
			published: true,
		},
		{
			id: 'tag.09',
			pubType: 'Topic',
			title: 'Chemical Engineering',
			published: true,
		},
		{
			id: 'audience.01',
			pubType: 'Audience',
			title: 'Policy Makers',
			published: true,
		},
		{
			id: 'audience.02',
			pubType: 'Audience',
			title: 'Foundations',
			published: true,
		},
		{
			id: 'audience.03',
			pubType: 'Audience',
			title: 'Climate Ventures',
			published: true,
		},
		{
			id: 'audience.04',
			pubType: 'Audience',
			title: 'Educators',
			published: true,
		},
	],
	{ encode: JSON.stringify, decode: JSON.parse }
);

export type Person = {
	id: string;
	name: string;
	pubType: 'Contributor';
};
export const $people = atom<Array<Person>>([
	{ id: '01', name: 'Luisa Fernández', pubType: 'Contributor' },
	{ id: '02', name: 'Karan Singh', pubType: 'Contributor' },
	{ id: '03', name: 'Yuto Nakamura', pubType: 'Contributor' },
	{ id: '04', name: 'Amina Diop', pubType: 'Contributor' },
	{ id: '05', name: 'Chen Wei', pubType: 'Contributor' },
	{ id: '06', name: 'Olivia Brown', pubType: 'Contributor' },
	{ id: '07', name: 'Ayaan Patel', pubType: 'Contributor' },
	{ id: '08', name: 'Li Wei Zhang', pubType: 'Contributor' },
	{ id: '09', name: 'Carlos Ruiz', pubType: 'Contributor' },
	{ id: '10', name: 'Fatima Al-Farsi', pubType: 'Contributor' },
	{ id: '11', name: 'Elena Sokolova', pubType: 'Contributor' },
	{ id: '12', name: 'Keiko Tanaka', pubType: 'Contributor' },
	{ id: '13', name: 'Jean-Claude Dupont', pubType: 'Contributor' },
	{ id: '14', name: 'Chidi Obi', pubType: 'Contributor' },
	{ id: '15', name: 'Maya Cohen', pubType: 'Contributor' },
	{ id: '16', name: 'Sofia Rossi', pubType: 'Contributor' },
	{ id: '17', name: 'Amir Haddad', pubType: 'Contributor' },
	{ id: '18', name: 'Hannah Schmidt', pubType: 'Contributor' },
	{ id: '19', name: 'Samuel Okafor', pubType: 'Contributor' },
	{ id: '20', name: 'Olga Petrova', pubType: 'Contributor' },
	{ id: '21', name: 'David Kim', pubType: 'Contributor' },
]);

export const $connections = persistentAtom<ConnectionLibrary>(
	'connectionLibrary',
	[
		{ sourceId: '10.1244/1234.24', destinationId: '10.497/66476' },
		{ sourceId: '10.1244/1234.25', destinationId: '10.227/20651' },
		{ sourceId: '10.1244/1234.26', destinationId: '10.326/87758' },
		{ sourceId: '10.1244/1234.27', destinationId: '10.461/69764' },
		{ sourceId: '10.1244/1234.28', destinationId: '10.543/26671' },
		{ sourceId: '10.1244/1234.29', destinationId: '10.453/39031' },
		{ sourceId: '10.1244/1234.30', destinationId: '10.271/58086' },
		{ sourceId: '10.1244/1234.31', destinationId: '10.826/22310' },
		{ sourceId: '10.1244/1234.24', destinationId: '10.826/22311' },
		{ sourceId: '10.1244/1234.25', destinationId: '10.826/22312' },
		{ sourceId: '10.1244/1234.26', destinationId: '10.826/22313' },
		{ sourceId: '10.1244/1234.27', destinationId: '10.826/22314' },
		{ sourceId: '10.1244/1234.28', destinationId: '10.826/22315' },
		{ sourceId: '10.1244/1234.29', destinationId: '10.6678/80901' },
		{ sourceId: '10.1244/1234.30', destinationId: '10.6678/80902' },
		{ sourceId: '10.1244/1234.31', destinationId: '10.6678/80903' },
		{ sourceId: '10.1244/1234.24', destinationId: '10.6678/80904' },
		{ sourceId: '10.1244/1234.25', destinationId: '10.6678/80905' },
		{ sourceId: '10.1244/1234.26', destinationId: '10.6678/80906' },
		{ sourceId: '10.1244/1234.27', destinationId: '10.6678/80907' },
		{ sourceId: '10.1244/1234.28', destinationId: '10.6678/80908' },
		{ sourceId: '10.1244/1234.29', destinationId: '10.6678/80909' },
		{ sourceId: '10.1244/1234.30', destinationId: '10.6678/80910' },
		{ sourceId: '10.1244/1234.31', destinationId: '10.6678/80911' },
		{ sourceId: '10.1244/1234.24', destinationId: '10.6678/80912' },
		{ sourceId: '10.2128/pr.12987', destinationId: '01' },
		{ sourceId: '10.2128/pr.12988', destinationId: '02' },
		{ sourceId: '10.2128/pr.12989', destinationId: '03' },
		{ sourceId: '10.2128/pr.12990', destinationId: '04' },
		{ sourceId: '10.2128/pr.12991', destinationId: '05' },
		{ sourceId: '10.2128/pr.12992', destinationId: '06' },
		{ sourceId: '10.2128/pr.12993', destinationId: '07' },
		{ sourceId: '10.2128/pr.12994', destinationId: '08' },
		{ sourceId: '10.2128/pr.12995', destinationId: '09' },
		{ sourceId: '10.2128/pr.12996', destinationId: '01' },
		{ sourceId: '10.2128/pr.12997', destinationId: '02' },
		{ sourceId: '10.2128/pr.12998', destinationId: '03' },
		{ sourceId: '10.2128/pr.12999', destinationId: '04' },
		{ sourceId: '10.2128/pr.13000', destinationId: '05' },
		{ sourceId: '10.2128/pr.13001', destinationId: '06' },
		{ sourceId: '10.2128/pr.13002', destinationId: '07' },
		{ sourceId: '10.2128/pr.13003', destinationId: '08' },
		{ sourceId: '10.2128/pr.13004', destinationId: '09' },
		{ sourceId: '10.2128/pr.13005', destinationId: '01' },
		{ sourceId: '10.2128/pr.13006', destinationId: '02' },
		{ sourceId: '10.2128/pr.13007', destinationId: '03' },
		{ sourceId: '10.1244/1234.24', destinationId: '10' },
		{ sourceId: '10.1244/1234.25', destinationId: '11' },
		{ sourceId: '10.1244/1234.26', destinationId: '12' },
		{ sourceId: '10.1244/1234.27', destinationId: '13' },
		{ sourceId: '10.1244/1234.28', destinationId: '14' },
		{ sourceId: '10.1244/1234.29', destinationId: '15' },
		{ sourceId: '10.1244/1234.30', destinationId: '16' },
		{ sourceId: '10.1244/1234.31', destinationId: '17' },
		{ sourceId: '10.1244/1234.24', destinationId: '18' },
		{ sourceId: '10.1244/1234.25', destinationId: '19' },
		{ sourceId: '10.1244/1234.26', destinationId: '20' },
		{ sourceId: '10.1244/1234.27', destinationId: '21' },
		{ sourceId: '10.1244/1234.28', destinationId: '10' },
		{ sourceId: '10.1244/1234.29', destinationId: '10' },
		{ sourceId: '10.1244/1234.30', destinationId: '10' },
		{ sourceId: '10.1244/1234.31', destinationId: '10' },
		{ sourceId: '10.1244/1234.24', destinationId: '10' },
		{ sourceId: '10.1244/1234.25', destinationId: '11' },
		{ sourceId: '10.1244/1234.26', destinationId: '11' },
		{ sourceId: '10.1244/1234.27', destinationId: '11' },
		{ sourceId: '10.1244/1234.28', destinationId: '11' },
		{ sourceId: '10.1244/1234.29', destinationId: '11' },
		{ sourceId: '10.1244/1234.30', destinationId: '12' },
		{ sourceId: '10.1244/1234.31', destinationId: '12' },
		{ sourceId: '10.1244/1234.24', destinationId: '12' },
		{ sourceId: '10.1244/1234.24', destinationId: '13' },
		{ destinationId: '10.2128/pr.12987', sourceId: 'tag.01' },
		{ destinationId: '10.2128/pr.12988', sourceId: 'tag.02' },
		{ destinationId: '10.2128/pr.12989', sourceId: 'tag.03' },
		{ destinationId: '10.2128/pr.12990', sourceId: 'tag.04' },
		{ destinationId: '10.2128/pr.12991', sourceId: 'tag.05' },
		{ destinationId: '10.2128/pr.12992', sourceId: 'tag.06' },
		{ destinationId: '10.2128/pr.12993', sourceId: 'tag.07' },
		{ destinationId: '10.2128/pr.12994', sourceId: 'tag.08' },
		{ destinationId: '10.2128/pr.12995', sourceId: 'tag.09' },
		{ destinationId: '10.2128/pr.12996', sourceId: 'tag.01' },
		{ destinationId: '10.2128/pr.12997', sourceId: 'tag.02' },
		{ destinationId: '10.2128/pr.12998', sourceId: 'tag.03' },
		{ destinationId: '10.2128/pr.12999', sourceId: 'tag.04' },
		{ destinationId: '10.2128/pr.13000', sourceId: 'tag.05' },
		{ destinationId: '10.2128/pr.13001', sourceId: 'tag.06' },
		{ destinationId: '10.2128/pr.13002', sourceId: 'tag.07' },
		{ destinationId: '10.2128/pr.13003', sourceId: 'tag.08' },
		{ destinationId: '10.2128/pr.13004', sourceId: 'tag.09' },
		{ destinationId: '10.2128/pr.13005', sourceId: 'tag.02' },
		{ destinationId: '10.2128/pr.13006', sourceId: 'tag.02' },
		{ destinationId: '10.2128/pr.13007', sourceId: 'tag.02' },
		{ destinationId: '10.2128/pr.13008', sourceId: 'tag.02' },
		{ destinationId: '10.2128/pr.13009', sourceId: 'tag.01' },
		{ destinationId: '10.2128/pr.13010', sourceId: 'tag.01' },
		{ destinationId: '10.2128/pr.13011', sourceId: 'tag.01' },
		{ destinationId: '10.2128/pr.13012', sourceId: 'tag.01' },
		{ destinationId: '10.2128/pr.13013', sourceId: 'tag.01' },
		{ destinationId: '10.2128/pr.13014', sourceId: 'tag.04' },
		{ destinationId: '10.2128/pr.13015', sourceId: 'tag.04' },
		{ destinationId: '10.2128/pr.13016', sourceId: 'tag.04' },
		{ destinationId: '10.2128/pr.13017', sourceId: 'tag.04' },
		{ destinationId: '10.2128/pr.13018', sourceId: 'tag.05' },
		{ destinationId: '10.2128/pr.13019', sourceId: 'tag.05' },
		{ destinationId: '10.2128/pr.13020', sourceId: 'tag.05' },

		{ destinationId: '10.1244/1234.24', sourceId: 'audience.01' },
		{ destinationId: '10.1244/1234.25', sourceId: 'audience.01' },
		{ destinationId: '10.1244/1234.26', sourceId: 'audience.01' },
		{ destinationId: '10.1244/1234.27', sourceId: 'audience.01' },
		{ destinationId: '10.1244/1234.28', sourceId: 'audience.01' },
		{ destinationId: '10.1244/1234.29', sourceId: 'audience.01' },
		{ destinationId: '10.1244/1234.30', sourceId: 'audience.01' },
		{ destinationId: '10.1244/1234.31', sourceId: 'audience.01' },
		{ destinationId: '10.497/66476', sourceId: 'audience.02' },
		{ destinationId: '10.227/20651', sourceId: 'audience.02' },
		{ destinationId: '10.326/87758', sourceId: 'audience.02' },
		{ destinationId: '10.461/69764', sourceId: 'audience.02' },
		{ destinationId: '10.543/26671', sourceId: 'audience.02' },
		{ destinationId: '10.453/39031', sourceId: 'audience.02' },
		{ destinationId: '10.271/58086', sourceId: 'audience.02' },
		{ destinationId: '10.826/22310', sourceId: 'audience.02' },
		{ destinationId: '10.826/22311', sourceId: 'audience.02' },
		{ destinationId: '10.826/22312', sourceId: 'audience.02' },
		{ destinationId: '10.826/22313', sourceId: 'audience.02' },
		{ destinationId: '10.826/22314', sourceId: 'audience.02' },
		{ destinationId: '10.826/22315', sourceId: 'audience.02' },
		{ destinationId: '10.6678/80901', sourceId: 'audience.03' },
		{ destinationId: '10.6678/80902', sourceId: 'audience.03' },
		{ destinationId: '10.6678/80903', sourceId: 'audience.03' },
		{ destinationId: '10.6678/80904', sourceId: 'audience.03' },
		{ destinationId: '10.6678/80905', sourceId: 'audience.03' },
		{ destinationId: '10.6678/80906', sourceId: 'audience.03' },
		{ destinationId: '10.6678/80907', sourceId: 'audience.03' },
		{ destinationId: '10.6678/80908', sourceId: 'audience.03' },
		{ destinationId: '10.6678/80909', sourceId: 'audience.03' },
		{ destinationId: '10.6678/80910', sourceId: 'audience.03' },
		{ destinationId: '10.6678/80911', sourceId: 'audience.03' },
		{ destinationId: '10.6678/80912', sourceId: 'audience.03' },
		{ destinationId: '10.2128/pr.12987', sourceId: 'audience.04' },
		{ sourceId: '10.2128/pr.12988', destinationId: '01' },
		{ sourceId: '10.2128/pr.12989', destinationId: '02' },
		{ sourceId: '10.2128/pr.12990', destinationId: '03' },
		{ sourceId: '10.2128/pr.12991', destinationId: '04' },
		{ sourceId: '10.2128/pr.12992', destinationId: '05' },
		{ sourceId: '10.2128/pr.12993', destinationId: '06' },
		{ sourceId: '10.2128/pr.12994', destinationId: '07' },
		{ sourceId: '10.2128/pr.12995', destinationId: '08' },
		{ sourceId: '10.2128/pr.12996', destinationId: '09' },
		{ sourceId: '10.2128/pr.12997', destinationId: '01' },
		{ sourceId: '10.2128/pr.12998', destinationId: '02' },
		{ sourceId: '10.2128/pr.12999', destinationId: '03' },
		{ sourceId: '10.2128/pr.13000', destinationId: '04' },
		{ sourceId: '10.2128/pr.13001', destinationId: '05' },
		{ sourceId: '10.2128/pr.13002', destinationId: '06' },
		{ sourceId: '10.2128/pr.13003', destinationId: '07' },
		{ sourceId: '10.2128/pr.13004', destinationId: '08' },
		{ sourceId: '10.2128/pr.13005', destinationId: '09' },
		{ sourceId: '10.2128/pr.13006', destinationId: '01' },
		{ destinationId: '10.2128/pr.13007', sourceId: 'audience.04' },
		{ destinationId: '10.2128/pr.13008', sourceId: 'audience.04' },
		{ destinationId: '10.2128/pr.13009', sourceId: 'audience.04' },
		{ destinationId: '10.2128/pr.13010', sourceId: 'audience.04' },
		{ destinationId: '10.2128/pr.13011', sourceId: 'audience.04' },
		{ destinationId: '10.2128/pr.13012', sourceId: 'audience.04' },
		{ destinationId: '10.2128/pr.13013', sourceId: 'audience.04' },
		{ destinationId: '10.2128/pr.13014', sourceId: 'audience.04' },
		{ destinationId: '10.2128/pr.13015', sourceId: 'audience.04' },
		{ destinationId: '10.2128/pr.13016', sourceId: 'audience.04' },
		{ destinationId: '10.2128/pr.13017', sourceId: 'audience.04' },
		{ destinationId: '10.2128/pr.13018', sourceId: 'audience.04' },
		{ destinationId: '10.2128/pr.13019', sourceId: 'audience.04' },
		{ destinationId: '10.2128/pr.13020', sourceId: 'audience.04' },
		{ destinationId: 'dataset.01', sourceId: 'audience.04' },
		{ destinationId: 'dataset.02', sourceId: 'audience.04' },
		{ destinationId: 'dataset.03', sourceId: 'audience.04' },
		{ destinationId: 'dataset.04', sourceId: 'audience.04' },
		{ destinationId: 'dataset.05', sourceId: 'audience.04' },
		{ destinationId: 'dataset.06', sourceId: 'audience.04' },
		{ destinationId: 'dataset.07', sourceId: 'audience.01' },
		{ destinationId: 'dataset.08', sourceId: 'audience.01' },
		{ destinationId: 'dataset.09', sourceId: 'audience.01' },
		{ destinationId: 'dataset.10', sourceId: 'audience.01' },



		{ sourceId: 'dataset.01', destinationId: '13' },
		{ sourceId: 'dataset.01', destinationId: '01' },
		{ sourceId: 'dataset.01', destinationId: '02' },
		{ sourceId: 'dataset.01', destinationId: '03' },
		{ sourceId: 'dataset.02', destinationId: '04' },
		{ sourceId: 'dataset.02', destinationId: '05' },
		{ sourceId: 'dataset.02', destinationId: '06' },
		{ sourceId: 'dataset.02', destinationId: '07' },
		{ sourceId: 'dataset.02', destinationId: '08' },
		{ sourceId: 'dataset.03', destinationId: '09' },
		{ sourceId: 'dataset.03', destinationId: '01' },
		{ sourceId: 'dataset.03', destinationId: '02' },
		{ sourceId: 'dataset.04', destinationId: '03' },
		{ sourceId: 'dataset.05', destinationId: '04' },
		{ sourceId: 'dataset.06', destinationId: '05' },
		{ sourceId: 'dataset.07', destinationId: '06' },
		{ sourceId: 'dataset.08', destinationId: '07' },
		{ sourceId: 'dataset.09', destinationId: '08' },
		{ sourceId: 'dataset.10', destinationId: '09' },
		{ sourceId: 'dataset.10', destinationId: '01' },

		{ sourceId: '10.2128/pr.12992', destinationId: '10.1244/1234.29' },
		
	],
	{ encode: JSON.stringify, decode: JSON.parse }
);

export const clearLocalAtoms = () => {
	localStorage.setItem('pubLibrary', '');
	localStorage.setItem('connectionLibrary', '');
	window.location.reload();
};
