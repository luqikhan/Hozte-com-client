import React from "react";
import { CommonHero } from "../components";

function FAQ(props) {
  const { title, content } = props;
  return (
    <div className="col-lg-12">
      <div className="appie-traffic-title1">
        <h3 className="title1">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

function FAQs() {
  return (
    <div>
      <CommonHero title="FAQS" pageTitle="FAQS" />
      <section className="appie-about-3-area pt-90 pb-90" id="features">
        <div className="container">
          <div className="row m-md-auto m-lg-auto">
            <FAQ
              title="How much does illustration cost?"
              content="The starting charges at Palmetto Publishing for illustrations are $50 for a full-page, $100 for a half-page, and $110 for a spot illustration. The price of illustration can vary greatly by genre, experience, and intricacy but the average cost for an illustration is $100."
            />
            <FAQ
              title="Do book illustrators get royalties?"
              content="At Hotze Publishing, our illustrators do not get royalties. When you work with one of our illustrators, you simply pay the cost per illustration and do not have to worry about any future royalties."
            />
            <FAQ
              title="Will The illustrations be Original?"
              content="Yes, The illustrations will be drawn from scratch only as per your story. NO CLIP ARTS are used. They are fully drawn."
            />
            <FAQ
              title="Can the characters be based on real-life persons?"
              content="Yes Definitely. The characters can be drawn in such a way that they resemble real-life persons."
            />
            <FAQ
              title="Will texts be added and the pages be formatted for Self-Publishing?"
              content="Yes, Hozte adds the texts and formats the pages for all Self-Publishing Platforms at only $2 per artwork."
            />
            <FAQ
              title="Do you create Double-page spreads?"
              content="Yes, I create Double-page spreads, Single page, and Spot illustrations too."
            />
            <FAQ
              title="Will Hotze transfer Full ownership rights of the artworks?"
              content="Yes, Hozte will give a Commercial usage License with the illustrations but if you want full ownership rights, that is chargeable at $10 per artwork."
            />
            <FAQ
              title="Will Hotze help me if I need any small edits after closing the project?"
              content="Definitely! Hozte shall always be there to help you."
            />
            <FAQ
              title="I don’t have a kindle direct publishing account."
              content="It’s not a problem at all! We will show you how to do it."
            />
            <FAQ
              title="How many words should be in a book?"
              content="It depends on the niche. We recommend having at least 8000 words."
            />
            <FAQ
              title="I have written a book but do not have cover designs?"
              content="Yes, we will design an attractive book cover."
            />
            <FAQ
              title="My book is ready but not properly formatted?"
              content="Yes, hozte will format your book with clickable TOCs and by following amazon kindle guidelines."
            />
            <FAQ
              title="My book is ready and needs a selling book title, keywords, and book description?"
              content="Yes. we'll write selling book titles, keywords, and book descriptions."
            />
            <FAQ
              title="My book is ready for publishing. Can you publish it?"
              content="Yes, we will  publish your book professionally."
            />
            <FAQ
              title="What did you need from me before publishing?"
              content="I need your amazon kindle KDP login for book publishing on your KDP account."
            />
            <FAQ
              title="What if I don't have a domain and hosting yet?"
              content="It's not a problem. We can work on a temporary domain that Hozte has, and once you purchase your own, We can transfer the site there."
            />
            <FAQ
              title="Can I edit website content after the job is done?"
              content="Yes, you can edit your website very quickly. Ask, if you want to change your site by yourself later. We will provide you with a video tutorial."
            />
            <FAQ
              title="What if I have multiple books to format?"
              content="we can handle this task. Just message me for a custom order. For large multiple orders, I need to see the files typically so I can brief the Manuscript. If, you have a complicated Non-Fiction file with lots of footnotes and references contact me first before ordering."
            />
            <FAQ
              title="What file format do you prefer for submission?"
              content="We prefer the file to be in Microsoft Word. Hozte can accept Adobe PDF and other file formats but please contact me first. If you don't have one of these file formats, we can figure it out. I don't like converting Apple pages. (It might cause a slight delay) Try and save it as a PDF or Word file."
            />
            <FAQ
              title="Do you do book formatting & layout design for Amazon, Ingramspark, and Lulu?"
              content="Yes, We are doing the book formatting & layout design for Amazon paperback and Kindle, Ingramspark, and Lulu. We are ready to make your book works for any platform you want."
            />
            <FAQ
              title="I don't know how to choose a package for my book formatting. I am having problems with that?"
              content="Contact us right now. We can support you to select a package or create a new customer offer to be matched with your specific requirements."
            />
            <FAQ
              title="How do I know this will work?"
              content="No problem, you have our guarantee. We are not just selling the designs, we are selling results. So if you don't get the results you will have your money back. 100% guaranteed."
            />
            <FAQ
              title="Is it possible to provide my own reference style for videos?"
              content="It's not possible for Hozte to create videos using other types of reference styles. Hozte uses only my own graphics and animation style."
            />
            <FAQ
              title="What is your revision policy?"
              content="I am flexible on revisions as long as the request is reasonable and doesn't include a change in the initial requirement."
            />
            <FAQ
              title="Do you provide videos in other languages?"
              content="YES, Hotze provides you with videos in multiple languages."
            />
            <FAQ
              title="How will we communicate during the project?"
              content="We usually communicate with our clients over Fiverr, WhatsApp, Email, Facebook, and Instagram."
            />
            <FAQ
              title="Can you redesign my existing websites or applications?"
              content="Yes, we can work on the existed website and applications to make their UI much better."
            />
            <FAQ
              title="Why UI design is important before development?"
              content="It gives you a view of the design of your product and what how will it look like, and also makes your developer understand and make the development process easy. This is the best work process followed and avoids misunderstandings and bad experiences between developers and clients."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQs;
