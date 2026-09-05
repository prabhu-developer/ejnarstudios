import React from 'react';
import CareersClient from '@/components/views/CareersClient';
import { getPageMetadata } from '@/lib/metadata.config';
import { generateJobPostingSchema } from '@/lib/seo';
import { JOB_OPENINGS } from '@/lib/data/jobs';

export const metadata = getPageMetadata('careers');

export default function CareersPage() {
  const jobSchemas = JOB_OPENINGS.map((job) =>
    generateJobPostingSchema({
      title: job.title,
      description: `${job.shortSummary} Key responsibilities include: ${job.responsibilities.slice(0, 3).join('; ')}.`,
      location: job.location,
      type: job.type,
    })
  );

  return (
    <>
      {jobSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <CareersClient />
    </>
  );
}
