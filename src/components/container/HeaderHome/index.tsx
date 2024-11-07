const HeaderHome = ({ title, subTitle, icon: Icon, children }: any) => {
  return (
    <div className=" border-t-[1px] my-6 py-8">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-8 h-8" />
        <h1 className="text-lg font-semibold tracking-wide text-slate-800">
          {title}
        </h1>
      </div>
      <h1 className="mb-2 text-slate-700">{subTitle}</h1>
      {children}
    </div>
  );
};
export default HeaderHome;
