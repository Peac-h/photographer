export const Modal = (props: { src: string; handleModal: () => void }) => {
  return (
    <div>
      <div
        className="fixed left-0 top-0 z-10 min-h-screen min-w-full bg-stone-950 opacity-70"
        onClick={props.handleModal}
      ></div>

      {props.src && (
        <img
          src={props.src}
          alt="An image of Georgia"
          loading="lazy"
          decoding="async"
          className="fixed left-2/4 top-2/4 z-20 max-h-screen -translate-x-2/4 -translate-y-2/4 px-20 py-4"
        />
      )}
    </div>
  );
};
