import { TextField, Button } from "@mui/material";

function Contact() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 text-blue-600">
      <h2 className="uppercase font-extrabold text-5xl">Contact Section</h2>
      <form className="w-1/2 flex flex-col gap-2">
        <div className="flex gap-5">
          <TextField label="Name" variant="standard" className="w-1/2" />
          <TextField label="Age" variant="standard" className="w-1/2" />
        </div>
        <TextField label="Email" variant="standard" fullWidth />
        <TextField label="Password" variant="standard" fullWidth />
        <div className="mt-4 flex justify-center ">
          <Button variant="contained">Send Message</Button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
