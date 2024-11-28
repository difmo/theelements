import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'name', 
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'message',
      type: 'string',
    }),
    
    defineField({
      name: 'phone',
      type: 'string',
     
    }),
  
  ],
  preview: {
    select: {
      title: 'name',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
