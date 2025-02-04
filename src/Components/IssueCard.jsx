export default function IssueCard() {
  return (
    <div className="w-[336px] h-[527px] rounded-[15px] border-[3px] border-solid border-primary m-[18px]">
      {/* Image */}
      <div>
        <img
          className="w-[330px] h-[180px]"
          src="../../public/imageDe.png"
          alt="Photo of issue"
        />
      </div>
      <div className="h-[357px] bg-primary rounded-[15px] px-[22px] pt-[25px] pb-[15px]">
        {/* Name of Issue */}
        <h3 className="text-[20px] font-[700] text-tertiary">Title</h3>
        <hr className="border-none h-[0.5px] bg-tertiary my-[10px]" />
        {/* Desc of Issue */}
        <div className="w-[290px] h-[108px] text-secondary text-[20px] font-[500] leading-[24px]">
          descriptiondescriptiondescriptiondescriptiondescriptiondescriptibnv,assdnaca,kxxncskax
          caslncn
        </div>
      </div>
    </div>
  );
}
