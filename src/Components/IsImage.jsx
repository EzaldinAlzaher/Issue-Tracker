export default function IsImage({ imageUrl }) {
  let url;
  //   check if imageUrl
  if (imageUrl != "string") {
    url = imageUrl;
  } else {
    url = "../../public/imageDe.png";
  }

  return (
    <img
      className="w-[330px] h-[180px] rounded-l-[13px] rounded-r-[13px]"
      src={url}
      alt="Photo of issue"
    />
  );
}
