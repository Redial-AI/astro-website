import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    description: 'A hero block with a title and optional description';
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_text_blocks';
  info: {
    description: 'A simple rich text block';
    displayName: 'Text Block';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface SectionsCtaPanel extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_panels';
  info: {
    description: 'Closing call-to-action';
    displayName: 'CTA Panel';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    primaryCtaHref: Schema.Attribute.String & Schema.Attribute.Required;
    primaryCtaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryCtaHref: Schema.Attribute.String;
    secondaryCtaLabel: Schema.Attribute.String;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    description: 'A section displaying frequently asked questions';
    displayName: 'FAQ Section';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'shared.faq-item', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Frequently asked questions'>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: 'Top section with main message and CTAs';
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    heroImage: Schema.Attribute.Media<'images'>;
    primaryCtaHref: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://redialbpo.com/book-a-consultation'>;
    primaryCtaLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Book a consultation'>;
    secondaryCtaHref: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#services'>;
    secondaryCtaLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Explore services'>;
  };
}

export interface SectionsIndustriesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_industries_sections';
  info: {
    description: 'A section displaying industries';
    displayName: 'Industries Section';
  };
  attributes: {
    industries: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Industries'>;
  };
}

export interface SectionsMetricsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_metrics_sections';
  info: {
    description: 'A section displaying metrics';
    displayName: 'Metrics Section';
  };
  attributes: {
    metrics: Schema.Attribute.Component<'shared.metric', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Delivery outcomes'>;
  };
}

export interface SectionsOfficesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_offices_sections';
  info: {
    description: 'A section displaying offices';
    displayName: 'Offices Section';
  };
  attributes: {
    offices: Schema.Attribute.Component<'shared.office', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Global delivery centers'>;
  };
}

export interface SectionsProcessSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_process_sections';
  info: {
    description: 'A section displaying the process';
    displayName: 'Process Section';
  };
  attributes: {
    steps: Schema.Attribute.Component<'shared.process-step', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'How engagement works'>;
  };
}

export interface SectionsServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_sections';
  info: {
    description: 'A section displaying services';
    displayName: 'Services Section';
  };
  attributes: {
    intro: Schema.Attribute.Text;
    services: Schema.Attribute.Component<'shared.service', true>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Services'>;
  };
}

export interface SectionsSocialProofSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_social_proof_sections';
  info: {
    description: 'A section displaying trusted logos';
    displayName: 'Social Proof Section';
  };
  attributes: {
    logos: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Trusted by growth-focused teams'>;
  };
}

export interface SectionsTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials_sections';
  info: {
    description: 'A section displaying testimonials';
    displayName: 'Testimonials Section';
  };
  attributes: {
    testimonials: Schema.Attribute.Component<'shared.testimonial', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Client feedback'>;
  };
}

export interface SectionsValuePropsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_value_props_sections';
  info: {
    description: 'A section displaying value propositions';
    displayName: 'Value Props Section';
  };
  attributes: {
    features: Schema.Attribute.Component<'shared.feature-item', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why teams choose Redial'>;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    description: 'Question and answer';
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_items';
  info: {
    description: 'Short feature/value proposition';
    displayName: 'Feature Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMetric extends Struct.ComponentSchema {
  collectionName: 'components_shared_metrics';
  info: {
    description: 'Business metric with context';
    displayName: 'Metric';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    note: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedNavLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_links';
  info: {
    description: 'Header or footer navigation link';
    displayName: 'Nav Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedOffice extends Struct.ComponentSchema {
  collectionName: 'components_shared_offices';
  info: {
    description: 'Delivery center details';
    displayName: 'Office';
  };
  attributes: {
    city: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String & Schema.Attribute.Required;
    focus: Schema.Attribute.String;
    languages: Schema.Attribute.String;
    timezoneCoverage: Schema.Attribute.String;
  };
}

export interface SharedProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_process_steps';
  info: {
    description: 'Step in engagement model';
    displayName: 'Process Step';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    stepNumber: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedService extends Struct.ComponentSchema {
  collectionName: 'components_shared_services';
  info: {
    description: 'Service card content';
    displayName: 'Service';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    idealFor: Schema.Attribute.String;
    outcome: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    description: 'Client proof quote';
    displayName: 'Testimonial';
  };
  attributes: {
    authorName: Schema.Attribute.String & Schema.Attribute.Required;
    authorRole: Schema.Attribute.String;
    company: Schema.Attribute.String;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero': BlocksHero;
      'blocks.text-block': BlocksTextBlock;
      'sections.cta-panel': SectionsCtaPanel;
      'sections.faq-section': SectionsFaqSection;
      'sections.hero': SectionsHero;
      'sections.industries-section': SectionsIndustriesSection;
      'sections.metrics-section': SectionsMetricsSection;
      'sections.offices-section': SectionsOfficesSection;
      'sections.process-section': SectionsProcessSection;
      'sections.services-section': SectionsServicesSection;
      'sections.social-proof-section': SectionsSocialProofSection;
      'sections.testimonials-section': SectionsTestimonialsSection;
      'sections.value-props-section': SectionsValuePropsSection;
      'shared.faq-item': SharedFaqItem;
      'shared.feature-item': SharedFeatureItem;
      'shared.metric': SharedMetric;
      'shared.nav-link': SharedNavLink;
      'shared.office': SharedOffice;
      'shared.process-step': SharedProcessStep;
      'shared.service': SharedService;
      'shared.testimonial': SharedTestimonial;
    }
  }
}
