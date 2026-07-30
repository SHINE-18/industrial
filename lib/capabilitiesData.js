/**
 * Pure serializable data — NO React components/functions here.
 * Icons are referenced by string name and looked up in client components.
 */
export const CAPABILITIES_DATA = [
  {
    id: 'concrete-asphalt',
    category: 'Batching & Mixing',
    title: 'Concrete & Asphalt Plants',
    iconName: 'Building2',
    image: '/images/asphalt-plant.png',
    desc: 'High-capacity continuous and batching plants engineered for extreme aggregate demands.',
    items: ['Continuous Twin-Shaft Pugmills', 'High-Output Aggregate Batching Silos', 'Modular Rapid-Erect Batching Plants', 'Warm-Mix Asphalt Modifications'],
    feature: true,
  },
  {
    id: 'bitumen-storage',
    category: 'Bitumen & Thermal',
    title: 'Bitumen Storage & Heating',
    iconName: 'Flame',
    image: '/images/bitumen-tanks.png',
    desc: 'Thermally insulated bitumen storage tanks with indirect thermal oil heating loops.',
    items: ['Thermal Oil Heated Storage Tanks', 'PMB High-Shear Agitation Systems', 'Automated Bitumen Dosing Pumps', 'Calibrated Load Cell Weigh Hoppers'],
  },
  {
    id: 'thermal-systems',
    category: 'Bitumen & Thermal',
    title: 'Thermal Systems & Dryers',
    iconName: 'Sun',
    image: '/images/rotary-dryer.png',
    desc: 'Heavy-duty counter-flow aggregate dryers, multi-fuel burners, and high-efficiency heat exchangers.',
    items: ['Counter-Flow Aggregate Rotary Dryers', 'Multi-Fuel Burners (Gas, Diesel, Bio)', 'Exhaust Baghouse Filtration', 'CFD Heat Transfer Optimization'],
  },
  {
    id: 'wearguard-line',
    category: 'Batching & Mixing',
    title: 'WearGuard™ Drum Retrofits',
    iconName: 'ShieldCheck',
    image: '/images/wearguard-parts.png',
    desc: 'Proprietary CFD-analyzed drum flighting & wear plate system. Reduces shell erosion by up to 65%.',
    items: ['CFD Flight Curtain Optimization', '450+ HBW High-Chrome Wear Plates', 'Bolt-In Quick Retrofit Assembly', 'Reduced Dust Carryover'],
    product: true,
    feature: true,
  },
  {
    id: 'material-handling',
    category: 'Material Handling',
    title: 'Material Handling & Storage',
    iconName: 'Truck',
    image: '/images/material-handling.png',
    desc: 'Heavy-duty belt conveyors, bucket elevators, screw feeders, and bulk storage silos.',
    items: ['Deep-Trough Heavy Belt Conveyors', 'Continuous Bucket Elevators', 'Cement & Fly Ash Bolted Silos', 'Variable Speed Screw Feeders'],
  },
  {
    id: 'automation-control',
    category: 'Automation & R&D',
    title: 'PLC & SCADA Automation',
    iconName: 'Cpu',
    image: '/images/automation-room.png',
    desc: 'Custom PLC control panels, SCADA HMIs, and cloud-synced plant telemetry systems.',
    items: ['Fully Automated Batching Software', 'Industrial PLC & MCC Cabinet Panels', 'Real-Time Weigh Scale Telemetry', 'Remote Diagnostic Alarms'],
    feature: true,
  }
];
