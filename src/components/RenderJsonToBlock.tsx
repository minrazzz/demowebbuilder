import React, { useState } from "react";

const json = {
  tag: "div",
  attributes: { className: "bg-red-500 hello man how are you" },
  children: [
    {
      tag: "div",
      attributes: { className: "container" },
      children: [
        {
          tag: "h2",
          attributes: {},
          children: [{ tag: "#text", text: "How It Works" }],
        },
        {
          tag: "div",
          attributes: { className: "feature-list" },
          children: [
            {
              tag: "div",
              attributes: { className: "feature-item" },
              children: [
                {
                  tag: "h3",
                  attributes: {},
                  children: [
                    {
                      tag: "#text",
                      text: "1. Type what type of website you want",
                    },
                  ],
                },
                {
                  tag: "p",
                  attributes: {},
                  children: [
                    {
                      tag: "#text",
                      text: "Describe your ideal website, and we'll do the rest",
                    },
                  ],
                },
              ],
            },
            {
              tag: "div",
              attributes: { className: "feature-item" },
              children: [
                {
                  tag: "h3",
                  attributes: {},
                  children: [
                    {
                      tag: "#text",
                      text: "2. Select from templates & customize",
                    },
                  ],
                },
                {
                  tag: "p",
                  attributes: {},
                  children: [
                    {
                      tag: "#text",
                      text: "Choose from AI-generated templates and personalize your site",
                    },
                  ],
                },
              ],
            },
            {
              tag: "div",
              attributes: { className: "feature-item" },
              children: [
                {
                  tag: "h3",
                  attributes: {},
                  children: [{ tag: "#text", text: "3. Easily deploy" }],
                },
                {
                  tag: "p",
                  attributes: {},
                  children: [
                    {
                      tag: "#text",
                      text: "Publish your website with just one click",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const renderfromJson = (json: any) => {
  if (json?.tag === "#text") {
    return json.text;
  }

  const { tag, attributes, children } = json;
  return React.createElement(
    tag,
    { ...attributes, key: Math.random().toString() },
    children?.length
      ? children.map((child: any) => renderfromJson(child))
      : null
  );
};

const RenderJsonToBlock = () => {
  const [renderedComponent] = useState<React.ReactNode>(() =>
    renderfromJson(json)
  );
  return <div>{renderedComponent}</div>;
};

export default RenderJsonToBlock;
