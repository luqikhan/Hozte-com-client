import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { CommonHero, PricingSection, PricingCard } from "../components";

import {
  storyWritingGoldData,
  storyWritingSilverData,
  storyWritingPlatinumData,
  bookCoverGoldData,
  bookCoverPlatinumData,
  bookCoverSilverData,
  bookFullandFlaggerData,
  bookInteriorColoringData,
  bookInteriorEbookData,
  bookInteriorPaperbackgData,
  bookLayoutGoldData,
  bookLayoutPlatinumData,
  bookLayoutSilverData,
  youtubeGoldData,
  youtubePlatinumData,
  youtubeSilverData,
  amazonPubishingCampaignData,
  amazonPubishingData,
  videoGoldData,
  videoPlatinumData,
  videoSilverData,
} from "../constants";

function Packages() {
  const { id } = useParams();

  const [storyWritingSilver, setStoryWritingSilver] = useState(
    storyWritingSilverData
  );
  const [storyWritingGold, setStoryWritingGold] =
    useState(storyWritingGoldData);

  const [storyWritingPlatinum, setStoryWritingPlatinum] = useState(
    storyWritingPlatinumData
  );

  const [bookCoverSilver, setBookCoverSilver] = useState(bookCoverSilverData);
  const [bookCoverGold, setBookCoverGold] = useState(bookCoverGoldData);
  const [bookCoverPlatinum, setBookCoverPlatinum] = useState(
    bookCoverPlatinumData
  );

  const [bookInteriorColoring, setBookInteriorColoring] = useState(
    bookInteriorColoringData
  );
  const [bookInteriorEbook, setBookInteriorEbook] = useState(
    bookInteriorEbookData
  );
  const [bookInteriorPaperback, setBookInteriorPaperback] = useState(
    bookInteriorPaperbackgData
  );

  const [bookFullFlagger, setBookFullFlagger] = useState(
    bookFullandFlaggerData
  );

  const [bookLayoutSilver, setBookLayoutSilver] =
    useState(bookLayoutSilverData);
  const [bookLayoutGold, setBookLayoutGold] = useState(bookLayoutGoldData);
  const [bookLayoutPlatinum, setBookLayoutPlatinum] = useState(
    bookLayoutPlatinumData
  );

  const [youtubeSilver, setYoutubeSilver] = useState(youtubeSilverData);
  const [youtubeGold, setYoutubeGold] = useState(youtubeGoldData);
  const [youtubePlatinum, setYoutubePlatinum] = useState(youtubePlatinumData);

  const [videoSilver, setVideoSilver] = useState(videoSilverData);
  const [videoGold, setVideoGold] = useState(videoGoldData);
  const [videoPlatinum, setVideoPlatinum] = useState(videoPlatinumData);

  const [amazonPubishing, setAmazonPubishing] = useState(amazonPubishingData);
  const [amazonPubishingCampaign, setAmazonPubishingCampaign] = useState(
    amazonPubishingCampaignData
  );

  // handle changes start
  function handleChangeStorySilver(updatedValue, totalPrice) {
    setStoryWritingSilver((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }

  function handleChangeStoryGold(updatedValue, totalPrice) {
    setStoryWritingGold((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }
  function handleChangeStoryPlatinum(updatedValue, totalPrice) {
    setStoryWritingPlatinum((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }

  function handleChangeBookCoverSilver(updatedValue, totalPrice) {
    setBookCoverSilver((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }
  function handleChangeBookCoverGold(updatedValue, totalPrice) {
    setBookCoverGold((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }
  function handleChangeBookCoverPlatinum(updatedValue, totalPrice) {
    setBookCoverPlatinum((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }

  function handleChangeBookInteriorColoring(updatedValue, totalPrice) {
    setBookInteriorColoring((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }

  function handleChangeBookInteriorEbook(updatedValue, totalPrice) {
    setBookInteriorEbook((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }

  function handleChangeBookInteriorPaperback(updatedValue, totalPrice) {
    setBookInteriorPaperback((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }

  function handleChangeBookFullFlagger(updatedValue, totalPrice) {
    setBookFullFlagger((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }

  function handleChangeBookLayoutSilver(updatedValue, totalPrice) {
    setBookLayoutSilver((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }

  function handleChangeBookLayoutGold(updatedValue, totalPrice) {
    setBookLayoutGold((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }

  function handleChangeBookLayoutPlatinum(updatedValue, totalPrice) {
    setBookLayoutPlatinum((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }

  function handleChangePublishingonAmazon(updatedValue, totalPrice) {
    setAmazonPubishing((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }

  function handleChangePublishingonAmazonCampaign(updatedValue, totalPrice) {
    setAmazonPubishingCampaign((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }

  function handleChangeVideoSilver(updatedValue, totalPrice) {
    setVideoSilver((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }
  function handleChangeVideoGold(updatedValue, totalPrice) {
    setVideoGold((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }

  function handleChangeVideoPlatinum(updatedValue, totalPrice) {
    setVideoPlatinum((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }

  function handleChangeYoutubeSilver(updatedValue, totalPrice) {
    setYoutubeSilver((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }

  function handleChangeYoutubeGold(updatedValue, totalPrice) {
    setYoutubeGold((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }

  function handleChangeYoutubePlatinum(updatedValue, totalPrice) {
    setYoutubePlatinum((previousState) => ({
      ...previousState,
      totalPrice: previousState.price + totalPrice,
      ...updatedValue,
    }));
  }
  // handle changes end

  function renderPackge(id) {
    switch (id) {
      case "storywriting":
        return (
          <>
            <div className="row">
              <div className="col-sm-6">
                <div className="how-it-work-box">
                  <span>1</span>
                  <h5 className="title">Story writing for kids </h5>
                </div>
              </div>
            </div>
            <PricingSection>
              <PricingCard
                data={storyWritingSilver}
                onChange={handleChangeStorySilver}
              />
              <PricingCard
                data={storyWritingGold}
                onChange={handleChangeStoryGold}
              />
              <PricingCard
                data={storyWritingPlatinum}
                onChange={handleChangeStoryPlatinum}
              />
            </PricingSection>
          </>
        );
      case "bookdesigning":
        return (
          <>
            <div className="row">
              <div className="col-sm-6">
                <div className="how-it-work-box">
                  <span>2</span>
                  <h5 className="title">Children’s book designing</h5>
                </div>
              </div>
            </div>
            <div className="how-it-work-box">
              <h5 className="title">Cover Design</h5>
            </div>
            <PricingSection>
              <PricingCard
                data={bookCoverSilver}
                onChange={handleChangeBookCoverSilver}
              />
              <PricingCard
                data={bookCoverGold}
                onChange={handleChangeBookCoverGold}
              />
              <PricingCard
                data={bookCoverPlatinum}
                onChange={handleChangeBookCoverPlatinum}
              />
            </PricingSection>
            <div className="how-it-work-box">
              <h5 className="title">Interior Design</h5>
            </div>
            <PricingSection>
              <PricingCard
                data={bookInteriorColoring}
                onChange={handleChangeBookInteriorColoring}
              />
              <PricingCard
                data={bookInteriorEbook}
                onChange={handleChangeBookInteriorEbook}
              />
              <PricingCard
                data={bookInteriorPaperback}
                onChange={handleChangeBookInteriorPaperback}
              />
              <PricingCard
                data={bookFullFlagger}
                onChange={handleChangeBookFullFlagger}
              />
            </PricingSection>
          </>
        );
      case "booklayoutdesigning":
        return (
          <>
            <div className="row">
              <div className="col-sm-6">
                <div className="how-it-work-box">
                  <span>3</span>
                  <h5 className="title">Book Layout Design </h5>
                </div>
              </div>
            </div>
            <PricingSection>
              <PricingCard
                data={bookLayoutSilver}
                onChange={handleChangeBookLayoutSilver}
              />
              <PricingCard
                data={bookLayoutGold}
                onChange={handleChangeBookLayoutGold}
              />
              <PricingCard
                data={bookLayoutPlatinum}
                onChange={handleChangeBookLayoutPlatinum}
              />
            </PricingSection>
          </>
        );
      case "publishingonamazon":
        return (
          <>
            <div className="row">
              <div className="col-sm-6">
                <div className="how-it-work-box">
                  <span>4</span>
                  <h5 className="title">Perfectly Publishing on Amazon KDP </h5>
                </div>
              </div>
            </div>
            <PricingSection>
              <PricingCard
                data={amazonPubishing}
                onChange={handleChangePublishingonAmazon}
              />
              <PricingCard
                data={amazonPubishingCampaign}
                onChange={handleChangePublishingonAmazonCampaign}
              />
            </PricingSection>
          </>
        );
      case "videoanimation":
        return (
          <>
            <div className="row">
              <div className="col-sm-6">
                <div className="how-it-work-box">
                  <span>5</span>
                  <h5 className="title">Video Animation </h5>
                </div>
              </div>
            </div>
            <PricingSection>
              <PricingCard
                data={videoSilver}
                onChange={handleChangeVideoSilver}
              />
              <PricingCard data={videoGold} onChange={handleChangeVideoGold} />
              <PricingCard
                data={videoPlatinum}
                onChange={handleChangeVideoPlatinum}
              />
            </PricingSection>
          </>
        );
      case "youtubevideocreation":
        return (
          <>
            <div className="row">
              <div className="col-sm-6">
                <div className="how-it-work-box">
                  <span>6</span>
                  <h5 className="title">YouTube Video Content Creation</h5>
                </div>
              </div>
            </div>
            <PricingSection>
              <PricingCard
                data={youtubeSilver}
                onChange={handleChangeYoutubeSilver}
              />
              <PricingCard
                data={youtubeGold}
                onChange={handleChangeYoutubeGold}
              />
              <PricingCard
                data={youtubePlatinum}
                onChange={handleChangeYoutubePlatinum}
              />
            </PricingSection>
          </>
        );
      default:
        return null;
    }
  }

  return (
    <div>
      <CommonHero title="Packages" pageTitle="PACKAGES" />
      <div className="container">
        <div className="appie-how-it-work-area pt-100 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="appie-how-it-work-content">
                  <h2 className="title">Our Packages</h2>
                  <p>
                    Our complete services and there related packages
                    description.
                  </p>
                  <div>{renderPackge(id)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
