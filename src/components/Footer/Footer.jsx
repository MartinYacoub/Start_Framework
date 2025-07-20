import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
function Footer() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 bg-blue-600 h-36">
        <div className="h-32 uppercase font-bold text-white flex flex-col gap-4 items-center justify-center ">
          <h4 className="text-2xl">Location</h4>
          <p className="w-1/2 text-center">
            2215 John Daniel Drive Clark, MO 65243
          </p>
        </div>
        <div className="h-32 uppercase font-bold text-white flex flex-col gap-4 items-center justify-center ">
          <h4 className="text-2xl">AROUND THE WEB</h4>
          <ul className="flex gap-5 cursor-pointer">
            <li>
              <FacebookIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <LinkedInIcon />
            </li>
            <li>
              <LanguageIcon />
            </li>
          </ul>
        </div>
        <div className="h-32 uppercase font-bold text-white flex flex-col gap-4 items-center justify-center ">
          <h4 className="text-2xl">ABOUT FREELANCER</h4>
          <p className="w-2/3 text-center font-normal">
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
