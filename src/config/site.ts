export const siteConfig = {
  name: 'Khalil Ahmad',
  title: 'Khalil Ahmad | AC & Home Appliance Repair Services',
  description: 'Professional AC, refrigerator, washing machine and microwave repair and maintenance services. Book a technician or contact us today.',
  
  // Contact Information - Replace placeholders with real data
  contact: {
    phone: '+92 300 XXXXXXX',
    phoneRaw: '+92300XXXXXXX',
    whatsapp: '92300XXXXXXX',
    whatsappLink: 'https://wa.me/92300XXXXXXX',
    email: '[EMAIL ADDRESS]',
    address: '[SERVICE AREA]',
    workingHours: '[WORKING HOURS]',
    serviceArea: '[SERVICE AREA]',
  },

  // Navigation links
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose' },
    { label: 'Contact Us', href: '#contact' },
  ],

  // Service categories
  services: [
    {
      id: 'ac-repair',
      title: 'AC Repair & Maintenance',
      icon: 'snowflake',
      items: [
        'Split AC',
        'Window AC',
        'Duct AC',
        'Inverter & Non-Inverter',
        'AC Installation',
        'Gas Charging',
        'Cooling Problems',
        'Compressor & PCB Repair',
        'Complete AC Servicing',
      ],
    },
    {
      id: 'refrigerator',
      title: 'Refrigerator Repair',
      icon: 'refrigerator',
      items: [
        'Inverter & Non-Inverter',
        'Cooling Problems',
        'Compressor',
        'Gas Leakage & Charging',
        'Thermostat Repair',
        'PCB Repair',
      ],
    },
    {
      id: 'washing-machine',
      title: 'Washing Machine Repair',
      icon: 'washing-machine',
      items: [
        'Automatic',
        'Front Load & Top Load',
        'Inverter & Non-Inverter',
        'Motor Repair',
        'PCB Repair',
        'Drainage Problems',
        'Other Faults',
      ],
    },
    {
      id: 'microwave',
      title: 'Microwave Oven Repair',
      icon: 'microwave',
      items: [
        'Heating Problems',
        'PCB & Electrical Faults',
        'Magnetron',
        'Other Components',
      ],
    },
  ],

  // Why Choose Us features
  features: [
    {
      title: 'Professional Technicians',
      description: 'Skilled technicians focused on diagnosing and resolving appliance problems efficiently.',
      icon: 'technician',
    },
    {
      title: 'Fast Response',
      description: 'Make it easy for customers to request service when they need assistance.',
      icon: 'fast',
    },
    {
      title: 'Quality Workmanship',
      description: 'Focus on careful, professional repair and maintenance.',
      icon: 'quality',
    },
    {
      title: 'Convenient Booking',
      description: 'Customers can quickly request a technician through the booking form.',
      icon: 'booking',
    },
    {
      title: 'Multiple Appliance Services',
      description: 'One service provider for AC and essential home appliances.',
      icon: 'multiple',
    },
    {
      title: 'Customer Focused',
      description: 'Clear communication and service designed around customer needs.',
      icon: 'customer',
    },
  ],

  // How It Works steps
  steps: [
    {
      number: '01',
      title: 'Book a Technician',
      description: 'Submit your service request.',
    },
    {
      number: '02',
      title: 'We Contact You',
      description: 'Confirm the service details and preferred time.',
    },
    {
      number: '03',
      title: 'Technician Visits',
      description: 'A technician visits the provided location.',
    },
    {
      number: '04',
      title: 'Problem Solved',
      description: 'The appliance is inspected and serviced/repaired.',
    },
  ],

  // Booking form service options
  serviceOptions: [
    'AC Repair & Maintenance',
    'Refrigerator Repair',
    'Washing Machine Repair',
    'Microwave Oven Repair',
  ],

  // Footer quick links
  footerLinks: {
    quickLinks: [
      { label: 'Home', href: '#home' },
      { label: 'About Us', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Why Choose Us', href: '#why-choose' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Book a Technician', href: '#booking' },
    ],
    services: [
      'AC Repair',
      'Refrigerator Repair',
      'Washing Machine Repair',
      'Microwave Oven Repair',
    ],
  },
}