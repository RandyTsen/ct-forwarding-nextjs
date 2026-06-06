import { defineField, defineType } from "sanity";

export const careerPostSchema = defineType({
  name: "careerPost",
  title: "Career Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Kota Kinabalu, Sabah",
    }),
    defineField({
      name: "type",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "Full-time" },
          { title: "Part-time", value: "Part-time" },
          { title: "Contract", value: "Contract" },
          { title: "Internship", value: "Internship" },
        ],
      },
      initialValue: "Full-time",
    }),
    defineField({
      name: "description",
      title: "Job Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "isOpen",
      title: "Position Open?",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "department" },
  },
});
