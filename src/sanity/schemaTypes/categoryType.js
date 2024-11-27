import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const careerType = defineType({
  name: 'career',
  title: 'Career Application',
  type: 'document',
  icon: TagIcon,
  fields: [
    // Job Position Field
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      description: 'Job position being applied for',
    }),

    // Applicant Name Field
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      description: 'Full name of the applicant',
    }),

    // Email Field
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'Email address of the applicant',
    }),

    // Phone Number Field
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Phone number of the applicant',
    }),

    // Resume Field (File Upload)
    defineField({
      name: 'resume',
      title: 'Resume',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx', // Limit file types to commonly used resume formats
      },
      description: 'Upload resume in PDF, DOC, or DOCX format',
    }),

    // Cover Letter / Message Field
    defineField({
      name: 'message',
      title: 'Cover Letter / Message',
      type: 'text',
      description: 'Applicant’s cover letter or message explaining why they are suitable for the job',
    }),

    // Status Field (Optional)
    defineField({
      name: 'status',
      title: 'Application Status',
      type: 'string',
      options: {
        list: [
          { title: 'Under Review', value: 'under_review' },
          { title: 'Interview Scheduled', value: 'interview_scheduled' },
          { title: 'Rejected', value: 'rejected' },
          { title: 'Hired', value: 'hired' },
        ],
        layout: 'radio',
      },
      initialValue: 'under_review',
      description: 'Current status of the applicant\'s application',
    }),
  ],
})
