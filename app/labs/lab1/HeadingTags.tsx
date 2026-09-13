export default function HeadingTags() {
  return (
    <>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and
        subsections. Each section is usually prefaced with a short title or
        heading that attempts to summarize the topic of the section it precedes.
        For instance this paragraph is preceded by the heading Heading Tags. The
        font of the section headings are usually larger and bolder than their
        subsection headings. This document uses headings to introduce topics
        such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags
        can be used to format plain text so that it renders in a browser as
        large headings. There are 6 heading tags for different sizes: h1, h2,
        h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest
        heading. A <span id="wd-inline-span">span</span> sits in this sentence
        without starting a new line.
      </div>
      <div id="wd-ai-headings">
        <h4>Lab notes</h4>
        This outline shows how heading tags of different sizes nest inside one
        another to organize a page.
        <h5>What I built</h5>
        A short sample section that demonstrates an h4, an h5, and an h6
        appearing in decreasing order of size.
        <h6>Next step</h6>
        Try adding more sections and subsections to see how the browser renders
        each heading level.
      </div>
      <div id="wd-your-heading">
        <h4>Maya Robie</h4>
        Hi there! I am a <span id="wd-your-span">fourth</span> year student at Northeastern University studying computer science. I like to try new recipes and new restaurants around Boston, so if you have any good recs let me know!
      </div>
    </>
  );
}
