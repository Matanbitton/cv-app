export default function Info({ nameCV, email, phone, gitHub }) {
  return (
    <div className=" border-sky-500 border-b-2 ">
      <div className="flex justify-center">{nameCV}</div>
      <div className="flex gap-2 text-sm justify-center">
        <p className="hover:bg-slate-300">{email}</p>
        <p className="hover:bg-slate-300">{phone}</p>
        <p className="hover:bg-slate-300">{gitHub}</p>
      </div>
    </div>
  );
}
