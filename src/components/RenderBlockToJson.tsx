import { useRef } from "react";

const RenderBlockToJson = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    const buildBlockToJson = (element: HTMLElement) => {
      const json: any = {
        tag: element.tagName.toLowerCase(),
        attributes: {},
        children: [],
      };

      // Capture attributes
      for (const attr of element.attributes) {
        json.attributes[attr.name] = attr.value;
      }

      // Capture children or text content
      for (const child of element.childNodes) {
        if (child.nodeType === Node.ELEMENT_NODE) {
          json.children.push(buildBlockToJson(child as HTMLElement));
        } else if (
          child.nodeType === Node.TEXT_NODE &&
          child.textContent?.trim()
        ) {
          json.children.push({
            tag: "#text",
            text: child.textContent.trim(),
          });
        }
      }

      return json; // Return the constructed JSON object
    };

    if (divRef.current) {
      const resultJSON = buildBlockToJson(divRef.current);
      console.log(resultJSON);
    }
  };

  return (
    <div ref={divRef} className="bg-red-500 hello man how are you">
      <div className="container">
        <h2>How It Works</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>1. Type what type of website you want</h3>
            <p>Describe your ideal website, and we'll do the rest</p>
          </div>
          <div className="feature-item">
            <h3>2. Select from templates & customize</h3>
            <p>Choose from AI-generated templates and personalize your site</p>
          </div>
          <div className="feature-item">
            <h3>3. Easily deploy</h3>
            <p>Publish your website with just one click</p>
          </div>
        </div>
      </div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default RenderBlockToJson;
