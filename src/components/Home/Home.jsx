import Avatar from "@mui/material/Avatar";

function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 text-blue-600 ">
      <Avatar
        src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
        sx={{ width: 200, height: 200 }}
      />
      <h2 className="uppercase font-extrabold text-5xl">start Framework</h2>
      <p className="font-medium">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}

export default Home;
