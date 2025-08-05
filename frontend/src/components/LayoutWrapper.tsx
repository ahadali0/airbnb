function LayoutWrapper({ children }: any) {
  return (
    <div className="max-w-[100rem] lg:px-10 md:px-7 py-5 px-5 mx-auto w-full">
      {children}
    </div>
  );
}

export default LayoutWrapper;
