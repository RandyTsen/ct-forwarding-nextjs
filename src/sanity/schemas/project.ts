import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID (slug for internal use, e.g. telekom)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "client",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Industry Tag",
      type: "string",
    }),
    defineField({
      name: "scope",
      title: "Project Scope",
      type: "string",
    }),
    defineField({
      name: "duration",
      title: "Duration Label",
      type: "string",
    }),
    defineField({
      name: "period",
      title: "Period (e.g. 2015 to Present)",
      type: "string",
    }),
    defineField({
      name: "highlight",
      title: "Highlight Stat (large number/word)",
      type: "string",
    }),
    defineField({
      name: "highlightLabel",
      title: "Highlight Label",
      type: "string",
    }),
    defineField({
      name: "accentColor",
      title: "Accent Color (hex)",
      type: "string",
      initialValue: "#0B7A3A",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "outcomes",
      title: "Outcomes (checklist items)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "metrics",
      title: "Metrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "v", title: "Value", type: "string" }),
            defineField({ name: "l", title: "Label", type: "string" }),
          ],
          preview: { select: { title: "v", subtitle: "l" } },
        },
      ],
    }),
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "imageAlt",
      title: "Image Alt Text",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 99,
    }),
  ],
  preview: {
    select: { title: "client", subtitle: "tag", media: "image" },
  },
});
