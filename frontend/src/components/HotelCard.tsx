import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";

interface HotelCardProps {
  image: string;
  title: string;
  night: string;
  rating: number;
  isGuestFavorite?: boolean;
}

function HotelCard({
  image,
  title,
  night,
  rating,
  isGuestFavorite = false,
}: HotelCardProps) {
  return (
    <div className="">
      <div className="object-cover rounded-3xl relative">
        <img
          src={image}
          alt={title}
          className="object-cover aspect-square rounded-3xl"
          width="200px"
        />

        {isGuestFavorite && (
          <div className="bg-white/70 cursor-pointer w-max px-3 font-semibold py-1 absolute top-3 left-3 rounded-full">
            <p className="text-xs">Guest Favourite</p>
          </div>
        )}

        <span className="absolute cursor-pointer top-2 py-1 left-40 text-white">
          <FavoriteBorderIcon fontSize="medium" />
        </span>
      </div>

      <div className="mt-1 px-1 cursor-pointer max-w-[14rem]">
        <p className="text-base font-semibold ">{title}</p>
        <p className="text-sm text-gray-600">
          {night}{" "}
          <span className="inline-flex items-center gap-1">
            <StarIcon fontSize="inherit" /> {rating}
          </span>
        </p>
      </div>
    </div>
  );
}

export default HotelCard;
