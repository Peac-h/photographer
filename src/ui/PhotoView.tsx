import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { DataItemType, data } from "../data";
import { Modal } from "./Modal";

const dataIds = data.map((item) => item.id);

const getViews = (photoId: string | undefined, ids: number[]) => {
  const maxId = Math.max(...ids);
  const minId = Math.min(...ids);

  const nextView =
    Number(photoId) === maxId
      ? `/photo/${minId}`
      : `/photo/${Number(photoId) + 1}`;
  const prevView =
    Number(photoId) === minId
      ? `/photo/${maxId}`
      : `/photo/${Number(photoId) - 1}`;

  return { nextView, prevView };
};

const PhotoComment = (props: { comment: string; commentLink?: string }) =>
  props.comment && (
    <div className="max-w-xs p-4 sm:max-w-sm md:max-w-lg md:p-0 md:pt-4">
      {props.comment}
      {props.commentLink && (
        <>
          {" "}
          ―{" "}
          <a href={props.commentLink} className="link" target="_blank">
            See more
          </a>
        </>
      )}
    </div>
  );

const PhotoDescription = (props: {
  description: string;
  externalLink?: string;
}) => (
  <div className="max-w-xs p-4 sm:max-w-sm md:max-w-lg md:p-0">
    <p
      className="inline"
      dangerouslySetInnerHTML={{
        __html: props.description,
      }}
    />
    {props?.externalLink && (
      <>
        {" "}
        ―{" "}
        <a href={props.externalLink} className="link" target="_blank">
          See more
        </a>
      </>
    )}
  </div>
);

const PhotoDetails = (props: {
  location: string;
  published: string;
  artist: string;
  camera?: string;
}) => (
  <div className="flex flex-col gap-0.5">
    <p className="flex items-center gap-2 whitespace-nowrap">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        version="1.1"
        aria-hidden="false"
        fill="rgb(120 113 108)"
      >
        <desc lang="en-US">A map marker</desc>
        <path d="M17.6 4.2C16 2.7 14.1 2 12 2s-4 .7-5.6 2.2C4.8 5.7 4 7.7 4 10.2c0 1.7.7 3.5 2 5.4 1.3 2 3.3 4.1 6 6.4 2.7-2.3 4.7-4.4 6-6.4 1.3-2 2-3.8 2-5.4 0-2.5-.8-4.5-2.4-6zm-1.1 10.1c-1 1.5-2.5 3.2-4.5 5.1-2-1.9-3.5-3.6-4.5-5.1-1-1.5-1.5-2.9-1.5-4.1 0-1.8.6-3.3 1.7-4.5C8.9 4.6 10.3 4 12 4s3.1.6 4.3 1.7c1.2 1.2 1.7 2.6 1.7 4.5 0 1.2-.5 2.5-1.5 4.1zm-2-4.3c0 1.4-1.1 2.5-2.5 2.5S9.5 11.4 9.5 10s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5z"></path>
      </svg>{" "}
      {props.location}
    </p>
    <p className="flex items-center gap-2 whitespace-nowrap">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        version="1.1"
        aria-hidden="false"
        fill="rgb(120 113 108)"
      >
        <desc lang="en-US">Calendar outlined</desc>
        <path d="M21 6v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14z"></path>
      </svg>
      {props.published}
    </p>
    <p className="flex items-center gap-2 whitespace-nowrap">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        version="1.1"
        aria-hidden="false"
        fill="rgb(120 113 108)"
      >
        <desc lang="en-US">Camera</desc>
        <path d="m14.12 4 1.83 2H20v12H4V6h4.05l1.83-2h4.24ZM15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2Zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3Zm0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Z"></path>
      </svg>{" "}
      {props.camera}
    </p>
    <p className="flex items-center gap-2 whitespace-nowrap">
      <a href={props.artist} className="link" target="_blank">
        See the artist
      </a>
    </p>
  </div>
);

const Photo = (props: { link: string; handleClick: () => void }) => (
  <img
    src={props.link}
    alt="An image of Georgia"
    loading="lazy"
    decoding="async"
    className="cursor-pointer transition duration-200 ease-in-out hover:sepia sm:max-w-2xl md:max-w-4xl xl2:max-w-full"
    onClick={props.handleClick}
  />
);

const Icon = (props: { fillColor: string; direction: "left" | "right" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="31px"
    width="31px"
    viewBox="0 -960 960 960"
    className={props.fillColor}
  >
    {props.direction === "left" ? (
      <path
        className="translate-x-40"
        d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"
      />
    ) : (
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    )}
  </svg>
);

const ViewButtons = (props: {
  prevView: string;
  nextView: string;
  fillColor: string;
  zIndex: string;
}) => {
  const navigate = useNavigate();
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      event.key === "ArrowLeft" && navigate(props.prevView);
      event.key === "ArrowRight" && navigate(props.nextView);
    };

    let startX: number | null = null;

    const handleTouchStart = (event: TouchEvent) => {
      startX = event.touches[0].clientX;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (startX !== null) {
        const endX = event.changedTouches[0].clientX;

        startX - endX > 50 && navigate(props.nextView);
        endX - startX > 50 && navigate(props.prevView);

        startX = null;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigate, props.prevView, props.nextView]);

  return (
    <>
      <button
        className={`fixed left-0 top-2/4 ${props.zIndex} h-full w-10 -translate-y-2/4 md:w-16 ${isTouchDevice ? "hidden" : ""}`}
      >
        <Link
          to={props.prevView}
          className="flex h-full items-center justify-center"
        >
          <Icon fillColor={props.fillColor} direction="left" />
        </Link>
      </button>

      <button
        className={`fixed right-0 top-2/4 ${props.zIndex} h-full w-10 -translate-y-2/4 md:w-16 ${isTouchDevice ? "hidden" : ""}`}
      >
        <Link
          to={props.nextView}
          className="flex h-full items-center justify-center"
        >
          <Icon fillColor={props.fillColor} direction="right" />
        </Link>
      </button>
    </>
  );
};

export const PhotoView = () => {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState<DataItemType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { nextView, prevView } = getViews(photoId, dataIds);

  useEffect(() => {
    if (photoId) {
      const foundPhoto =
        data.flat().find((item) => item.id === Number(photoId)) || null;
      setPhoto(foundPhoto);
    }
  }, [photoId]);

  // Toggle body scroll
  useEffect(() => {
    modalOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return (
    <>
      <div className="flex flex-col gap-8">
        {photo?.comment && (
          <PhotoComment
            comment={photo.comment}
            commentLink={photo.commentLink}
          />
        )}

        {photo && (
          <div className="flex max-w-md flex-col items-end gap-8 sm:max-w-lg md:flex-row">
            <div
              className={`${modalOpen ? "opacity-0" : "opacity-100"} ${photo.comment ? "" : "mt-4"}`}
            >
              <Photo link={photo.link} handleClick={() => setModalOpen(true)} />
            </div>
            <PhotoDetails
              location={photo.location}
              published={photo.published}
              camera={photo.camera}
              artist={photo.artist}
            />
          </div>
        )}

        {photo?.description && (
          <PhotoDescription
            description={photo.description}
            externalLink={photo.externalLink}
          />
        )}

        <ViewButtons
          prevView={prevView}
          nextView={nextView}
          fillColor={
            modalOpen
              ? "fill-stone-400 dark:fill-stone-700"
              : "fill-stone-300 dark:fill-stone-800"
          }
          zIndex={modalOpen ? "z-50" : "z-30"}
        />
      </div>

      {modalOpen && photo?.link && (
        <Modal src={photo.link} handleModal={() => setModalOpen(false)} />
      )}
    </>
  );
};
